import React from 'react'
import SubTitle from '../subTitle/SubTitle'
import MusicCard from '../musicCard/MusicCard'

const AllSongs = ({data}) => {
  return (
    <div>
      <SubTitle>All songs</SubTitle>
      {data.map((track, index) => {
        return (
          <MusicCard key={index} source={track.src} index={index + 1} songName={track.title} artistName={track.artist} image={track.artistCover} disableClick/>
        )
      })}
    </div>
  )
}

export default AllSongs