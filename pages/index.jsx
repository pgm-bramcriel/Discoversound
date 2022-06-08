import React, {useState, useContext, useEffect} from 'react'
import Link from 'next/link'
import Cd from '../components/cd/Cd';
import BaseLayout from '../layouts/BaseLayout';
import dynamic from 'next/dynamic'
import Player from '../components/player/Player';
import ArtistCover from '../components/artistCover/ArtistCover';
import { ArtistInfo, Heading, HomeInfo, HomeInfoMobile } from './styles/home';
import MainButton from '../components/mainButton/MainButton';
import { PlayedContext } from '../context/PlayedContext';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../context/AuthContext';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Home = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [setPlaying] = useState(false);
  const [songData, setSongData] = useState();
  const [controls, setControls] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const {value} = useContext(PlayedContext);
  const {user} = useAuth();

  const colRef = collection(db, 'songs');
  const favoritesRef = collection(db, 'favorites');

  const getSongs = async () => {
    getDocs(colRef)
    .then((snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({...doc.data(), id: doc.id})
      })
      setSongData(data);
    })
  }

  useEffect(() => {
    if (!songData) {
      getSongs();
    }

    if (songData) {
      getDocs(favoritesRef)
      .then((snapshot) => {
        let data = [];
        snapshot.docs.forEach((doc) => {
          data.push({...doc.data(), id: doc.id})
        })
        data = data.filter((favorite) => {
          return favorite.userId === user?.uuid;
        })
        let filterFavorites = data.some(item => item.songId === songData[trackIndex].id);
        let filteredData = data.filter((item) => {
          return item.songId === songData[trackIndex].id;
        })
        setFilteredData(filteredData);
        setIsFavorited(filterFavorites);
      })
    }
  }, [songData, isFavorited, user, trackIndex])

  const handleProgress = (progress) => {
    setTrackProgress(progress.playedSeconds);

    if (progress.playedSeconds === trackDuration || progress.playedSeconds > trackDuration) {
      setTrackIndex(trackIndex + 1);

      if (songData.length - 1 === trackIndex) {
        setTrackIndex(0);
      }
    }
  }

  const handleDuration = (duration) => {
    setTrackDuration(duration);
  }

  const handleFavorite = (e) => {
    e.preventDefault();
    if (user) {
      setIsFavorited(true);
  
      addDoc(favoritesRef, {
        songId: songData[trackIndex].id,
        userId: user.uuid,
      })
    }
  }

  const handleUnFavorite = (e) => {
    e.preventDefault();
    if (user) {
      setIsFavorited(false);
  
      let unFavRef = doc(db, 'favorites', filteredData[0].id);
  
      deleteDoc(unFavRef);
    }
  }

  const handleNext = (e) => {
    e.preventDefault();
    if (trackIndex === songData.length - 1) {
      setTrackIndex(0);
    } else {
      setTrackIndex(trackIndex + 1);  
    }
  }

  return (
    <>
      <BaseLayout>
        {songData &&
          <>
            <Cd image={songData[trackIndex].image}/>
            <div style={{
              display: 'none'
            }}>
              <p>Now playing: {songData[trackIndex].name}</p>
              <button onClick={() => setPlaying(true)}>Play</button>
              <button onClick={() => setControls(true)}>Controls</button>
              <button onClick={() => setControls(false)}>Hide controls</button>
            </div>
            <Heading>
              <p>Discover</p>
              <Link href={`artist/${songData[trackIndex].userId}`}>
                <h1>{songData[trackIndex].artistName}</h1>
              </Link>
            </Heading>
            <HomeInfoMobile>
                <h2>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28.673" height="33.789" viewBox="0 0 28.673 33.789">
                    <path id="Icon_awesome-itunes-note" data-name="Icon awesome-itunes-note" d="M28.515,28.846A4.738,4.738,0,0,1,24.4,32.43c-1.829.336-3.353.418-4.816-.762a3.674,3.674,0,0,1-.2-5.555c1.269-1.21,3.054-1.456,5.734-1.926a1.859,1.859,0,0,0,1.165-.553c.478-.538.329-.306.329-12.186,0-.836-.411-1.068-1.269-.918-.612.1-13.866,2.583-13.866,2.583-.762.164-1,.388-1,1.247,0,17.524.082,16.718-.187,17.883a4.346,4.346,0,0,1-2.255,2.949,8.693,8.693,0,0,1-4.734.777A3.813,3.813,0,0,1,1.128,29.5c1.269-1.21,3.054-1.456,5.734-1.926a1.859,1.859,0,0,0,1.165-.553c.754-.859.134-19.16.388-20.175a1.471,1.471,0,0,1,.53-.963,2.267,2.267,0,0,1,1-.411C25.178,2.623,27.037,2.257,27.3,2.257A1.175,1.175,0,0,1,28.65,3.571c.015,25.723.082,24.341-.134,25.275Z" transform="translate(0.001 -2.253)" fill="#f57261"/>
                  </svg>
                  {songData[trackIndex].name}
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="53.533" height="47.075" viewBox="0 0 53.533 47.075">
                      <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M48.959,8.394a13.3,13.3,0,0,0-18.808,0l-2.563,2.563L25.026,8.394A13.3,13.3,0,1,0,6.218,27.2l2.563,2.563L27.589,48.572,46.4,29.764,48.959,27.2a13.3,13.3,0,0,0,0-18.808Z" transform="translate(-0.823 -2.997)" fill="none" stroke="#f9f9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                    </svg>
                  </button>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra lectus et suscipit convallis. Pellentesque fringilla quam id urna bibendum aliquam. Fusce finibus.</p>
                <MainButton>More by {songData[trackIndex].artistName}</MainButton>
              </HomeInfoMobile>
            <ArtistInfo>
              <ArtistCover image={songData[trackIndex].image}/>
              <HomeInfo>
                <h2>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28.673" height="33.789" viewBox="0 0 28.673 33.789">
                    <path id="Icon_awesome-itunes-note" data-name="Icon awesome-itunes-note" d="M28.515,28.846A4.738,4.738,0,0,1,24.4,32.43c-1.829.336-3.353.418-4.816-.762a3.674,3.674,0,0,1-.2-5.555c1.269-1.21,3.054-1.456,5.734-1.926a1.859,1.859,0,0,0,1.165-.553c.478-.538.329-.306.329-12.186,0-.836-.411-1.068-1.269-.918-.612.1-13.866,2.583-13.866,2.583-.762.164-1,.388-1,1.247,0,17.524.082,16.718-.187,17.883a4.346,4.346,0,0,1-2.255,2.949,8.693,8.693,0,0,1-4.734.777A3.813,3.813,0,0,1,1.128,29.5c1.269-1.21,3.054-1.456,5.734-1.926a1.859,1.859,0,0,0,1.165-.553c.754-.859.134-19.16.388-20.175a1.471,1.471,0,0,1,.53-.963,2.267,2.267,0,0,1,1-.411C25.178,2.623,27.037,2.257,27.3,2.257A1.175,1.175,0,0,1,28.65,3.571c.015,25.723.082,24.341-.134,25.275Z" transform="translate(0.001 -2.253)" fill="#f57261"/>
                  </svg>
                  <span>{songData[trackIndex].name}</span>
                  <button onClick={isFavorited ? handleUnFavorite : handleFavorite}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="53.533" height="47.075" viewBox="0 0 53.533 47.075">
                      <path className={isFavorited ? 'favorite' : 'unfavorite'} id="Icon_feather-heart" data-name="Icon feather-heart" d="M48.959,8.394a13.3,13.3,0,0,0-18.808,0l-2.563,2.563L25.026,8.394A13.3,13.3,0,1,0,6.218,27.2l2.563,2.563L27.589,48.572,46.4,29.764,48.959,27.2a13.3,13.3,0,0,0,0-18.808Z" transform="translate(-0.823 -2.997)" fill={isFavorited ? '#F57261' : "none"} stroke={isFavorited ? '#F57261' : "#f9f9f9"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                    </svg>
                  </button>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra lectus et suscipit convallis. Pellentesque fringilla quam id urna bibendum aliquam. Fusce finibus.</p>
                <MainButton>More by {songData[trackIndex].artistName}</MainButton>
              </HomeInfo>
            </ArtistInfo>
            <ReactPlayer
              controls={controls}
              playing={value}
              onProgress={handleProgress}
              onDuration={handleDuration}
              volume={0}
              url={songData[trackIndex].filePath} />
          </>
        }
      </BaseLayout>
      <Player enableNext onClick={handleNext} value={trackProgress} max={trackDuration}/>
    </>
  )
}

export default Home;