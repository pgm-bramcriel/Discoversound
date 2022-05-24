import styled from 'styled-components';
import { color, fontSize, transition } from '../../../styles/variables';

const LogoStyle = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;
    margin-right: 4rem;
    transition: ${transition.medium};
    position: relative;

    &:hover {
        transform: scale(1.15);
    }

    span {
        color: ${color.accent}
    }
`

const LogoSound = styled.p`
    position: absolute;
    color: ${color.accent};
    font-weight: normal;
    font-style: italic;
    right: -0.75rem;
    bottom: -0.65rem;
`

export {
    LogoStyle,
    LogoSound,
}