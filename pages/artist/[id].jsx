import React, {useState} from 'react'
import ArtistBanner from '../../components/artistBanner/ArtistBanner';
import BaseLayout from '../../layouts/BaseLayout';
import { ArtistDetailContainer, ArtistNav } from '../styles/artist';
import MusicCard from '../../components/musicCard/MusicCard';
import ReactPlayer from 'react-player';
import { useAuth } from '../../context/AuthContext';
import { SongContext } from '../../context/SongContext';
import Player from '../../components/player/Player';

const Artist = () => {
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [song, setSong] = useState('');
  const [songTab, setSongTab] = useState(true);
  const [infoTab, setInfoTab] = useState(false);

  const {user} = useAuth();

  const cover1 = require("../../public/images/rose-mixtape-album-cover-art-template-design-59c928b377e5f0e8e9aabc4982ca7e14_screen.jpg");
  const cover2 = require("../../public/images/fairy-tale-cd-cover-art-template-design-7d7816925d2958dd4a4e968954ceadf5_screen.jpg");

  const handleProgress = (progress) => {
    setTrackProgress(progress.playedSeconds);
  }

  const handleDuration = (duration) => {
    setTrackDuration(duration);
  }

  const toggleSongTab = (e) => {
    e.preventDefault();
    setSongTab(true);
    setInfoTab(false);
  }
  
  const toggleInfoTab = (e) => {
    e.preventDefault();
    setSongTab(false);
    setInfoTab(true);
  }

  const tracks = [
    {
      artist: 'Rose Mixtape',
      title: 'Late Night Drive',
      src: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
      artistCover: cover1
    },
    {
      artist: 'Fairy Tale',
      title: 'Chords of Life',
      src: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
      artistCover: cover2
    }
  ]

  return (
    <SongContext.Provider value={{song, setSong}}>
      <ArtistBanner />
      <BaseLayout>
        <ArtistDetailContainer>
          <ArtistNav>
            <li>
              <button
              style={{color: songTab ? '#F57261' : '#f9f9f9'}}
              onClick={toggleSongTab}>
                Songs
              </button>
            </li>
            <li>
              <button
              style={{color: infoTab ? '#F57261' : '#f9f9f9'}}
              onClick={toggleInfoTab}>
                Info
              </button>
            </li>
          </ArtistNav>
          {
            songTab &&
            <div>
              {tracks.map((track, index) => {
                return (
                  <MusicCard key={index} source={track.src} index={index + 1} songName={track.title} artistName={track.artist} image={track.artistCover}/>
                )
              })}
            </div>
          }
        <ReactPlayer
          onProgress={handleProgress}
          onDuration={handleDuration}
          playing
          volume={0}
          url={song}
          height={0}
          width={0}/>
        </ArtistDetailContainer>
      </BaseLayout>
      <Player value={trackProgress} max={trackDuration}/>
    </SongContext.Provider>
  )
}

export default Artist