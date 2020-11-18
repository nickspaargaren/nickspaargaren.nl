import React from "react"
import Layout from "../layout/layout"

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

import styles from '../styles/portfolio.module.css';

const Portfolio = () => {

  const { portfolio } = useStaticQuery(
    graphql`
      query portfolio {
        portfolio: allSanityPortfolio {
          nodes {
            titel
            website
            tags
            id
            github
            beschrijving
            afbeelding {
              asset {
                fluid {
                  aspectRatio
                  base64
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
      }  
    `
  )

  return (
        <Layout title="Portfolio" noindex>
          <header>
            <h1>Welkom, ik ben <strong>Nick Spaargaren</strong></h1>
            <p>Designer & Front-End Developer</p>
          </header>
          <div className={styles.portfolio}>
            {portfolio.nodes.map((item) =>
              <div key={item.id} className={styles.item}>
                <div className={styles.beschrijving}>
                  <h2>{item.titel}</h2>
                  <p>{item.beschrijving}</p>
                  <div><a rel="noopener noreferrer" target="_blank" href={item.website}>{item.website}</a></div>
                  <div><a rel="noopener noreferrer" target="_blank" href={item.github}>{item.github}</a></div>

                  <ul className={styles.tags}>
                    {item.tags.map((tag) => 
                      <li key={tag.id}>{tag}</li>
                    )}
                  </ul>

                </div>
                <a rel="noopener noreferrer" target="_blank" href={item.website}>
                  <Img fluid={item.afbeelding.asset.fluid} loading="lazy" />
                </a>
                </div>
            )}
          </div>
        </Layout>
        )
}

export default Portfolio