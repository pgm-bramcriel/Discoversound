import styled from 'styled-components';
import { color, media } from '../../../styles/variables';

const CdStyle = styled.div`
    @keyframes rotate {
        100% {transform: translateX(50%) rotate(360deg);}
    }

    width: 25rem;
    height: 25rem;
    bottom: -12.5rem;
    top: inherit;
    right: 50%;
    border-radius: 100%;
    animation: rotate 20s linear infinite;
    position: absolute;
    border: 4px solid ${color.white};
    transform: translateX(50%) rotate(0deg);
    overflow: hidden;

    @media (min-width: ${media.medium}) {
        width: 35rem;
        height: 35rem;
        right: 0;
        top: 22%;
    }
`

const CdMiddle = styled.div`
    position: absolute;
    z-index: 1;
    width: 4rem;
    height: 4rem;
    background-color: ${color.black};
    border-radius: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid ${color.white};
`

export {
    CdStyle,
    CdMiddle
}