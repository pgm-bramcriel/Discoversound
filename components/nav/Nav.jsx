import React from 'react'
import Logo from '../logo/Logo'
import Profile from '../profile/Profile'
import NavItems from './NavItems'
import { NavLeft, NavStyle } from './style'

const Nav = () => {
  const navItems = [
    'discover',
    'create',
    'collection'
  ]

  return (
    <NavStyle>
      <NavLeft>
        <Logo />
        <NavItems items={navItems}/>
      </NavLeft>
      <Profile />
    </NavStyle>
  )
}

export default Nav