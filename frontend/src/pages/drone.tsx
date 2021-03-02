import React from "react"
import Layout from "../layout/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { FaAngleDoubleRight, FaCode, FaCaretRight } from 'react-icons/fa';

import {Spring} from 'react-spring/renderprops'
import Button from "../components/button/Button";

const Drone = () => {

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
        }
      }

    }  
    `
  )


  return (
        <Layout title={`Drone`} noindex>
          <div className="inhoud">
          <small>
              <ul className="bcrumbs">
                <li><Link to="/">Home</Link></li>
                <li><FaCaretRight/></li>
                <li>Drone</li>
              </ul>
            </small>
            Drone
          </div>
        </Layout>
        )
}

export default Drone