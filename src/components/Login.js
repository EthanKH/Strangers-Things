import React, { useState } from 'react';
import { loginUser } from '../api';

const Login = ({ setToken, navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async () => {
    const results = await loginUser(username, password);
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem('token', results.data.token);
      navigate('/profile');
    } else {
      console.log(results.error.message)
    }
  }
  
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}>
      <h4>Welcome back!</h4>
      <input 
        type='text'
        placeholder='Enter Username'
        onChange={(event) => setUsername(event.target.value)}
      />
      <p></p>
      <input 
        type='password'
        placeholder='Enter Password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <p></p>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Login;