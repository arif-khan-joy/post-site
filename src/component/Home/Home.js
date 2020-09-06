import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post,setPost]=useState([])

    useEffect(()=>{ 
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res=>res.json())
        .then(data=>setPost(data))
        
    },[])
    return (
        <div>
            
            {
                post.map(detail=><Post name={detail}></Post>)
            }
            
        </div>
    );
};

export default Home;