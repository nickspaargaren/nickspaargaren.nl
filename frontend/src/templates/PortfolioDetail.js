import { graphql } from "gatsby"
import React from "react"
import Nav from "../components/navigatie/Nav";
import Img from "gatsby-image"
import styled from 'styled-components'

const PortfolioGrid = styled.div`

  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);

  .afbeelding:nth-child(14n+1), .afbeelding:nth-child(14n+12){
    grid-column: span 2;
    grid-row: span 2;
  }

  .afbeelding > div {height: 100% !important; object-fit: cover; width: 100% !important;}

`;

const EenPagina = ({data}) => {
  return (
    <>
      <Nav/>
      <div>{data.pagina.titel}</div>
      <div>{data.pagina.website}</div>
      <PortfolioGrid>
      <div className="afbeelding groot"><Img fluid={data.pagina.afbeelding.asset.fluid} alt="" loading="lazy" /></div>
        {data.pagina.afbeeldingen.map((afbeelding, key) => (
          <div className="afbeelding">
            <Img fluid={afbeelding.asset.fluid} alt="" loading="lazy" />
          </div>
        ))}
      </PortfolioGrid>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    pagina: sanityPortfolio(slug: {
      current: {
        eq: $slug
      }
    })
    {
      titel
      website
      tags
      github
      beschrijving
      samenwerking
      afbeelding {
        asset {
          fluid(maxWidth: 1086, toFormat: WEBP) {
            base64
            aspectRatio
            src
            srcSet
            sizes
            srcSetWebp
            srcWebp
          }
        }
      }
      afbeeldingen {
        asset {
            fluid(maxWidth: 400, toFormat: WEBP) {
            base64
            aspectRatio
            src
            srcSet
            sizes
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  } 
`;

export default EenPagina