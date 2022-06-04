import styled from 'styled-components';
import { color, fontSize, media, transition } from '../../../styles/variables';

const Heading = styled.div`
  position: relative;
  margin-top: 0rem;

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
  padding-right: 1rem;
  display: none;

  @media (min-width: ${media.large}) {    
    top: 23.5rem;
    left: 37rem;
    display: block;
  }

  h2 {
    font-size: ${fontSize.m};
    margin-bottom: 1rem;
    max-width: 30rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    align-items: center;

    @media (min-width: ${media.large}) {
      font-size: ${fontSize.l};
    }

    svg {
      margin-right: 1rem;
      width: 1rem;

      @media (min-width: ${media.large}) {
        width: inherit;
      }
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

        .favorite {
          fill: ${color.accent};
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

const HomeInfoMobile = styled.div`
  padding-right: 1rem;
  margin-top: 8rem;

  @media (min-width: ${media.large}) {
    display: none;
  }

  h2 {
    font-size: ${fontSize.m};
    margin-bottom: 1rem;
    max-width: 30rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    align-items: center;

    @media (min-width: ${media.large}) {
      font-size: ${fontSize.l};
    }

    svg {
      margin-right: 1rem;
      width: 1rem;

      @media (min-width: ${media.large}) {
        width: inherit;
      }
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
        }

        .favorite {
          fill: ${color.accent};
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

const ArtistInfo = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  left:0;
  bottom:0;

  @media (min-width: ${media.large}) {
    flex-direction: row;
  }
`

export {
  Heading,
  HomeInfo,
  ArtistInfo,
  HomeInfoMobile
}