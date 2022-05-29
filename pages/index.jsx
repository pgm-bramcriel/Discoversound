import React, {useState, useContext} from 'react'
import Link from 'next/link'
import Cd from '../components/cd/Cd';
import BaseLayout from '../layouts/BaseLayout';
import dynamic from 'next/dynamic'
import Player from '../components/player/Player';
import ArtistCover from '../components/artistCover/ArtistCover';
import { ArtistInfo, Heading, HomeInfo, HomeInfoMobile } from './styles/home';
import MainButton from '../components/mainButton/MainButton';
import { PlayedContext } from '../context/PlayedContext';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Home = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [setPlaying] = useState(false);
  const [controls, setControls] = useState(false);
  const {value} = useContext(PlayedContext);

  const cover1 = require("../public/images/rose-mixtape-album-cover-art-template-design-59c928b377e5f0e8e9aabc4982ca7e14_screen.jpg");
  const cover2 = require("../public/images/fairy-tale-cd-cover-art-template-design-7d7816925d2958dd4a4e968954ceadf5_screen.jpg");
  
  const tracks = [
    {
      artist: 'Rose Mixtape',
      title: 'Late Night Drive',
      src: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
      artistCover: cover1,
      id: '1'
    },
    {
      artist: 'Fairy Tale',
      title: 'Chords of Life',
      src: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
      artistCover: cover2,
      id: '2'
    }
  ];
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

  // const handleShuffle = (e) => {
  //   e.preventDefault();
  //   setTrackIndex(Math.floor(Math.random() * tracks.length));
  //   console.log(Math.floor(Math.random() * tracks.length));
  // }

  return (
    <>
      <BaseLayout>
        <Cd />
        {/* <button onClick={handleShuffle}>Shuffle</button> */}
        <div style={{
          display: 'none'
        }}>
          <p>Now playing: {tracks[trackIndex].title}</p>
          <button onClick={() => setPlaying(true)}>Play</button>
          <button onClick={() => setControls(true)}>Controls</button>
          <button onClick={() => setControls(false)}>Hide controls</button>
        </div>
        <Heading>
          <p>Discover</p>
          <Link href={`artist/${tracks[trackIndex].id}`}>
            <h1>{tracks[trackIndex].artist}</h1>
          </Link>
        </Heading>
        <HomeInfoMobile>
            <h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="28.673" height="33.789" viewBox="0 0 28.673 33.789">
                <path id="Icon_awesome-itunes-note" data-name="Icon awesome-itunes-note" d="M28.515,28.846A4.738,4.738,0,0,1,24.4,32.43c-1.829.336-3.353.418-4.816-.762a3.674,3.674,0,0,1-.2-5.555c1.269-1.21,3.054-1.456,5.734-1.926a1.859,1.859,0,0,0,1.165-.553c.478-.538.329-.306.329-12.186,0-.836-.411-1.068-1.269-.918-.612.1-13.866,2.583-13.866,2.583-.762.164-1,.388-1,1.247,0,17.524.082,16.718-.187,17.883a4.346,4.346,0,0,1-2.255,2.949,8.693,8.693,0,0,1-4.734.777A3.813,3.813,0,0,1,1.128,29.5c1.269-1.21,3.054-1.456,5.734-1.926a1.859,1.859,0,0,0,1.165-.553c.754-.859.134-19.16.388-20.175a1.471,1.471,0,0,1,.53-.963,2.267,2.267,0,0,1,1-.411C25.178,2.623,27.037,2.257,27.3,2.257A1.175,1.175,0,0,1,28.65,3.571c.015,25.723.082,24.341-.134,25.275Z" transform="translate(0.001 -2.253)" fill="#f57261"/>
              </svg>
              {tracks[trackIndex].title}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="53.533" height="47.075" viewBox="0 0 53.533 47.075">
                  <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M48.959,8.394a13.3,13.3,0,0,0-18.808,0l-2.563,2.563L25.026,8.394A13.3,13.3,0,1,0,6.218,27.2l2.563,2.563L27.589,48.572,46.4,29.764,48.959,27.2a13.3,13.3,0,0,0,0-18.808Z" transform="translate(-0.823 -2.997)" fill="none" stroke="#f9f9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                </svg>
              </button>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra lectus et suscipit convallis. Pellentesque fringilla quam id urna bibendum aliquam. Fusce finibus.</p>
            <MainButton>More by {tracks[trackIndex].artist}</MainButton>
          </HomeInfoMobile>
        <ArtistInfo>
          <ArtistCover image={tracks[trackIndex].artistCover}/>
          <HomeInfo>
            <h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="28.673" height="33.789" viewBox="0 0 28.673 33.789">
                <path id="Icon_awesome-itunes-note" data-name="Icon awesome-itunes-note" d="M28.515,28.846A4.738,4.738,0,0,1,24.4,32.43c-1.829.336-3.353.418-4.816-.762a3.674,3.674,0,0,1-.2-5.555c1.269-1.21,3.054-1.456,5.734-1.926a1.859,1.859,0,0,0,1.165-.553c.478-.538.329-.306.329-12.186,0-.836-.411-1.068-1.269-.918-.612.1-13.866,2.583-13.866,2.583-.762.164-1,.388-1,1.247,0,17.524.082,16.718-.187,17.883a4.346,4.346,0,0,1-2.255,2.949,8.693,8.693,0,0,1-4.734.777A3.813,3.813,0,0,1,1.128,29.5c1.269-1.21,3.054-1.456,5.734-1.926a1.859,1.859,0,0,0,1.165-.553c.754-.859.134-19.16.388-20.175a1.471,1.471,0,0,1,.53-.963,2.267,2.267,0,0,1,1-.411C25.178,2.623,27.037,2.257,27.3,2.257A1.175,1.175,0,0,1,28.65,3.571c.015,25.723.082,24.341-.134,25.275Z" transform="translate(0.001 -2.253)" fill="#f57261"/>
              </svg>
              {tracks[trackIndex].title}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="53.533" height="47.075" viewBox="0 0 53.533 47.075">
                  <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M48.959,8.394a13.3,13.3,0,0,0-18.808,0l-2.563,2.563L25.026,8.394A13.3,13.3,0,1,0,6.218,27.2l2.563,2.563L27.589,48.572,46.4,29.764,48.959,27.2a13.3,13.3,0,0,0,0-18.808Z" transform="translate(-0.823 -2.997)" fill="none" stroke="#f9f9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                </svg>
              </button>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra lectus et suscipit convallis. Pellentesque fringilla quam id urna bibendum aliquam. Fusce finibus.</p>
            <MainButton>More by {tracks[trackIndex].artist}</MainButton>
          </HomeInfo>
        </ArtistInfo>
        <ReactPlayer
          controls={controls}
          playing={value}
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