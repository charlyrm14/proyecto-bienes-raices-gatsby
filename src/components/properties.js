import * as React from "react";
import Icons from "./icons";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import Layout from "./layout";
import { graphql } from "gatsby";

export const query = graphql`
    query($id: String!) {
        allStrapiProperty( filter: { id: { eq: $id }}){
            nodes {
                name
                parking
                toilets
                rooms
                price
                description {
                    data {
                        description
                    }
                }
                image {
                    localFile {
                        sharp: childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                category {
                    name
                }
                agent {
                    name
                    phone
                    email
                }
            }
        }
    }
`;


const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media ( min-width: 768px ) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 5rem;
    }
`;

const Sidebar = styled.aside`

    .price{
        color: #001e1d;
        font-size: 2rem;
    }

    .agent {
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #004643;
        padding: 3rem;
        color: #abd1c6;

        p {
            margin: 0;
        }
    }
`;

const Properties = ( { data: { allStrapiProperty: { nodes } } } ) => {

    const {
        name,
        parking,
        toilets,
        rooms,
        price,
        description,
        image,
        category,
        agent,
    } = nodes[0];

    return (
        <Layout>
            <h1> { name } </h1>
            <Content>

                <main>
                    <Img
                        fluid={ image.localFile.sharp.fluid  }
                    />

                    <p>
                        Categoría: { category.name }
                    </p>

                    <p>
                        { description.data.description  }
                    </p>
                </main>

                <Sidebar>
                    <p className="price"> ${ price } </p>
                    <Icons
                        toilets={ toilets }
                        parking={ parking }
                        rooms={ rooms }
                    />

                    <div className="agent">
                        <h2> Vendedor </h2>
                        <p> { agent.name } </p>
                        <p> Telefóno: { agent.phone } </p>
                        <p> Email: { agent.email } </p>
                    </div>
                </Sidebar>

            </Content>
        </Layout>
    );
}

export default Properties

