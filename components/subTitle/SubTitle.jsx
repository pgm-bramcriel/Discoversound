import React from 'react'
import { SubTitleStyle } from './style'

const SubTitle = ({children}) => {
  return (
    <SubTitleStyle>
      {children}
    </SubTitleStyle>
  )
}

export default SubTitle