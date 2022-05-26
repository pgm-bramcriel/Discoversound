import styled from 'styled-components';
import { color, fontSize, radius } from '../../../styles/variables';

const LoginStyle = styled.div`
  h2 {
    color: ${color.accent};
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;

    input {
      width: 100%;
      margin-bottom: 0.5rem;
      padding: 0.75rem 0.5rem;
      border-radius: ${radius.small};
      border: none;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
  }

  button {
    width: 100%;
  }
`

export {
  LoginStyle
}