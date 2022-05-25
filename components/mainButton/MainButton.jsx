import React from 'react'
import { ButtonStyle } from './style'

const MainButton = ({children, onClick}) => {
  return (
    <ButtonStyle onClick={onClick}>
      {children}
    </ButtonStyle>
  )
}

export default MainButton