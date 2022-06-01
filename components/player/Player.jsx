import React from 'react'
import { PlayerStyled } from './style'

const Player = ({value, max}) => {
  return (
    <PlayerStyled value={value} max={max}/>
  )
}

export default Player