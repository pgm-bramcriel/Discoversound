import React from 'react'
import { FavoriteCount, Song, SongFilter, SongName, SongPosition, TopSongsContainer, TopSongsStyle } from './style'
import SubTitle from '../subTitle/SubTitle'
import Image from 'next/image';

const TopSongs = () => {
  const image = require("../../public/images/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpg");
  return (
    <>
      <SubTitle>Top 5</SubTitle>
      <TopSongsContainer>
        <Song>
          <TopSongsStyle>
            <SongPosition>1</SongPosition>
            <Image
              src={image}
              alt='image'
              objectFit='contain'
            />
            <SongFilter />
            <SongName>Songtitle</SongName>
          </TopSongsStyle>
          <FavoriteCount>
            <svg xmlns="http://www.w3.org/2000/svg" width="53.533" height="47.075" viewBox="0 0 53.533 47.075">
              <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M48.959,8.394a13.3,13.3,0,0,0-18.808,0l-2.563,2.563L25.026,8.394A13.3,13.3,0,1,0,6.218,27.2l2.563,2.563L27.589,48.572,46.4,29.764,48.959,27.2a13.3,13.3,0,0,0,0-18.808Z" transform="translate(-0.823 -2.997)" fill="none" stroke="#f9f9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            </svg>
            <span>14</span>
          </FavoriteCount>
        </Song>
        <Song>
          <TopSongsStyle>
            <SongPosition>2</SongPosition>
            <Image
              src={image}
              alt='image'
              objectFit='contain'
            />
            <SongFilter />
            <SongName>Songtitle</SongName>
          </TopSongsStyle>
          <FavoriteCount>
            <svg xmlns="http://www.w3.org/2000/svg" width="53.533" height="47.075" viewBox="0 0 53.533 47.075">
              <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M48.959,8.394a13.3,13.3,0,0,0-18.808,0l-2.563,2.563L25.026,8.394A13.3,13.3,0,1,0,6.218,27.2l2.563,2.563L27.589,48.572,46.4,29.764,48.959,27.2a13.3,13.3,0,0,0,0-18.808Z" transform="translate(-0.823 -2.997)" fill="none" stroke="#f9f9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            </svg>
            <span>14</span>
          </FavoriteCount>
        </Song>
        <Song>
          <TopSongsStyle>
            <SongPosition>3</SongPosition>
            <Image
              src={image}
              alt='image'
              objectFit='contain'
            />
            <SongFilter />
            <SongName>Songtitle</SongName>
          </TopSongsStyle>
          <FavoriteCount>
            <svg xmlns="http://www.w3.org/2000/svg" width="53.533" height="47.075" viewBox="0 0 53.533 47.075">
              <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M48.959,8.394a13.3,13.3,0,0,0-18.808,0l-2.563,2.563L25.026,8.394A13.3,13.3,0,1,0,6.218,27.2l2.563,2.563L27.589,48.572,46.4,29.764,48.959,27.2a13.3,13.3,0,0,0,0-18.808Z" transform="translate(-0.823 -2.997)" fill="none" stroke="#f9f9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            </svg>
            <span>14</span>
          </FavoriteCount>
        </Song>
        <Song>
          <TopSongsStyle>
            <SongPosition>4</SongPosition>
            <Image
              src={image}
              alt='image'
              objectFit='contain'
            />
            <SongFilter />
            <SongName>Songtitle</SongName>
          </TopSongsStyle>
          <FavoriteCount>
            <svg xmlns="http://www.w3.org/2000/svg" width="53.533" height="47.075" viewBox="0 0 53.533 47.075">
              <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M48.959,8.394a13.3,13.3,0,0,0-18.808,0l-2.563,2.563L25.026,8.394A13.3,13.3,0,1,0,6.218,27.2l2.563,2.563L27.589,48.572,46.4,29.764,48.959,27.2a13.3,13.3,0,0,0,0-18.808Z" transform="translate(-0.823 -2.997)" fill="none" stroke="#f9f9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            </svg>
            <span>14</span>
          </FavoriteCount>
        </Song>
        <Song>
          <TopSongsStyle>
            <SongPosition>5</SongPosition>
            <Image
              src={image}
              alt='image'
              objectFit='contain'
            />
            <SongFilter />
            <SongName>Songtitle</SongName>
          </TopSongsStyle>
          <FavoriteCount>
            <svg xmlns="http://www.w3.org/2000/svg" width="53.533" height="47.075" viewBox="0 0 53.533 47.075">
              <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M48.959,8.394a13.3,13.3,0,0,0-18.808,0l-2.563,2.563L25.026,8.394A13.3,13.3,0,1,0,6.218,27.2l2.563,2.563L27.589,48.572,46.4,29.764,48.959,27.2a13.3,13.3,0,0,0,0-18.808Z" transform="translate(-0.823 -2.997)" fill="none" stroke="#f9f9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            </svg>
            <span>14</span>
          </FavoriteCount>
        </Song>
      </TopSongsContainer>
    </>
  )
}

export default TopSongs