import React from 'react'
import SubTitle from '../subTitle/SubTitle'
import MusicCard from '../musicCard/MusicCard'

const AllSongs = ({data}) => {
  return (
    <div>
      <SubTitle>All songs</SubTitle>
      {data.map((track, index) => {
        return (
          <MusicCard key={index} source={track.filePath} index={index + 1} songName={track.name} artistName={track.artistName} image={track.image} disableClick/>
        )
      })}
    </div>
  )
}

export default AllSongs