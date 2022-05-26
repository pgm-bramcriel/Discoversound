import styled from 'styled-components';
import { color, fontSize, transition } from '../../../styles/variables';

const ProfileStyle = styled.div`
    button {
        background-color: inherit;
        color: ${color.white};
        border: none;
        font-size: ${fontSize.s};
        cursor: pointer;
        transition: ${transition.medium};

        &:hover {
            color: ${color.accent};
        }
    }
`

export {
    ProfileStyle
}