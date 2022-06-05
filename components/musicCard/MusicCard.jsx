import React, {useContext} from 'react'
import Image from 'next/image'
import { CardContainer, CardLeft, CardRight, CardSongInfo } from './style'
import { SongContext } from '../../context/SongContext';

const MusicCard = ({image, index, songName, artistName, source, duration, disableClick}) => {
  const {setSong} = useContext(SongContext);

  const handleClick = () => {
    if (disableClick !== true) {
      setSong(source);
    }
  }

  return (
    <CardContainer onClick={handleClick}>
      <CardLeft>
        <span>#{index}</span>
        <figure>
          <Image
            src={image}
            alt='image cover'
            height={1200}
            width={1200}
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