import React from 'react'
import { PlayerContainer, PlayerStyled, ResponsiveContainer } from './style'

const Player = ({value, max, onClick, enableNext}) => {
  return (
    <PlayerContainer>
      <ResponsiveContainer>
        {enableNext &&
          <button onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path id="Icon_material-skip-next" data-name="Icon material-skip-next" d="M9,27l12.75-9L9,9ZM24,9V27h3V9Z" transform="translate(-9 -9)"/>
            </svg>
          </button>
        }
      </ResponsiveContainer>
      <PlayerStyled value={value} max={max}/>
    </PlayerContainer>
  )
}

export default Player