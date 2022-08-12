import React, { useEffect, useState } from 'react'
import './comment.css'
import EndMsg from './EndMsg';
import InfiniteScroll from 'react-infinite-scroll-component';
import SetComm from './SetComm';
import Spinner from './Spinner';



function Comments() {

    const [comment, setComments] = useState([]);
    const [more, setMore] = useState(true);
    const [page, setPage] = useState(2)




    const getComments = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20");
        setComments(await response.json());
    }


    useEffect(() => {
        getComments();
    }, []);


    const fetchPost = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`);
        const dat = await res.json();
        return dat;

    }
    const fetchData = async () => {

        const commentsFormServer = await fetchPost();
        setComments([...comment, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
            setMore(false)
        }
        setPage(page + 1);
    }


    return (
        <>

            <section className="comment-wrapper">
                <InfiniteScroll
                    className='row'
                    dataLength={comment.length}
                    next={fetchData}
                    hasMore={more}
                    loader={<Spinner />}

                    endMessage={<EndMsg />}
                >
                    {
                        comment.map((curr) => {

                            return (

                                <SetComm key={curr.id} curr={curr} />
                            )

                        })
                    }
                </InfiniteScroll>
            </section>

        </>
    )
}
export default Comments
