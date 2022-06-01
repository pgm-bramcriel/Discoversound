import React, {useState} from 'react'
import BannerLayout from '../layouts/BannerLayout'
import { ProfileNav } from './styles/profile'
import TopSongs from '../components/topSongs/TopSongs'
import AllSongs from '../components/allSongs/AllSongs'

const Profile = () => {
  const [songTab, setSongTab] = useState(true);
  const [infoTab, setInfoTab] = useState(false);

  const cover1 = require("../public/images/rose-mixtape-album-cover-art-template-design-59c928b377e5f0e8e9aabc4982ca7e14_screen.jpg");
  const cover2 = require("../public/images/fairy-tale-cd-cover-art-template-design-7d7816925d2958dd4a4e968954ceadf5_screen.jpg");

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
    <BannerLayout>
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
          <TopSongs />
          <AllSongs data={tracks}/>
        </>
      }
    </BannerLayout>
  )
}

export default Profile