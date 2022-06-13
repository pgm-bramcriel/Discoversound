import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { NavItemsStyle, NavItemStyle } from './style'

const NavItems = ({items}) => {
  const router = useRouter();
  return (
    <NavItemsStyle>
      {items.map(item => {
        return (
          <NavItemStyle className={`/${item}` === router.asPath ? 'active' : ''}key={item}>
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