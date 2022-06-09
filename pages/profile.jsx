import React, {useState, useEffect} from 'react'
import BannerLayout from '../layouts/BannerLayout'
import { ProfileNav } from './styles/profile'
import TopSongs from '../components/topSongs/TopSongs'
import AllSongs from '../components/allSongs/AllSongs'
import { useAuth } from '../context/AuthContext'
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import EditInfo from '../components/editInfo/EditInfo'

const Profile = () => {
  const [songTab, setSongTab] = useState(true);
  const [infoTab, setInfoTab] = useState(false);
  const [songData, setSongData] = useState();
  const [artist, setArtist] = useState([]);
  const {user} = useAuth();

  const colRef = collection(db, 'songs');
  const artistColRef = collection(db, 'artists');

  const getSongs = async () => {
    getDocs(colRef)
    .then((snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({...doc.data(), id: doc.id})
      })
      data = data.filter((song) => {
        return song.userId === user.uuid;
      })
      setSongData(data);
    })
  }

  useEffect(() => {
    getSongs();

    getDocs(artistColRef)
    .then((snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({...doc.data(), id: doc.id})
      })
      data = data.filter((artist) => {
        return artist.userId === user.uuid;
      });
      setArtist(data);
    })
  }, []);

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
    <BannerLayout coverImage={artist.length > 0 ? (artist[0].artistCover ? artist[0].artistCover : undefined) : undefined}>
      <ProfileNav>
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
            Edit info
          </button>
        </li>
      </ProfileNav>
      {songTab &&
        <>
          {songData &&
            <>
              <TopSongs data={songData}/>
              <AllSongs data={songData}/>
            </>
          }
        </>
      }
      {infoTab &&
        <>
          {user &&
            <EditInfo user={user}/>
          }
        </>
      }
    </BannerLayout>
  )
}

export default Profile