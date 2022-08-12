import React, { useEffect, useState } from 'react'
import './Posts.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import SetPost from './SetPost';
import EndMsg from './EndMsg';
import Spinner from './Spinner';



function Post() {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(2)
    const [more, setMore] = useState(true)

    const getPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20');
        const data = await response.json();
        setPosts(data);
    }


    useEffect(() => {
        getPosts();
    }, []);


    const fetchPost = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`);
        const dat = await res.json();
        return dat;
    }


    const fetchData = async () => {
        const commentsFormServer = await fetchPost();
        setPosts([...posts, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
            setMore(false)
        }
        setPage(page + 1);
    }


    return (
        <>

            <section className="post-wrapper">
                <InfiniteScroll
                    className='post-row'
                    dataLength={posts.length}
                    next={fetchData}
                    hasMore={more}
                    loader={<Spinner/>}
                    endMessage={<EndMsg/>}
                >
                    {
                     posts.map((curr) => {
                            return (
                                <SetPost key={curr.id} curr={curr}/>
                            )})
                    }
                </InfiniteScroll>
            </section>

        </>
    )
}
export default Post
