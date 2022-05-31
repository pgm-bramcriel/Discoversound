import styled from 'styled-components';
import { color, fontSize, transition } from '../../../styles/variables';

const ArtistDetailContainer = styled.div`
  position: absolute;
  top: 28vh;
  width: 95%;
  max-width: 90rem;
  margin: 0 auto;
`

const ArtistNav = styled.ul`
  display: flex;
  margin-bottom: 1rem;

  li {
    margin-right: 1rem;

    button {
      background-color: inherit;
      border: none;
      padding: 0;
      font-size: ${fontSize.s};
      color: ${color.white};
      cursor: pointer;
      transition: ${transition.medium};

      &:hover {
        color: ${color.accent};
      }
    }
  }
`

export {
  ArtistDetailContainer,
  ArtistNav
}