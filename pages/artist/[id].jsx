import React, {useState, useEffect} from 'react'
import { ArtistNav } from '../styles/artist';
import MusicCard from '../../components/musicCard/MusicCard';
import ReactPlayer from 'react-player';
import { SongContext } from '../../context/SongContext';
import Player from '../../components/player/Player';
import BannerLayout from '../../layouts/BannerLayout';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import {useRouter} from 'next/router';

const Artist = () => {
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [songData, setSongData] = useState('');
  const [artistData, setArtistData] = useState('');
  const [song, setSong] = useState('');
  const [songTab, setSongTab] = useState(true);
  const [infoTab, setInfoTab] = useState(false);

  const router = useRouter();

  const {id} = router.query;

  const songColRef = collection(db, 'songs');
  const artistColRef = collection(db, 'artists');

  const getSongs = async () => {
    getDocs(songColRef)
    .then((snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({...doc.data(), id: doc.id})
      })
      data = data.filter((song) => {
        return song.userId === `${id}`;
      });
      setSongData(data);
    })
  }

  const getArtists = async () => {
    getDocs(artistColRef)
    .then((snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({...doc.data(), id: doc.id})
      })
      data = data.filter((artist) => {
        return artist.userId === `${id}`;
      });
      setArtistData(data);
    })
  }

  useEffect(() => {
    getSongs();
    getArtists();
  }, [])

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
  
  return (
    <SongContext.Provider value={{song, setSong}}>
      <BannerLayout title={artistData.length > 0 ? artistData[0].name : 'Loading...'} coverImage={artistData.length > 0 ? artistData[0].coverImage : null}>
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
            {songData &&
              <>
                {songData.map((song, index) => {
                  return (
                    <MusicCard key={index} source={song.filePath} index={index + 1} songName={song.name} artistName={song.artistName} image={song.image}/>
                  )
                })}
              </>
            }
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
      </BannerLayout>
      <Player value={trackProgress} max={trackDuration}/>
    </SongContext.Provider>
  )
}

export default Artist