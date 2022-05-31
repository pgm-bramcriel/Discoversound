import Image from 'next/image'
import React from 'react'
import { ArtistBannerStyle, FilterImage } from './style';

const ArtistBanner = () => {
  const image = require("../../public/images/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpg");
  return (
    <ArtistBannerStyle>
      <section>
        <h2>
          Artistname1
        </h2>
      </section>
      <FilterImage />
      <Image
        src={image}
        alt='cover image'
        objectFit='cover'
        layout='fill'
      />
    </ArtistBannerStyle>
  )
}

export default ArtistBanner