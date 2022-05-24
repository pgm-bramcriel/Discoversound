import styled from 'styled-components';
import { color, fontSize, transition } from '../../../styles/variables';

const Heading = styled.div`
  position: relative;
  margin-top: 4rem;

  p {
    color: ${color.accent};
    font-style: italic;
    font-size: ${fontSize.l};
    font-weight: normal;
  }

  h1 {
    position: absolute;
    font-size: ${fontSize.xl};
    left: 4rem;
    top: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: ${transition.medium};

    &:hover {
      transform: scale(1.1);
    }
  }
`

const HomeInfo = styled.div`
  position: absolute;
  top: 23.5rem;
  left: 37rem;

  h2 {
    font-size: ${fontSize.l};
    margin-bottom: 1rem;
    max-width: 30rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
    }

    button {
      padding: 0;
      background-color: inherit;
      border: none;

      svg {
        margin-right: 0;
        cursor: pointer;
        width: 2rem;
        margin-left: 2rem;
        transition: ${transition.medium};

        path {
          transition: ${transition.medium};
          fill: ${color.black};
        }

        &:hover {
          path {
            fill: ${color.accent};
            stroke: ${color.accent};
          }
        }
      }
    }
  }

  p {
    max-width: 20rem;
    font-style: italic;
    margin-bottom: 2rem;
    color: ${color.light};
  }
`

export {
  Heading,
  HomeInfo
}