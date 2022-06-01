import styled from 'styled-components';
import { color } from '../../../styles/variables'

const PlayerStyled = styled.progress`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1rem;
  -webkit-appearance: none;
  appearance: none;
  z-index: 2;

  &::-webkit-progress-bar {
    background-color: #00000000;
  }

  &::-webkit-progress-value {
    background-color: ${color.accent};
    border-radius: 0 2px 2px 0;
  }
`

export {
  PlayerStyled
}