import React, {useState} from 'react'
import MainButton from '../mainButton/MainButton'
import { RegisterStyled } from './style'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = (e) => {
    e.preventDefault();

    console.log(username);
    console.log(email);
    console.log(password);
  }

  return (
    <RegisterStyled>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <input onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username'></input>
          <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'></input>
          <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'></input>
        </div>
        <MainButton>Register</MainButton>
      </form>
    </RegisterStyled>
  )
}

export default Register