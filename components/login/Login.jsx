import React, {useState} from 'react'
import { LoginStyle } from './style'
import MainButton from '../mainButton/MainButton'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <LoginStyle>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password' />
        </div>
        <MainButton>Sign in</MainButton>
      </form>
    </LoginStyle>
  )
}

export default Login