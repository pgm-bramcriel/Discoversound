import styled from 'styled-components'
import { color, fontSize, transition } from '../../styles/variables'

const ProfileNav = styled.div`
  display: flex;
  margin-bottom: 1rem;

  li {
    margin-right: 1rem;

    button {
      background-color: inherit;
      border: none;
      padding: 0;
      font-size: ${fontSize.s};
      color: ${color.white};
      cursor: pointer;
      transition: ${transition.medium};

      &:hover {
        color: ${color.accent};
      }
    }
  }
`

export {
  ProfileNav
}