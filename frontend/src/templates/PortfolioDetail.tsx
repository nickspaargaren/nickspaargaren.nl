import React from "react"
import Layout from "../layout/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import { FaAngleDoubleRight, FaCaretRight, FaCode } from 'react-icons/fa';
import Button from "../components/button/Button"

const PortfolioGrid = styled.div`

  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);

  .afbeelding:nth-child(14n+1), .afbeelding:nth-child(14n+12){
    grid-column: span 2;
    grid-row: span 2;
  }
  
  .afbeelding {border: 1px solid #aaa;}
  .afbeelding > div {height: 100% !important; object-fit: cover; width: 100% !important;}

`;

const EenPagina = ({data}) => {
  return (
    <>
      <Layout title={`Portfolio | ${data.pagina.titel}`} noindex>
        <div className="inhoud">
          <small>
            <ul className="bcrumbs">
              <li><Link to="/">Home</Link></li>
              <li><FaCaretRight/></li>
              <li><Link to="/portfolio/">Portfolio</Link></li>
              <li><FaCaretRight/></li>
              <li>{data.pagina.titel}</li>
            </ul>
          </small>
        </div>
        <div className="inhoud">
        <PortfolioGrid>
          <div className="afbeelding groot"><Img fluid={data.pagina.afbeelding.asset.fluid} alt="" loading="lazy" /></div>
            {data.pagina.afbeeldingen.map((afbeelding, key) => 
            
              <div key={key} className="afbeelding">
                <Img fluid={afbeelding.asset.fluid} alt="" loading="lazy" />
              </div>
            )}
          </PortfolioGrid>

          <h1>{data.pagina.titel}</h1>
          <p>{data.pagina.website}</p>
          <p>{data.pagina.beschrijving}</p>

          {data.pagina.skillsused.map((item, key) => 
            <div key={key}>
            {item.titel}
            </div>
          )}
          <div className="links">
            {data.pagina.website && <Button title="Website" subtitle="Bekijken" icoon={<FaAngleDoubleRight/>} url={data.pagina.website} external/>}
            {data.pagina.github && <Button title="Source" subtitle="Bekijken" icoon={<FaCode/>} url={data.pagina.github} external/>}
          </div>
        </div>
      </Layout>
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
        skillsused {
          titel
        }
      }
  } 
`;

export default EenPagina