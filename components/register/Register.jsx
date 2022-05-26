import React from 'react'
import MainButton from '../mainButton/MainButton'
import { RegisterStyled } from './style'

const Register = () => {
  return (
    <RegisterStyled>
      <h2>Register</h2>
      <form>
        <div>
          <input type='text' placeholder='Username'></input>
          <input type='email' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
          <input type='password' placeholder='Confirm Password'></input>
        </div>
        <MainButton>Register</MainButton>
      </form>
    </RegisterStyled>
  )
}

export default Register