import React, {useContext} from 'react'
import { ProfileStyle } from './style'
import {ModalContext} from '../../context/ModalContext'
import { useAuth } from '../../context/AuthContext';
const Profile = () => {
  const {setModalValue} = useContext(ModalContext);
  const { user, logout } = useAuth();

  return (
    <ProfileStyle>
      {user ? (
        <div>
          <p>{user.email}</p>
          <p onClick={() => {logout()}}>Logout</p>
        </div>
      ) : (
        <button onClick={() => setModalValue(true)}>
          <p>Sign in</p>
        </button>
      )}
    </ProfileStyle>
  )
}

export default Profile