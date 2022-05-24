import Link from 'next/link'
import React from 'react'
import { NavItemsStyle, NavItemStyle } from './style'

const NavItems = ({items}) => {
  return (
    <NavItemsStyle>
      {items.map(item => {
        return (
          <NavItemStyle key={item}>
            <Link href={`/${item}`}>
              {item}
            </Link>
          </NavItemStyle>
        )
      })}
    </NavItemsStyle>
  )
}

export default NavItems