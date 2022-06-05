import React, {useContext, useState} from 'react'
import { BottomSection, CloseButton, SignUpModalStyle, TopSection } from './style'
import {ModalContext} from '../../context/ModalContext'
import Login from '../login/Login';
import Register from '../register/Register';
import { useAuth } from '../../context/AuthContext';

const SignUpModal = () => {
  const [loginToggle, setLoginToggle] = useState(true);
  const [registerToggle, setRegisterToggle] = useState(false);
  const {setModalValue} = useContext(ModalContext);

  const handleSignIn = () => {
    setLoginToggle(true);
    setRegisterToggle(false);
  };

  const handleRegister = () => {
    setLoginToggle(false);
    setRegisterToggle(true);
  };

  return (
    <SignUpModalStyle>
      <div>
        <CloseButton onClick={() => setModalValue(false)}>x</CloseButton>
      </div>
      <TopSection>
        <button
          style={{
            background: !loginToggle ? '#e7e7e7' : '#f9f9f9'
          }}
          onClick={handleSignIn}>
          <p>Sign in</p>
        </button>
        <button
          onClick={handleRegister}
          style={{
            background: !registerToggle ? '#e7e7e7' : '#f9f9f9'
          }}>
          <p>Register</p>
        </button>
      </TopSection>
      <BottomSection>
        {loginToggle &&
          <Login />
        }
        {registerToggle &&
          <Register />
        }
      </BottomSection>
    </SignUpModalStyle>
  )
}

export default SignUpModal