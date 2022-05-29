import React from 'react'
import BaseLayout from '../../layouts/BaseLayout';
import { ArtistNav } from '../styles/artist';

const Artist = () => {
  const cover1 = require("../../public/images/rose-mixtape-album-cover-art-template-design-59c928b377e5f0e8e9aabc4982ca7e14_screen.jpg");
  const cover2 = require("../../public/images/fairy-tale-cd-cover-art-template-design-7d7816925d2958dd4a4e968954ceadf5_screen.jpg");

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
      <ArtistNav>
        <li>
          <button>Songs</button>
        </li>
        <li>
          <button>Info</button>
        </li>
      </ArtistNav>
    </BaseLayout>
  )
}

export default Artist