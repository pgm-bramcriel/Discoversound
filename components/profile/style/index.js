import styled from 'styled-components';
import { color, fontSize, radius, transition } from '../../../styles/variables';

const ProfileStyle = styled.div`
    position: relative;
    z-index: 2;

    button {
        background-color: inherit;
        color: ${color.white};
        border: none;
        font-size: ${fontSize.s};
        cursor: pointer;
        transition: ${transition.medium};
        padding: 0;

        &:hover {
            color: ${color.accent};
        }
    }

    figure {
        margin: 0;
    }

    .sign-in {
        font-weight: bold;
    }
`

const ProfileLoggedIn = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    cursor: pointer;
    transition: ${transition.medium};

    &:hover {
        transform: scale(1.05);

        p {
            color: ${color.accent};
        }
    }

    figure {
        margin-left: 0.75rem;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        overflow: hidden;
    }

    p {
        color: ${color.white};
        transition: ${transition.medium};
    }
`

const ProfileModal = styled.div`
    width: 10rem;
    height: 10rem;
    position: absolute;
    right: 0;
    background-color: ${color.white};
    z-index: 9999;
    margin-top: 0.75rem;
    border-radius: ${radius.small};
    padding: 1rem;
    font-weight: bold;
    text-align: center;

    p {
        cursor: pointer;
        color: ${color.black};
        margin-bottom: 0.5rem;
        transition: ${transition.medium};

        &:hover {
            color: ${color.accent};
        }
    }
`

export {
    ProfileStyle,
    ProfileLoggedIn,
    ProfileModal
}