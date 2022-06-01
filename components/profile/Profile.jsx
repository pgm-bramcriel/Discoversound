import React, {useContext, useState} from 'react'
import { ProfileLoggedIn, ProfileModal, ProfileStyle } from './style'
import {ModalContext} from '../../context/ModalContext'
import { useAuth } from '../../context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
const Profile = () => {
  const {setModalValue} = useContext(ModalContext);
  const {user, logout} = useAuth();
  const [modalState, setModalState] = useState(false);

  const defaultAvatar = require("../../public/images/default-avatar.png");

  const handleClick = () => {
    if (modalState) {
      setModalState(false);
    } else {
      setModalState(true);
    }
  };

  const handleLogout = () => {
    logout();
    setModalState(false);
  };

  return (
    <ProfileStyle>
      {user ? (
        <>
          <ProfileLoggedIn onClick={handleClick}>
            <p>{user.displayName ? user.displayName : user.email}</p>
            <figure>
              <Image
                alt='default-image'
                src={defaultAvatar}
                objectFit={'cover'}
              />
            </figure>
          </ProfileLoggedIn>
          <ProfileModal style={{
            display: modalState ? 'block' : 'none'
          }}>
            <ul>
              <li onClick={handleLogout}>
                <p>Logout</p>
              </li>
              <li>
                <Link href="/profile">
                  <p>Profile</p>
                </Link>
              </li>
            </ul>
          </ProfileModal>
        </>

      ) : (
        <button onClick={() => setModalValue(true)}>
          <p className='sign-in'>Sign in</p>
        </button>
      )}
    </ProfileStyle>
  )
}

export default Profile