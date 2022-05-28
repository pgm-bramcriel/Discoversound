import React, {useState} from 'react'
import ReactPlayer from 'react-player';
import BaseTitle from '../components/baseTitle/BaseTitle'
import MusicCard from '../components/musicCard/MusicCard';
import BaseLayout from '../layouts/BaseLayout';
import { SongContext } from '../context/SongContext';
import Player from '../components/player/Player';
import { useAuth } from '../context/AuthContext';
import FavoriteArtistCover from '../components/favoriteArtistCover/FavoriteArtistCover';

const Favorites = () => {
  const {user} = useAuth();
  const [song, setSong] = useState('');
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const cover1 = require("../public/images/rose-mixtape-album-cover-art-template-design-59c928b377e5f0e8e9aabc4982ca7e14_screen.jpg");
  const cover2 = require("../public/images/fairy-tale-cd-cover-art-template-design-7d7816925d2958dd4a4e968954ceadf5_screen.jpg");

  const handleProgress = (progress) => {
    setTrackProgress(progress.playedSeconds);
  }

  const handleDuration = (duration) => {
    setTrackDuration(duration);
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

  const currentArtist = tracks.filter((track) => {
    return track.src === song;
  });

  return (
    <>
      {user &&
        <SongContext.Provider value={{song, setSong}}>
          <BaseLayout>
            <BaseTitle subtitle={'your'} title={'favorites'}/>
            <div style={{
              marginTop : '4rem'
            }}>
              {tracks.map((track, index) => {
                return (
                  <MusicCard key={index} duration={trackDuration} source={track.src} index={index + 1} songName={track.title} artistName={track.artist} image={track.artistCover}/>
                )
              })}
            </div>
            <ReactPlayer
                onProgress={handleProgress}
                onDuration={handleDuration}
                playing
                volume={0}
                url={song}
                height={0}
                width={0}/>
          </BaseLayout>
          <Player value={trackProgress} max={trackDuration}/>
          {currentArtist.length > 0 &&
            <FavoriteArtistCover image={currentArtist[0].artistCover} />
          }
        </SongContext.Provider>
      }
      {user === null &&
        <BaseLayout>
          <h2>Sign in to add favorites!</h2>
        </BaseLayout>
      }
    </>
  )
}

export default Favorites