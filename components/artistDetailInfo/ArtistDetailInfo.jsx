import React from 'react'
import Image from 'next/image';
import { ArtistDetailContainer, ArtistDetailLeft, ArtistDetailRight, Filter, InfoCard, SocialMediaContainer } from './style'
import Link from 'next/link';

const ArtistDetailInfo = ({songData, artistData}) => {
  console.log(artistData);
  return (
    <ArtistDetailContainer>
      <ArtistDetailLeft>
        <Image 
          src={songData[0].image}
          alt='band cover'
          objectFit={'cover'}
          layout={'fill'}
        />
        <Filter></Filter>
        <SocialMediaContainer>
          <Link href={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
              <path id="Icon_awesome-spotify" data-name="Icon awesome-spotify" d="M17.438.563A17.438,17.438,0,1,0,34.875,18,17.444,17.444,0,0,0,17.438.563Zm7.08,25.657a1.342,1.342,0,0,1-.752-.253c-4.388-2.644-9.492-2.756-14.534-1.723a4.54,4.54,0,0,1-.837.183,1.1,1.1,0,0,1-1.111-1.111,1.114,1.114,0,0,1,.956-1.181C14,20.862,19.884,20.974,24.9,23.977a1.189,1.189,0,0,1,.682,1.16,1.062,1.062,0,0,1-1.069,1.083Zm1.891-4.612a1.736,1.736,0,0,1-.865-.3A22.786,22.786,0,0,0,8.768,19.245a2.9,2.9,0,0,1-.837.183,1.365,1.365,0,0,1-1.364-1.364,1.383,1.383,0,0,1,1.09-1.455,23.65,23.65,0,0,1,6.877-.956,24.613,24.613,0,0,1,12.445,3.2,1.466,1.466,0,0,1,.795,1.385,1.362,1.362,0,0,1-1.364,1.371Zm2.18-5.358a1.617,1.617,0,0,1-.907-.274c-5.006-2.988-13.957-3.705-19.751-2.088a3.34,3.34,0,0,1-.907.183A1.623,1.623,0,0,1,5.386,12.41a1.661,1.661,0,0,1,1.223-1.68,29.469,29.469,0,0,1,8.262-1.069c5.133,0,10.512,1.069,14.442,3.361a1.651,1.651,0,0,1,.907,1.589,1.629,1.629,0,0,1-1.631,1.638Z" transform="translate(0 -0.563)" fill="#f9f9f9"/>
            </svg>
          </Link>
          <Link href={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
              <path id="Icon_awesome-facebook-square" data-name="Icon awesome-facebook-square" d="M31.138,2.25H3.737A3.737,3.737,0,0,0,0,5.987v27.4a3.737,3.737,0,0,0,3.737,3.737H14.421V25.268h-4.9V19.687h4.9V15.434c0-4.838,2.88-7.511,7.292-7.511a29.711,29.711,0,0,1,4.322.377v4.749H23.6c-2.4,0-3.147,1.488-3.147,3.015v3.624h5.354l-.856,5.581h-4.5V37.125H31.138a3.737,3.737,0,0,0,3.737-3.737V5.987A3.737,3.737,0,0,0,31.138,2.25Z" transform="translate(0 -2.25)" fill="#f9f9f9"/>
            </svg>
          </Link>
          <Link href={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.867" viewBox="0 0 34.875 34.867">
              <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M17.436,10.732a8.939,8.939,0,1,0,8.939,8.939A8.925,8.925,0,0,0,17.436,10.732Zm0,14.751a5.812,5.812,0,1,1,5.812-5.812,5.822,5.822,0,0,1-5.812,5.812Zm11.39-15.117a2.085,2.085,0,1,1-2.085-2.085A2.08,2.08,0,0,1,28.826,10.366Zm5.921,2.116c-.132-2.793-.77-5.267-2.816-7.306S27.418,2.5,24.625,2.36c-2.879-.163-11.507-.163-14.386,0-2.785.132-5.259.77-7.306,2.809S.257,9.681.117,12.475c-.163,2.879-.163,11.507,0,14.386.132,2.793.77,5.267,2.816,7.306s4.513,2.676,7.306,2.816c2.879.163,11.507.163,14.386,0,2.793-.132,5.267-.77,7.306-2.816s2.676-4.513,2.816-7.306c.163-2.879.163-11.5,0-14.378ZM31.028,29.949a5.884,5.884,0,0,1-3.314,3.314c-2.3.91-7.741.7-10.278.7s-7.99.2-10.278-.7a5.884,5.884,0,0,1-3.314-3.314c-.91-2.3-.7-7.741-.7-10.278s-.2-7.99.7-10.278A5.884,5.884,0,0,1,7.158,6.079c2.3-.91,7.741-.7,10.278-.7s7.99-.2,10.278.7a5.884,5.884,0,0,1,3.314,3.314c.91,2.3.7,7.741.7,10.278S31.938,27.662,31.028,29.949Z" transform="translate(0.005 -2.238)" fill="#f9f9f9"/>
            </svg>
          </Link>
        </SocialMediaContainer>
      </ArtistDetailLeft>
      <ArtistDetailRight>
        <InfoCard>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="Icon_material-person" data-name="Icon material-person" d="M18,18a6,6,0,1,0-6-6A6,6,0,0,0,18,18Zm0,3c-4.005,0-12,2.01-12,6v3H30V27C30,23.01,22.005,21,18,21Z" transform="translate(-6 -6)"/>
          </svg>
          <p>{artistData.length > 0 ? artistData[0].artistName : 'User has no account...'}</p>
        </InfoCard>
        <InfoCard>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
            <path id="Icon_awesome-music" data-name="Icon awesome-music" d="M28,1.75A1.749,1.749,0,0,0,25.724.082L8.225,5.25A1.749,1.749,0,0,0,7,6.918v14.3A7.565,7.565,0,0,0,5.25,21C2.35,21,0,22.567,0,24.5S2.35,28,5.25,28s5.25-1.567,5.25-3.5V11.72l14-4.1v10.1a7.565,7.565,0,0,0-1.75-.214c-2.9,0-5.25,1.567-5.25,3.5s2.35,3.5,5.25,3.5S28,22.933,28,21V1.75Z" transform="translate(0 0.001)"/>
          </svg>
          <p>{songData.length}</p>
        </InfoCard>
        <InfoCard className='description'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30">
            <path id="Icon_material-description" data-name="Icon material-description" d="M21,3H9A3,3,0,0,0,6.015,6L6,30a3,3,0,0,0,2.985,3H27a3.009,3.009,0,0,0,3-3V12Zm3,24H12V24H24Zm0-6H12V18H24Zm-4.5-7.5V5.25l8.25,8.25Z" transform="translate(-6 -3)"/>
          </svg>
          <p>{artistData.length > 0 ? (artistData[0].description ? artistData[0].description : 'User has no description...') : 'User has no account...'}</p>
        </InfoCard>
      </ArtistDetailRight>
    </ArtistDetailContainer>
  )
}

export default ArtistDetailInfo