import styled from 'styled-components';
import { color, fontSize, transition } from '../../../styles/variables';

const LogoStyle = styled.span`
    font-size: ${fontSize.m};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    margin-right: 2rem;
    transition: ${transition.medium};

    &:hover {
        transform: scale(1.15);
    }

    span {
        color: ${color.accent}
    }
`

export {
    LogoStyle
}