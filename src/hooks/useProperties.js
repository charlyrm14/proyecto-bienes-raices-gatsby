import { graphql, useStaticQuery } from "gatsby";


const useProperties = () => {

    const infoProperties = useStaticQuery( graphql`
    {
        allStrapiProperty {
          nodes {
            id
            name
            toilets
            price
            parking
            rooms
            description {
              data {
                description
              }
            }
            category {
                      name
            }
            agent {
                      name
              email
              phone
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
          }
        }
      }          
    `);

    return infoProperties.allStrapiProperty.nodes.map( property => ({
        id:             property.id,
        name:           property.name,
        description:    property.description,
        toilets:        property.toilets,
        price:          property.price,
        parking:        property.parking,
        rooms:          property.rooms,
        image:          property.image,
        category:       property.category,
        agent:          property.agent,

    }))
    
}

export default useProperties
