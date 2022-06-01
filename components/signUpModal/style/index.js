import styled from 'styled-components';
import { color, fontSize, transition } from '../../../styles/variables';

const SignUpModalStyle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  max-width: 90%;
  max-height: 100%;
  background-color: ${color.white};
  color: ${color.black};
  box-shadow: 5px 5px 500rem 500rem #1c1c1c80;
  border-radius: 1rem;
  z-index: 9999;
  overflow: hidden;
`

const CloseButton = styled.button`
    position: absolute;
    right: 1rem;
    top: 0.75rem;
`

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;

  button {
    text-align: center;
    width: 100%;
    background-color: inherit;
    font-size: ${fontSize.s};
    border: none;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    color: ${color.black};
  }
`
const BottomSection = styled.section`
  padding: 2rem;
`
export {
  SignUpModalStyle,
  TopSection,
  CloseButton,
  BottomSection
}