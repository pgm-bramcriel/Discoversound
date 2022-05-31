import styled from 'styled-components';
import { color } from '../../../styles/variables';

const ArtistBannerStyle = styled.div`
  width: 100%;
  height: 25vh;

  section {
    position: absolute;
    bottom: 2rem;
    width: 100%;
    z-index: 2;
  }

  h2 {
    z-index: 3;
    color: ${color.white};
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 1rem;
    font-size: 2.3rem;
    /* font-style: italic; */
  }
`

const FilterImage = styled.div`
  /* z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(28,28,28,0.6); */
`

export {
  ArtistBannerStyle,
  FilterImage
}