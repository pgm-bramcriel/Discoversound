import React from 'react'
import Link from 'next/link'
import { LogoSound, LogoStyle } from './style'

const Logo = () => {
  return (
    <Link href="/">
      <LogoStyle>
        <p>Discover</p>
        <LogoSound>Sound</LogoSound>
      </LogoStyle>
    </Link>
  )
}

export default Logo