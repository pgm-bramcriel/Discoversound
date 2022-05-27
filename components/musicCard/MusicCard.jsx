import React, {useContext} from 'react'
import Image from 'next/image'
import { CardContainer, CardLeft, CardRight, CardSongInfo } from './style'
import { SongContext } from '../../context/SongContext';

const MusicCard = ({image, index, songName, artistName, source, duration}) => {
  const {setSong} = useContext(SongContext);

  const handleClick = () => {
    setSong(source);
  }

  return (
    <CardContainer onClick={handleClick}>
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