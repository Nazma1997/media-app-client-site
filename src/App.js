import {React} from 'react';
import {Container} from '@material-ui/core';
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';


const App = () => {
  //${process.env.GOOGLE_API}
  return (
      <GoogleOAuthProvider clientId= {'452197796332-i9nqhcienmnas3ss6u797bdb6anu4ar1.apps.googleusercontent.com'}>
        <Container maxWidth= 'lg'>
         <Navbar />
         <Routes>
           <Route path="/" element={ <Home/> } />
           <Route path="/auth" element={ <Auth/> } />
           
         </Routes>
      </Container>
      </GoogleOAuthProvider>
  )
}

export default App
