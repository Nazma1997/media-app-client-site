import {React, useState,useEffect} from 'react';
// import axios from 'axios';
import {Container,  Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import Posts from './components/Posts/Posts';
import {getPosts} from './actions/posts.js';
import Form from './components/Form/Form';
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPosts({}));
   },[dispatch])

console.log(currentId)
 
  return (
      <Container maxWidth= 'lg'>
       <Navbar />
        <Grow in>
          <Container>
            <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
               <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId}/>

               </Grid>
               <Grid item xs={12} sm={4}>
                 
                 <Form currentId={currentId} setCurrentId={setCurrentId}/>

               </Grid>


            </Grid>
          </Container>

        </Grow>
      </Container>
  )
}

export default App
