import styled from 'styled-components';
import { color, fontSize, radius } from '../../../styles/variables';

const TopSongsStyle = styled.section`
  width: 10rem;
  height: 10rem;
  max-width: 100%;
  position: relative;
  
  span {
    border-radius: ${radius.small};
  }
`

const SongFilter = styled.div`
  position: absolute;
  width: 10rem;
  height: 10rem;
  background: rgba(28,28,28,0.6);
  top: 0;
  border-radius: ${radius.small};
`

const SongPosition = styled.span`
  position: absolute;
  z-index: 2;
  font-size: ${fontSize.l};
  font-weight: bold;
  transform: translateX(-50%);
`

const SongName = styled.p`
  position: absolute;
  z-index: 2;
  bottom: 0;
  padding: 0.5rem;
  max-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
`
const FavoriteCount = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 1.5rem;
    margin-right: 0.5rem;

    path {
      fill: ${color.accent};
      stroke: ${color.accent};
    }
  }
`
const TopSongsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Song = styled.div`
  margin-right: 2rem;
`

export {
  TopSongsStyle,
  SongFilter,
  SongPosition,
  SongName,
  FavoriteCount,
  TopSongsContainer,
  Song
}