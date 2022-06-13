import React from 'react'
import Image from 'next/image'
import { ArtistCoverStyled, ImageFilter } from './style'

const ArtistCover = ({image}) => {
  return (
    <ArtistCoverStyled>
      <ImageFilter />
      <Image
        alt='cover'
        src={image}
        objectFit='cover'
        layout='fill'
      />
    </ArtistCoverStyled>
  )
}

export default ArtistCover