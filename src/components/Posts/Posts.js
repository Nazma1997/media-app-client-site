import {React, useState, useEffect}from 'react';
// import {useSelector} from 'react-redux';
import axios from 'axios';
import {Grid, CircularProgress} from '@material-ui/core'
import useStyles from './styles';
import Post from './Post/Post.js'
const Posts = ({setCurrentId}) => {
  // const posts = useSelector((state) => state.posts);

  const [posts, setPosts] = useState([]);


  useEffect(() => {
       loadUsers()
  },[]);


  const loadUsers = async() => {
       const result =await axios.get("http://localhost:4000/api/v1/posts");
        setPosts(result.data)
      //  console.log(result)
  }

  // console.log(posts)
  // console.log(posts?.data?._id)
  const classes = useStyles();
  return (
    // !posts.length ? <CircularProgress />
   !posts.length ? <CircularProgress /> : (
    <Grid className={classes.container} container alignItems='stretch' spacing={3}>
      {
        posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} lg={6}>
              <Post  post={post} setCurrentId={setCurrentId}/>
          </Grid>
        ) )
      }
        
    </Grid>
   )
  )
}

export default Posts
