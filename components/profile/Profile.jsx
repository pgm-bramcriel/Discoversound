import React, {useContext} from 'react'
import { ProfileStyle } from './style'
import {ModalContext} from '../../context/ModalContext'
const Profile = () => {
  const {setModalValue} = useContext(ModalContext);

  return (
    <ProfileStyle>
        <button onClick={() => setModalValue(true)}>
          <p>Sign in</p>
        </button>
    </ProfileStyle>
  )
}

export default Profile