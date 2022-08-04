import * as React from "react";
import Helmet from "react-helmet";
import { Global, css } from "@emotion/react";
import Header from "./header";


const Layout = ( { children } ) => {

    return (
        <>
            <Global
                styles={ css`
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                        font-family: 'Oswald', sans-serif;
                    }
                    body {
                        font-size: 1.6rem;
                        line-height: 2;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        text-align: center;
                        font-weight: 300;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        width: 95%;
                    }
                    img {
                        max-width: 100%
                    }
                `}
            />

            <Helmet>
                <title> Bienes Raíces Gatsby </title>
                <meta   name="description" content="Bienes raíces con Gatsby"/>
                <link   rel="stylesheet" 
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
                        crossorigin="anonymous" 
                        referrerpolicy="no-referrer" />
                <link   rel="preconnect" 
                        href="https://fonts.googleapis.com" />
                <link   rel="preconnect" 
                        href="https://fonts.gstatic.com" 
                        crossorigin />
                <link   rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;700&display=swap"/>

            </Helmet>

            <Header/>

            { children }
        </>
    )

}

export default Layout
