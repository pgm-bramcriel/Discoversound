import React from 'react'
import Nav from '../components/nav/Nav'
import { GlobalStyling, MainStyling } from './style'

const BaseLayout = ({children}) => {
  return (
    <GlobalStyling>
        <Nav />
        <MainStyling>
            {children}
        </MainStyling>
    </GlobalStyling>
  )
}

export default BaseLayout