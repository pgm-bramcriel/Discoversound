import styled from "styled-components";
import { color } from "../../styles/variables";

const GlobalStyling = styled.div`
    color: ${color.white};
`

const MainStyling = styled.main`
    padding-top: 4rem;
    max-width: 90rem;
    margin: 0 auto;
    padding: 2rem 1rem;
`

export {
    MainStyling,
    GlobalStyling
}