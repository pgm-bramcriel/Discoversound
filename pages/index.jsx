import React, {useState} from 'react'
import Cd from '../components/cd/Cd';
import BaseLayout from '../layouts/BaseLayout';
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Home = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);

  const handleProgress = (progress) => {
    if (progress.playedSeconds === trackDuration && tracks.length - 1 > trackIndex) {
      setTrackIndex(trackIndex + 1);
    }
  }

  const handleDuration = (duration) => {
    setTrackDuration(duration);
  }

  const tracks = [
    'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
    'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3'
  ]

  return (
    <BaseLayout>
      <Cd />
      <ReactPlayer
        playing={true}
        onProgress={handleProgress}
        onDuration={handleDuration}
        controls
        url={tracks[trackIndex]} />
    </BaseLayout>
  )
}

export default Home;