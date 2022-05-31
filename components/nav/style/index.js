import styled from "styled-components";
import { color, transition } from "../../../styles/variables";

const NavStyle = styled.nav`
    max-width: 110rem;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const NavItemsStyle = styled.ul`
    text-transform: capitalize;
    display: flex;
`

const NavItemStyle = styled.li`
    margin-right: 1.5rem;
    transition: ${transition.medium};
    color: ${color.light};
    z-index: 999;
    
    &:hover {
        color: ${color.accent}
    }
`

const NavLeft = styled.div`
    display: flex;
    align-items: center;
`

export {
    NavStyle,
    NavItemsStyle,
    NavItemStyle,
    NavLeft
}