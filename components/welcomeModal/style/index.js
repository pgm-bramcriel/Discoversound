import styled from 'styled-components';
import { color } from '../../../styles/variables';

const WelcomeModalStyle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 35rem;
  max-width: 90%;
  max-height: 100%;
  background-color: ${color.white};
  color: ${color.black};
  box-shadow: 5px 5px 500rem 500rem #1c1c1c80;
  padding: 2rem 1rem;
  border-radius: 1rem;
  text-align: center;
  z-index: 9999;
  overflow: hidden;

  svg {
    margin-top: 2rem;
  }

  h2 {
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`

export {
  WelcomeModalStyle
}