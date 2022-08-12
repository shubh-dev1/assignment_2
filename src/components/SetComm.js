import React from 'react'


function SetComm({curr : {id,name,email,body}}){
    return (
        <>
            
            <div className='comment-col' key={id}>
                                    <span>{name}</span>
                                    <address>{email}</address>
                                    <p>{body}</p>
                                    </div>                                       
        </>
    )

}
export default SetComm