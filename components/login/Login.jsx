import React from 'react'
import { LoginStyle } from './style'
import MainButton from '../mainButton/MainButton'

const Login = () => {
  return (
    <LoginStyle>
      <h2>Login</h2>
      <form>
        <div>
          <input type='email' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
        </div>
        <MainButton>Sign in</MainButton>
      </form>
    </LoginStyle>
  )
}

export default Login