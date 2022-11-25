import React from 'react'
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import memories from '../../images/memories.png'
import useStyles from './styles.js';


const Navbar = () => {
  const classes = useStyles();

  const user = null;
  return (
    <AppBar position="static" color='inherit' className={classes.appBar}>
         <div className={classes.brandContainer}>
         <Typography component={Link} to='/' className={classes.heading} variant='h3' >Memories</Typography>
          <img className={classes.image} src={memories} alt='memories' height="60"/>
         </div>

         <Toolbar className={classes.toolbar}>
           { 
             user ? (
                 <div>
                      
                 </div>
             ) : (
                 <div>
                   
                 </div>
             )
           }
         </Toolbar>
    </AppBar>
  )
}

export default Navbar
