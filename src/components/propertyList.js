import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import useProperties from "../hooks/useProperties";
import PropertyPreview from "./propertyPreview";
import * as propertyListCSS from "../css/propertyList.module.css";
import useFilter from "../hooks/useFilter";


const PropertyList = () => {

    const propertiesResult = useProperties();

    const [ properties ] = useState( propertiesResult );
    const [ filteredCategories, setFilteredCategories ] = useState([]);

    // filtro de propiedades
    const { category, FilterProperties } = useFilter();

    console.log(category);

    useEffect( () => {
        
        if ( category ) {
            const filterSelected = properties.filter( propertyFilter => propertyFilter.category.name === category );
            setFilteredCategories( filterSelected ); 
        } else {
            setFilteredCategories( properties );
        }


    }, [ category, properties ]);

    return (
        <>
            <h2 css={ css`
                margin-top: 5rem;

            `}> 
                Listado de propiedades 
            </h2>

            {
                FilterProperties()
            }

            <ul className={ propertyListCSS.properties }>
                {
                    filteredCategories.map( property => (
                        <PropertyPreview key={ property.id } property={ property }/>
                    ))
                }
            </ul>
        </>
    )
}

export default PropertyList
