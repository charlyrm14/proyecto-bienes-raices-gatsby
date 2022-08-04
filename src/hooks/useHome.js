import { graphql, useStaticQuery } from "gatsby";

const useHome = () => {

    const result = useStaticQuery( graphql`
    query {
        allStrapiPage(filter: {name: {eq: "Inicio"}}) {
            nodes {
                id
                name
                content
                image {
                    localFile{
                        sharp: childImageSharp {
                            fluid(maxWidth: 1200 duotone: {
                                highlight: "#222222", shadow: "#192550", opacity: 30
                            }) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    }            
    `);

    return result.allStrapiPage.nodes.map( home => ({
        name:       home.name,
        content:    home.content,
        image:      home.image,
    }));
}

export default useHome