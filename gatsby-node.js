const urlSlug = require('url-slug');


exports.createPages = async ({ actions, graphql, reporter }) => {

    const { createPage } = actions;


    const result = await graphql(`
        query {
            allStrapiPage {
                nodes {
                    id
                    name
                }
            }
            allStrapiProperty {
                nodes {
                    id
                    name
                }
            }
        }
    `);


    if ( result.errors ) {
        reporter.panic('Sin resultados' + result.errors );
    }
    
    const pages         = result.data.allStrapiPage.nodes;
    const properties    = result.data.allStrapiProperty.nodes;


    // Genera páginas de páginas de strapi
    pages.forEach( page => {
        createPage({
            path: urlSlug(page.name),
            component: require.resolve("./src/components/pages.js"),
            context: {
                id: page.id
            }
        });
    });


    // Genera páginas de propiedades de strapi
    properties.forEach( property => {

        createPage({
            path: urlSlug(property.name),
            component: require.resolve("./src/components/properties.js"),
            context: {
                id: property.id
            }
        });

    });

}
