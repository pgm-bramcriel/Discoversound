import styled from 'styled-components';

const FavoriteArtistCoverStyle = styled.div`
  width: 30rem;
  height: 30rem;
  max-width: 100%;
  max-height: 100%;
  margin-right: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;

  span {
    width: 30rem;
    max-width: 100%;
  }
`
const ImageFilter = styled.div`
  z-index: 1;
  height: 30rem;
  width: 30rem;
  position: absolute;
  background: rgba(28,28,28,0.6);
`

export {
  FavoriteArtistCoverStyle,
  ImageFilter
}