import React, {useContext} from 'react'
import Nav from '../components/nav/Nav'
import SignUpModal from '../components/signUpModal/SignUpModal'
import WelcomeModal from '../components/welcomeModal/WelcomeModal'
import { GlobalStyling, MainStyling } from './style'
import {ModalContext} from '../context/ModalContext'

const BaseLayout = ({children}) => {
  const {modalValue} = useContext(ModalContext);
  
  return (
    <GlobalStyling>
        <Nav />
        <MainStyling>
            {children}
        </MainStyling>
        <WelcomeModal />
        {modalValue &&
          <SignUpModal />
        }
    </GlobalStyling>
  )
}

export default BaseLayout