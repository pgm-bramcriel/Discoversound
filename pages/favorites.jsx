import React from 'react'
import BaseTitle from '../components/baseTitle/BaseTitle'
import MusicCard from '../components/musicCard/MusicCard';
import BaseLayout from '../layouts/BaseLayout'

const Favorites = () => {
  const cover1 = require("../public/images/rose-mixtape-album-cover-art-template-design-59c928b377e5f0e8e9aabc4982ca7e14_screen.jpg");
  const cover2 = require("../public/images/fairy-tale-cd-cover-art-template-design-7d7816925d2958dd4a4e968954ceadf5_screen.jpg");

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
    <BaseLayout>
      <BaseTitle subtitle={'your'} title={'favorites'}/>
      <div style={{
        marginTop : '4rem'
      }}>
        {tracks.map((track, index) => {
          return (
            <MusicCard key={index} index={index + 1} songName={track.title} artistName={track.artist} image={track.artistCover}/>
          )
        })}
      </div>
    </BaseLayout>
  )
}

export default Favorites