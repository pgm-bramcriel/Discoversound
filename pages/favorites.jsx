import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player';
import BaseTitle from '../components/baseTitle/BaseTitle'
import MusicCard from '../components/musicCard/MusicCard';
import BaseLayout from '../layouts/BaseLayout';
import { SongContext } from '../context/SongContext';
import Player from '../components/player/Player';
import { useAuth } from '../context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const Favorites = () => {
  const {user} = useAuth();
  const [song, setSong] = useState('');
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [favoritesId, setFavoritesId] = useState();
  const [favoriteSongs, setFavoriteSongs] = useState();

  const songsRef = collection(db, 'songs');
  const favoritesRef = collection(db, 'favorites');

  useEffect(() => {
    if (!favoriteSongs) {
      getDocs(favoritesRef)
      .then((snapshot) => {
        let data = [];
        snapshot.docs.forEach((doc) => {
          data.push({...doc.data(), id: doc.id})
        })
        data = data.filter((item) => {
          return item.userId === user?.uuid;
        });
        setFavoritesId(data);
      })
    }

    if(favoritesId) {
      getDocs(songsRef)
      .then((snapshot) => {
        let data = [];
        snapshot.docs.forEach((doc) => {
          data.push({...doc.data(), id: doc.id})
        })
        data = data.filter(song => favoritesId.some(favorite => song.id === favorite.songId));
        setFavoriteSongs(data);
      })
    }
  }, [favoritesId])

  const handleProgress = (progress) => {
    setTrackProgress(progress.playedSeconds);
  }

  const handleDuration = (duration) => {
    setTrackDuration(duration);
  }

  // const currentArtist = tracks.filter((track) => {
  //   return track.src === song;
  // });

  return (
    <>
      {user &&
        <SongContext.Provider value={{song, setSong}}>
          <BaseLayout>
            <BaseTitle subtitle={'your'} title={'favorites'}/>
            {favoriteSongs &&
              <div style={{
                marginTop : '4rem'
              }}>
                {favoriteSongs.map((song, index) => {
                  return (
                    <MusicCard key={index} source={song.filePath} index={index + 1} songName={song.name} artistName={song.artistName} image={song.image}/>
                  )
                })}
              </div>
            }
            <ReactPlayer
                onProgress={handleProgress}
                onDuration={handleDuration}
                playing
                volume={0.1}
                url={song}
                height={0}
                width={0}/>
          </BaseLayout>
          <Player value={trackProgress} max={trackDuration}/>
          {/* {currentArtist.length > 0 &&
            <FavoriteArtistCover image={currentArtist[0].artistCover} />
          } */}
        </SongContext.Provider>
      }
      {user === null &&
        <BaseLayout>
          <h3>Sign in to add favorites!</h3>
        </BaseLayout>
      }
    </>
  )
}

export default Favorites