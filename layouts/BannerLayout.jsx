import React, {useContext} from 'react'
import Nav from '../components/nav/Nav'
import SignUpModal from '../components/signUpModal/SignUpModal'
import { BannerHeader, BannerMain, GlobalStyling } from './style'
import {ModalContext} from '../context/ModalContext'

const BannerLayout = ({children, title, coverImage}) => {
  const {modalValue} = useContext(ModalContext);
  const image = '/images/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpg';

  return (
    <GlobalStyling>
      <BannerHeader style={{
        backgroundImage: coverImage ? `linear-gradient(rgba(28,28,28,0.6), rgba(28,28,28,0.6)), url(${coverImage})` : `linear-gradient(rgba(28,28,28,0.6), rgba(28,28,28,0.6)), url(${image})`,
        backgroundPosition: 'center',
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize: '100%'
      }}>
        <Nav />
        <h2>{title}</h2>
      </BannerHeader>
      <BannerMain>
        {children}
      </BannerMain>
      {modalValue &&
        <SignUpModal />
      }
    </GlobalStyling>
  )
}

export default BannerLayout