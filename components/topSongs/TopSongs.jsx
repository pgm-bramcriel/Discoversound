import React from 'react'
import { FavoriteCount, Song, SongFilter, SongName, SongPosition, TopSongsContainer, TopSongsStyle } from './style'
import SubTitle from '../subTitle/SubTitle'
import Image from 'next/image';

const TopSongs = ({data}) => {
  data = data.slice(0, 5);
  return (
    <>
      <SubTitle>Top 5</SubTitle>
      <TopSongsContainer>
        {data.map((song, index) => {
          return (
            <Song key={index}>
              <TopSongsStyle>
                <SongPosition>{index + 1}</SongPosition>
                <Image
                  src={song.image}
                  alt='image'
                  objectFit='cover'
                  layout='fill'
                />
                <SongFilter />
                <SongName>{song.name}</SongName>
              </TopSongsStyle>
              <FavoriteCount>
                <svg xmlns="http://www.w3.org/2000/svg" width="53.533" height="47.075" viewBox="0 0 53.533 47.075">
                  <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M48.959,8.394a13.3,13.3,0,0,0-18.808,0l-2.563,2.563L25.026,8.394A13.3,13.3,0,1,0,6.218,27.2l2.563,2.563L27.589,48.572,46.4,29.764,48.959,27.2a13.3,13.3,0,0,0,0-18.808Z" transform="translate(-0.823 -2.997)" fill="none" stroke="#f9f9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                </svg>
                <span>14</span>
              </FavoriteCount>
            </Song>
          )
        })}
      </TopSongsContainer>
    </>
  )
}

export default TopSongs