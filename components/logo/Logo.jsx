import React from 'react'
import Link from 'next/link'
import { LogoStyle } from './style'

const Logo = () => {
  return (
    <Link href="/">
      <LogoStyle>D<span>S</span></LogoStyle>
    </Link>
  )
}

export default Logo