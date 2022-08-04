import * as React from "react"
import Layout from "../components/layout"
import useHome from "../hooks/useHome";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import BackgroundImage from "gatsby-background-image";
import * as heroCSS from "../css/hero.module.css";
import Find from "../components/find";
import PropertyList from "../components/propertyList";



const ImageBackGround = styled(BackgroundImage)`
  height: 600px;
`;


const IndexPage = () => {

    const home = useHome();
    const { name, content, image } = home[0];

    return (
        <Layout>

          <ImageBackGround
            Tag="section"
            fluid={ image.localFile.sharp.fluid }>

                <div className={ heroCSS.imageBackground }>
                  <h1 className={ heroCSS.title }> 
                    Venta de casas y departamentos exclusivos 
                  </h1>
                </div>

            </ImageBackGround>

          <main>
            <div css={ css`
              max-width: 800px;
              margin: 0 auto;
            `}>

                <h1> { name } </h1>

                <p css={ css`
                  text-align: center;
                `}> 
                  { content } 
                </p>

            </div>
          </main>

          <Find/>

          <PropertyList/>

        </Layout>
    )

}

export default IndexPage
