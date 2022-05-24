import React, {useState, useEffect} from 'react'
import Cd from '../components/cd/Cd';
import BaseLayout from '../layouts/BaseLayout';
import dynamic from 'next/dynamic'
import Player from '../components/player/Player';
import ArtistCover from '../components/artistCover/ArtistCover';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Home = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [controls, setControls] = useState(false);

  const cover1 = require("../public/images/rose-mixtape-album-cover-art-template-design-59c928b377e5f0e8e9aabc4982ca7e14_screen.jpg");
  const cover2 = require("../public/images/fairy-tale-cd-cover-art-template-design-7d7816925d2958dd4a4e968954ceadf5_screen.jpg");

  const handleProgress = (progress) => {
    setTrackProgress(progress.playedSeconds);

    if (progress.playedSeconds === trackDuration) {
      setTrackIndex(trackIndex + 1);

      if (tracks.length - 1 === trackIndex) {
        setTrackIndex(0);
      }
    }
  }

  const handleDuration = (duration) => {
    setTrackDuration(duration);
  }

  const tracks = [
    {
      artist: 'Late night artist (1)',
      title: 'Late Night Drive',
      src: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
      artistCover: cover1
    },
    {
      artist: 'Chords artist (2)',
      title: 'Chords of Life',
      src: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
      artistCover: cover2
    }
  ]

  return (
    <>
      <BaseLayout>
        <Cd />
        <p>Now playing: {tracks[trackIndex].title}</p>
        <button onClick={() => setPlaying(true)}>Play</button>
        <button onClick={() => setControls(true)}>Controls</button>
        <button onClick={() => setControls(false)}>Hide controls</button>
        <ArtistCover image={tracks[trackIndex].artistCover}/>
        <ReactPlayer
          controls={controls}
          playing={playing}
          onProgress={handleProgress}
          onDuration={handleDuration}
          volume={0}
          url={tracks[trackIndex].src} />
      </BaseLayout>
      <Player value={trackProgress} max={trackDuration}/>
    </>
  )
}

export default Home;