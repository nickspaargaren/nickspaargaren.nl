import React from "react"
import Layout from "../layout/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { FaAngleDoubleRight, FaCode, FaCaretRight } from 'react-icons/fa';

import {Spring} from 'react-spring/renderprops'
import Button from "../components/button/Button";
import PortfolioItem from "../components/PortfolioItem";

const Portfolio = () => {

  const data = useStaticQuery(graphql`

      query {
        portfolio: allSanityPortfolio(sort: {fields: samenwerking, order: ASC}) {
          nodes {
            titel
            website
            tags
            id
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
            slug {
              current
            }
            skillsused {
              titel
              afbeelding {
                asset {
                  fluid(maxWidth: 35, maxHeight: 35) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
        <Layout title={`Portfolio`} noindex>
          <div className="inhoud">
            <small>
              <ul className="bcrumbs">
                <li><Link to="/">Home</Link></li>
                <li><FaCaretRight/></li>
                <li>Portfolio</li>
              </ul>
            </small>
          </div>
          <div className="inhoud">
            {data.portfolio.nodes.map((item, key) =>
              <PortfolioItem key={key} titel={item.titel} beschrijving={item.beschrijving} slug={item.slug.current} afbeelding={item.afbeelding} skillsused={item.skillsused}/>
            )}
          </div>
        </Layout>
        )
}

export default Portfolio