import React from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

import memories from '../../images/memories.png'
import useStyles from './styles';


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
                 <div className={classes.profile}>
                  <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                  <Typography className={classes.userName} variant='h6' >{user.result.name}</Typography>
                  <Button variant='contained' className={classes.logout} color='secondary'> Logout</Button>
                      
                 </div>
             ) : (
                 <div>
                   <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
                 </div>
             )
           }


         
         </Toolbar>
         
    </AppBar>
  )
}

export default Navbar
