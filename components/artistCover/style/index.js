import styled from 'styled-components';

const ArtistCoverStyled = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 35rem;
  height: 35rem;
  max-width: 100%;
  max-height: 100%;
`

const ImageFilter = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(0deg, rgba(28,28,28,1) 0%, rgba(0,0,0,0) 90%);
`

export {
  ArtistCoverStyled,
  ImageFilter
}