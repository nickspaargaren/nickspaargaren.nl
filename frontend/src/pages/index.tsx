import React from "react"
import Layout from "../layout/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import {useSiteMetadata} from '../data/hooks/algemeen';

import {Spring} from 'react-spring/renderprops'
import Button from "../components/button/Button";
import Github from "../components/github/Github";

import {SocialData} from '../data/socials/SocialData';
import PortfolioItem from "../components/PortfolioItem";

const Index = () => {

  const data = useStaticQuery(graphql`

    query {
      portfolio: allSanityPortfolio(sort: {fields: samenwerking, order: ASC}, limit: 3) {
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

      skills: allSanitySkills(sort: {fields: percentage, order: DESC}) {
        nodes {
          id
          titel
          percentage
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
    `
  )
  
  const {naam, functie, telefoonnummer} = useSiteMetadata();

  return (
        <Layout title={`Portfolio | ${naam}`} description={functie} noindex>
          <header>
            <div className="grid-2x">
              <div className="links">
                <h1>Welkom, ik ben <strong style={{whiteSpace: 'nowrap'}}>{naam}</strong></h1>
                <p>{functie}</p>
                <div>

                  {SocialData.map((social, key) => 
                    <div key={key} >
                      <a rel="noopener noreferrer" target="_blank" href={social.url}>
                        {social.icoon} 
                        <span><strong>{social.platform}</strong></span>
                      </a>
                    </div>
                  )}

                </div>
              </div>
              <div className="rechts">
                <div className="skills">
                  {data.skills.nodes.map((item, key) => 
                    <div key={key} className="skill">
                      {item.afbeelding ? <Img fluid={item.afbeelding.asset.fluid} alt={item.titel} loading="lazy" /> : <img src="https://placehold.it/35x35" alt="placeholder"/>}
                      <div>
                        <div className="titel">
                          {item.titel}
                          <span>{item.percentage + '%'}</span>
                        </div>
                        <div className="percentage">
                          <Spring config={{ tension: 280, friction: 60, delay: 300 }} from={{ width: '0%' }} to={{ width: item.percentage + '%'}}>
                            {style => (
                              <div style={style} className="gevuld"></div>
                            )}
                          </Spring>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>
          <div className="inhoud">
          {data.portfolio.nodes.map((item, key) => {
            return (
              <>
              <PortfolioItem key={key} titel={item.titel} beschrijving={item.beschrijving} slug={item.slug.current} afbeelding={item.afbeelding} skillsused={item.skillsused}/>

              {/* <div className="info">
                    {item.samenwerking && <div className="samenwerking">
                      <div><img src={`/images/logo-cm-specialist.png`} alt="CM Specialist" width="39px" height="39px" /></div>
                      <div><span className="klein">Samenwerking</span><strong>CM Specialist</strong></div></div>
                    }
                  </div> */}

            </>
            )
          }
             
            )}
          </div>
          <section>
            <div className="inhoud" style={{textAlign: 'center'}}>
              <h3>Open Source project</h3>
              <p>met meeste contributors</p>
              <Github  />
            </div>
          </section>
        </Layout>
        )
}

export default Index