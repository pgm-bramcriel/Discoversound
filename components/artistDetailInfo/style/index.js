import styled from 'styled-components';
import { color, media, radius, transition } from '../../../styles/variables';

const ArtistDetailContainer = styled.div`
  @media (min-width: ${media.large}) {
    display: flex;
    justify-content: space-between;
  }
`

const ArtistDetailLeft = styled.div`
  height: 25vh;
  width: 100%;
  position: relative;
  border-radius: ${radius.small};
  overflow: hidden;
  margin-bottom: 1rem;

  @media (min-width: ${media.large}) {
    height: 50vh;
    width: 49%;
  }
`

const ArtistDetailRight = styled.div`
  @media (min-width: ${media.large}) {
    width: 49%;
  }

  .description {
    align-items: flex-start;
  }
`

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    fill: ${color.accent};
    margin-right: 1rem;
    width: 1.25rem;
  }

  p {
    max-width: 70vw;

    @media (min-width: ${media.large}) {
      max-width: 30vw;
      font-size: 1.25rem;
    }
  }
`

const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #1c1c1c80;
`

const SocialMediaContainer = styled.div`
  position: absolute;
  display: flex;
  padding: 1rem;
  
  svg {
    margin-right: 0.5rem;
    cursor: pointer;
    width: 2rem;

    path {
      transition: ${transition.medium};
    }

    &:hover {
      path {
        fill: ${color.accent};
      }
    }
  }
`

export {
  ArtistDetailContainer,
  ArtistDetailLeft,
  ArtistDetailRight,
  InfoCard,
  Filter,
  SocialMediaContainer
}