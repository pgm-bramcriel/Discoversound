import { updateProfile } from 'firebase/auth';
import React, {useState} from 'react'
import { auth } from '../../config/firebase';
import { useAuth } from '../../context/AuthContext';
import MainButton from '../mainButton/MainButton'
import { RegisterStyled } from './style'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      updateProfile(auth.currentUser, {
        displayName: username
      });
    } catch (error) {
      console.log(error);
    }
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