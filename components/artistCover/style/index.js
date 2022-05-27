import styled from 'styled-components';
import { media } from '../../../styles/variables';

const ArtistCoverStyled = styled.div`
  width: 100%;
  height: 10rem;
  max-width: 100%;
  max-height: 100%;
  margin-right: 2rem;

  @media (min-width: ${media.large}) {
    height: 60vh;
    width: 30vw;
  }

  span {
    width: 100% !important;
    max-width: 100%;

    @media (min-width: ${media.large}) {
      width: 30vw !important;
    }
  }
`

const ImageFilter = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(0deg, rgba(28,28,28,1) 0%, rgba(0,0,0,0) 90%);

  @media (min-width: ${media.large}) {
    width: 30vw;
  }
`

export {
  ArtistCoverStyled,
  ImageFilter
}