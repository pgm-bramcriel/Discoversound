import Image from 'next/image'
import React from 'react'
import { CdMiddle, CdStyle } from './style'

const Cd = ({image}) => {
  console.log(image);
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