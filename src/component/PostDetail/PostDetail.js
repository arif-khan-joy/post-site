import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Coment from '../Coment/Coment';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



const PostDetail = (props) => {
    const {postId}=useParams()
    const [detail,setDetail]=useState({})
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetail(data))
    }, [])
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    

    const [coment,setComent]=useState([])
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComent(data))
    },[])

    console.log(props)

    return (
        
           <div>

            <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="h5" component="h1">
            <h3>Post Detail</h3>
        </Typography>
        
        <Typography variant="h5" component="h2">
            {detail.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
         {detail.body}
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small"><Link style={{textDecoration:'none'}} to={`/coments/${postId}`}></Link></Button>

      </CardActions>
    </Card>
    <h2 style={{marginLeft:'15px'}}>Coments</h2>
    {
      coment.map(pd=><Coment post={pd}></Coment>)
    }
    </div>
    );
    };


export default PostDetail;