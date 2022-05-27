import React from 'react'
import { TitleContainer } from './style'

const BaseTitle = ({subtitle, title}) => {
  return (
    <TitleContainer>
      <span>{subtitle}</span>
      <h2>{title}</h2>
    </TitleContainer>
  )
}

export default BaseTitle