import styled from 'styled-components';
import { color, radius, transition } from '../../../styles/variables';

const ButtonStyle = styled.button`
  background-color: ${color.accent};
  color: ${color.white};
  border: none;
  outline: none;
  text-align: center;
  width: 20rem;
  max-width: 100%;
  padding: 1rem;
  border-radius: ${radius.small};
  cursor: pointer;
  transition: ${transition.medium};

  &:hover {
    background-color: ${color.accentDark};
  }
`

export {
  ButtonStyle
}