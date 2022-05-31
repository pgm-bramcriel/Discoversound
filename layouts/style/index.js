import styled from "styled-components";
import { color } from "../../styles/variables";

const GlobalStyling = styled.div`
    color: ${color.white};
`

const MainStyling = styled.main`
    max-width: 90rem;
    margin: 0 auto;
    padding: 2rem 1rem;
`

const BannerMain = styled.main`
    max-width: 90rem;
    margin: 0 auto;
    padding: 2rem 1rem;
`

const BannerHeader = styled.header`
    h2 {
        color: ${color.white};
        max-width: 90rem;
        margin: 0 auto;
        padding: 0 1rem;
        font-size: 2.3rem;
        padding-top: 7rem;
        padding-bottom: 1rem;
    }
`

export {
    MainStyling,
    GlobalStyling,
    BannerMain,
    BannerHeader
}