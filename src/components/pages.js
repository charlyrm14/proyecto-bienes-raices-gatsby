import * as React from "react";
import Layout from "./layout";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import PropertyList from "./propertyList";


export const query = graphql`
    query ( $id: String! ) {
        allStrapiPage(filter: { id: { eq: $id } } ) {
            nodes {
                name
                content
                image {
                    localFile {
                        sharp: childImageSharp {
                            fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
`;


const ContentPage = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media ( min-width: 768px ) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 5rem;
    }
`;


const Pages = ( { data: { allStrapiPage: { nodes } } } ) => {

    const { name, content, image } = nodes[0];

    return (
        <Layout>
            
            <main className="container">
                 
                <h1> { name } </h1>

                <ContentPage>
                    <Img
                        fluid={ image.localFile.sharp.fluid  }
                    />
                    <p> { content } </p>
                </ContentPage>
            </main>

            {
                name === "Propiedades" && (
                    <PropertyList/>
                )
            }

        </Layout>
    );
}

export default Pages

