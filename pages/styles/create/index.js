import styled from 'styled-components';
import { color, media, radius } from '../../../styles/variables';

const CreateContainer = styled.div`
  h2 {
    right: -6rem;
  }

  input {
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    padding: 0.75rem 0.5rem;
    border-radius: ${radius.small};
    border: none;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background-color: ${color.white};
    color: ${color.black};
  }

  button {
    width: 100%;
  }
`

const CreateContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 4rem;

  form {
    width: 100%;

    @media (min-width: ${media.large}) {
      width: 45%;
    }
  }

  section {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    
    @media (min-width: ${media.large}) {
      width: 45%;
      margin-top: 0rem;
    }
  }
`

export {
  CreateContainer,
  CreateContent
}