import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "./navigation";
import { css } from "@emotion/react";

const Header = () => {

    const logo = useStaticQuery( graphql`
        query {
            file( relativePath: { 
                    eq: "logo.svg" 
                }
            ) {
                publicURL
            }
        }
    `);

    return (
        <header
            css={ css`
                background-color: #004643;
                color: #fffffe;
                padding: 1.5rem;
            `}
        >

            <div
                css={ css`
                    max-width: 120rem;
                    margin: 0 auto;
                    text-align: center;

                    @media ( min-width: 768px ) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Link to="/">
                    <img src={ logo.file.publicURL } alt="Bienes Raíces"/>
                </Link>

                <Navigation/>
            </div>

        </header>
    );
}

export default Header