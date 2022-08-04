import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import * as heroCSS from "../css/hero.module.css";


const ImageBackGround = styled(BackgroundImage)`
    height: 300px;
`;


const Find = () => {

    const { image } = useStaticQuery( graphql`
        query {
            image: file( relativePath: { eq: "encuentra.jpg"}){
                sharp: childImageSharp {
                    fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <ImageBackGround
            Tag="section"
            fluid={ image.sharp.fluid }>

                <div className={ heroCSS.imageBackground }>
                    <h3 className={ heroCSS.title }> Encuentra la casa de tus sueños </h3>
                    <p> 15 años de experiencia </p>
                </div>

        </ImageBackGround>
    )
}

export default Find
