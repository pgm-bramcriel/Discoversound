import React from 'react'
import { ButtonStyle } from './style'

const MainButton = ({children}) => {
  return (
    <ButtonStyle>
      {children}
    </ButtonStyle>
  )
}

export default MainButton