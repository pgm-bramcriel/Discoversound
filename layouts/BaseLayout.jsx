import React from 'react'
import Nav from '../components/nav/Nav'
import WelcomeModal from '../components/welcomeModal/WelcomeModal'
import { GlobalStyling, MainStyling } from './style'

const BaseLayout = ({children}) => {
  return (
    <GlobalStyling>
        <Nav />
        <MainStyling>
            {children}
        </MainStyling>
        <WelcomeModal />
    </GlobalStyling>
  )
}

export default BaseLayout