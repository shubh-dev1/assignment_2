import React from 'react'


function SetPost({curr : {id,title,body}}){
    return (
        <>
            
            <div className='post-col' key={id}>
                                    <span>{title}</span>
                                    <p>{body}</p>
                                </div>
        </>
    )

}
export default SetPost