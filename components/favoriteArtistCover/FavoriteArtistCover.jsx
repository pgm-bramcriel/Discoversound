import React from 'react'
import Image from 'next/image'
import { FavoriteArtistCoverStyle, ImageFilter } from './style'

const FavoriteArtistCover = ({image}) => {
  return (
    <FavoriteArtistCoverStyle>
      <ImageFilter />
      <Image
        alt='cover'
        src={image}
        objectFit='cover'
        layout='fill'
      />
    </FavoriteArtistCoverStyle>
  )
}

export default FavoriteArtistCover