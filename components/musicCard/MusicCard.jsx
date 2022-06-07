import React, {useContext, useState, useEffect} from 'react'
import Image from 'next/image'
import { CardContainer, CardLeft, CardRight, CardSongInfo, StateContainer } from './style'
import { SongContext } from '../../context/SongContext';

const MusicCard = ({image, index, songName, artistName, source, duration, disableClick}) => {
  const {setSong, song} = useContext(SongContext);
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    if (disableClick !== true) {
      setSong(source);
    }
  }

  useEffect(() => {
    if (song === source) {
      setPlaying(true);
    };
    if (song !== source) {
      setPlaying(false);
    }
  }, [song])

  return (
    <StateContainer>
      <CardContainer className={playing ? 'playing' : ''} onClick={handleClick}>
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
    </StateContainer>
  )
}

export default MusicCard