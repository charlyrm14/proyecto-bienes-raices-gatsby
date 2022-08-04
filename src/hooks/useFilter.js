import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

const Form = styled.form`
    width: 100%;
    display: flex;
    border: 1px solid #E1E1E1;
    max-width: 1200px;
    margin: 2rem auto 0 auto;
`;

const Select = styled.select`
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
`;

const useFilter = () => {

    const [ category, setCategory ] = useState('');

    const getCategories = useStaticQuery( graphql`
        {
            allStrapiCategory {
                nodes {
                    id
                    name
                }
            }
        }      
    `);

    const categories = getCategories.allStrapiCategory.nodes;

    const FilterProperties = () => (
        <Form>
            <Select
                onChange={ e => setCategory( e.target.value ) }
                value={ category }
            >
                <option value=""> -- Filtrar --</option>
                {
                    categories.map( option => (
                        <option key={ option.id } value={ option.name }> { option.name } </option>
                    ))
                }
            </Select>
        </Form>
    )

    return {
        category,
        FilterProperties
    }
}

export default useFilter