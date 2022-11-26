import React, {useState}from 'react';
import{Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
// import { GoogleLogin, googleLogout } from '@react-oauth/google';
import LockOutlineIcon from '@material-ui/icons/LockOpenOutlined';
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import useStyles from './style';
import Input from './Input';
import {signIn, signUp} from '../../actions/auth';




const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword:''} 


const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFromData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useNavigate()
  // const isSignup = true;
  const user = false;

  const handleSubmit = (e) => {
    e.preventDefault()
    //  console.log(formData)

    if(isSignup){
      dispatch(signUp(formData, history))
    } else{
      dispatch(signIn(formData, history))
    }
  }

  const handleChange = (e) => {
     setFromData({...formData, [e.target.name]: e.target.value})
  }

  const handleShowPassword = ()  => setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    // handleShowPassword(false)
  }

  // const googleSuccess = async(res) => {
  //    const result = res?.profileObj;
  //   //  console.log(result)
  //    const token = res?.tokenId;
  //   //  console.log(token)
  //   try {
  //     dispatch({type: "AUTH", data: {result, token}})
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  // const googleFailure = () => {

  // }

  

  return(
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        
           <Avatar className={classes.avatar}>
           <LockOutlineIcon />
           </Avatar>
           <Typography variant='h5' >{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
         
         <form className={classes.form} onSubmit= {handleSubmit}>
          <Grid container spacing={2}>
             {
              isSignup && (
                <>
                   <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                   <Input name='lastName' label='Last Name' handleChange={handleChange} half/>
                </>
              )
             }
             <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
             <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
             {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
          </Grid> 
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
           
          {
            user ? (
              <div>Logged In</div>
            ) : (
              // <GoogleLogin 
               
              // onSuccess={googleSuccess}
              // onError={() => {
              //   console.log('Login Failed');
              // }}
              // className={classes.googleButton}
              // />
              <div></div>
            )
           }
          

          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}

              </Button>

            </Grid>

          </Grid>
         </form>
         
      </Paper>

    

    </Container>
  )
  
}

export default Auth
