import styled from 'styled-components';
import { color, radius, transition } from '../../../styles/variables';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  cursor: pointer;
  transition: ${transition.medium};
  padding: 0.5rem;
  border-radius: ${radius.small};

  &:hover {
    background-color: ${color.grey};
  }
`

const CardLeft = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${color.accent};
    margin-right: 2rem;
  }

  figure {
    height: 100%;
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    border-radius: ${radius.small};
    margin: 0;
    margin-right: 1rem;
  }
`

const CardRight = styled.div`
  display: flex;
  align-items: center;
`

const CardSongInfo = styled.div`
  display: flex;
  flex-direction: column;

  .artist {
    color: ${color.light};
  }
`

export {
  CardContainer,
  CardLeft,
  CardRight,
  CardSongInfo
}