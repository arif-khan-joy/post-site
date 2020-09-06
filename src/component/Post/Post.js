import React from 'react';
import Button from '@material-ui/core/Button';
import './Post.css'
import { Link } from 'react-router-dom';
import PostDetail from '../PostDetail/PostDetail';


const Post = (props) => {
    const {title,body,id}=props.name
    return (
        <div className="post-design">
            <h3>{title}</h3>
             <p>{body}</p>
    <Button variant="contained" color="gray"><Link style={{textDecoration:'none'}} to={`/post/${id}`}>See more</Link>
</Button>

        
          
        </div>
       
    );
};

export default Post;