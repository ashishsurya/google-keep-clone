import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './LoginScreen.css';
const LoginScreen = () => {
  const signIn = () => {
    auth.signInWithPopup(provider)
  };

  return (
    <div className='loginscreen'>
      <img
        src='https://www.logowik.com/content/uploads/images/google-keep3316.jpg'
        alt='KEEP LOGO'
      />
      <Button onClick={signIn} variant='contained' color='primary'>
        Login with Google
      </Button>
    </div>
  );
};

export default LoginScreen;
