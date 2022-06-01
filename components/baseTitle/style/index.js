import styled from 'styled-components';
import { color, fontSize } from '../../../styles/variables';

const TitleContainer = styled.div`
  position: relative;
  display: inline;
  
  span {
    color: ${color.accent};
    font-style: italic;
    font-size: 2.5rem;
    text-transform: capitalize;
  }

  h2 {
    color: ${color.white};
    font-size: ${fontSize.l};
    position: absolute;
    right: -11rem;
    bottom: -2rem;
    text-transform: capitalize;
  }
`

export {
  TitleContainer
}