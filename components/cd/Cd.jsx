import Image from 'next/image'
import React from 'react'
import { CdMiddle, CdStyle } from './style'

const Cd = () => {
  const image = require("../../public/images/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpg");
  return (
    <CdStyle>
      <Image
        alt='kidcudi'
        src={image}
        objectFit='cover'
        layout='fill'
      />
      <CdMiddle />
    </CdStyle>
  )
}

export default Cd