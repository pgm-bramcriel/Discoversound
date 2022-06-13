import { updateProfile } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, {useState} from 'react'
import { auth, db } from '../../config/firebase';
import { useAuth } from '../../context/AuthContext';
import MainButton from '../mainButton/MainButton'
import { RegisterStyled } from './style'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [artistName, setArtistName] = useState();
  const {register, user} = useAuth();
  const artistsDocRef = collection(db, 'artists');


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      updateProfile(auth.currentUser, {
        displayName: username
      });
      addDoc(artistsDocRef, {
        artistName: artistName,
        userId: auth.currentUser.uid
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <RegisterStyled>
      <h2>Register</h2>
      {!user &&
        <form onSubmit={handleRegister}>
          <div>
            <input onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username'></input>
            <input onChange={(e) => setArtistName(e.target.value)} type='text' placeholder='Artist Name'></input>
            <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'></input>
            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'></input>
          </div>
          <MainButton>Register</MainButton>
        </form>
      }
      {user &&
        <p>You are registered!</p>
      }
    </RegisterStyled>
  )
}

export default Register