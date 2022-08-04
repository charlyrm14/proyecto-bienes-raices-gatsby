import * as React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media ( min-width: 768px ) {
        padding: 0;
        flex-direction: row;
        justify-content: space-between;
        gap: 2rem;
    }
`;

const NavLink = styled( Link )`
    color: #fffffe;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    padding: .5rem;
    margin-right: 1rem;

    &:last-of-type {
        margin: 0;
    }

    &.current-page {
        border-bottom: 2px solid #fffffe;
    }
`;

const Navigation = () => {

    return (
        <Nav>
            <NavLink 
                to="/"
                activeClassName="current-page"> 
                Inicio 
            </NavLink>

            <NavLink 
                to="/nosotros"
                activeClassName="current-page"> 
                Nosotros 
            </NavLink>

            <NavLink 
                to="/propiedades"
                activeClassName="current-page"> 
                Propiedades 
            </NavLink>

        </Nav>
    );
}

export default Navigation