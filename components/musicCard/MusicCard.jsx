import React from 'react'
import Image from 'next/image'
import { CardContainer, CardLeft, CardRight, CardSongInfo } from './style'

const MusicCard = ({image, index, songName, artistName}) => {
  return (
    <CardContainer>
      <CardLeft>
        <span>#{index}</span>
        <figure>
          <Image 
            src={image}
            alt='image cover'
          />
        </figure>
        <CardSongInfo>
          <p>{songName}</p>
          <p className="artist">{artistName}</p>
        </CardSongInfo>
      </CardLeft>
      <CardRight>
        <p>3:32</p>
      </CardRight>
    </CardContainer>
  )
}

export default MusicCard