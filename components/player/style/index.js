import styled from 'styled-components';
import { color, transition } from '../../../styles/variables'

const PlayerContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 2;
`

const PlayerStyled = styled.progress`
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
const ResponsiveContainer = styled.div`
    max-width: 110rem;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    justify-content: flex-end;

    button {
      padding: 0;
      border: none;
      background-color: inherit;
      cursor: pointer;

      svg {
        fill: ${color.white};
        transition: ${transition.medium};

        &:hover {
          fill: ${color.accent};
        }
      }
    }
`

export {
  PlayerStyled,
  PlayerContainer,
  ResponsiveContainer
}