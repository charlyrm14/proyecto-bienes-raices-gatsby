import React from "react";
import Icons from "./icons";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { Link } from "gatsby";
import urlSlug from "url-slug";

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f9bc60;
    color: #001e1d;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    display: block;
    font-weight: 700;
    border-radius: .3rem;
`;

const Card = styled.div`
    background-color: #004643;
    border-radius: .3rem;

    img {
        max-width: 100%;
    }
`;

const Content = styled.div`
    padding: 2rem;

    h3 {
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
        color: #fffffe;
    }

    .price {
        color: #abd1c6;
        font-size: 2rem;
    }
`;

const PropertyPreview = ( { property } ) => {

    const {
        name,
        toilets,
        price,
        parking,
        rooms,
        image,
    } = property;

    return (
        <>
            <Card>
                <Img
                    fluid={ image.localFile.sharp.fluid }
                />
                <Content>
                    <h3> { name } </h3>
                    <p className="price"> ${price} </p>

                    <Icons
                        toilets={ toilets }
                        parking={ parking }
                        rooms={ rooms }
                    />

                    <Button to={`/${urlSlug(name)}`}>
                        Visitar propiedad
                    </Button>

                </Content>
            </Card>
        </>
    )
}

export default PropertyPreview