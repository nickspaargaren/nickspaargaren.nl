import React from "react"
import Layout from "../layout/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styles from '../styles/portfolio.module.css';

import cmspecialistLogo from '../data/images/logo-cm-specialist.png'
import { FaAngleDoubleRight, FaCode } from 'react-icons/fa';

import {useSiteMetadata} from '../data/hooks/algemeen';

import {Spring} from 'react-spring/renderprops'
import Button from "../components/button/Button";
import Github from "../components/github/Github";

import {SocialData} from '../data/socials/SocialData';

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
                    <div>
                      <a key={key} rel="noopener noreferrer" target="_blank" href={social.url}>
                        {social.icoon} 
                        <span><strong>{social.platform}</strong></span>
                      </a>
                    </div>
                  )}

                </div>
              </div>
              <div className="rechts">
                <div className={styles.skills}>
                  {data.skills.nodes.map((item, key) => 
                    <div key={key} className={styles.skill}>
                      {item.afbeelding ? <Img fluid={item.afbeelding.asset.fluid} alt={item.titel} loading="lazy" /> : <img src="https://placehold.it/35x35" alt="placeholder"/>}
                      <div>
                        <div className={styles.titel}>
                          {item.titel}
                          <span>{item.percentage + '%'}</span>
                        </div>
                        <div className={styles.percentage}>
                          <Spring config={{ tension: 280, friction: 60, delay: 300 }} from={{ width: '0%' }} to={{ width: item.percentage + '%'}}>
                            {style => (
                              <div style={style} className={styles.gevuld}></div>
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
          <div className={styles.portfolio}>
          {data.portfolio.nodes.map((item, key) =>
              <section key={key}>
                <div className={`${styles.item} inhoud grid-2x`}> 
                  <div className={styles.beschrijving}>
                    <h2>{item.titel}</h2>
                    <p>{item.beschrijving}</p>                   

                    <ul className={styles.tags}>
                      {item.tags.map((tag, key) => 
                        <li key={key}>{tag}</li>
                      )}
                    </ul>
                    <Link to={`portfolio/${item.slug.current}`}>Link</Link>

                  </div>
                  <div className={styles.plaatje}>
                    {item.afbeelding && <a rel="noopener noreferrer" target="_blank" href={item.website}><Img fluid={item.afbeelding.asset.fluid} alt={item.titel} loading="lazy" /></a>}
                    <div className={styles.info}>
                      {item.samenwerking && <div className={styles.samenwerking}>
                        <div><img src={cmspecialistLogo} alt="CM Specialist" width="39px" height="39px" /></div>
                        <div><span className="klein">Samenwerking</span><strong>CM Specialist</strong></div></div>
                      }
                      <div className={styles.links}>
                        {item.website && <Button title="Website" subtitle="Bekijken" icoon={<FaAngleDoubleRight/>} url={item.website} external/>}
                        {item.github && <Button title="Source" subtitle="Bekijken" icoon={<FaCode/>} url={item.github} external/>}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
          <section>
            <div className="inhoud" style={{textAlign: 'center'}}>
              <h3>Open Source project</h3>
              <p>met meeste contributors</p>
              <Github  />
            </div>
          </section>
          <footer>
            <div className="inhoud">            
              <div className="tel">{telefoonnummer}</div>
              <p>Of toch eerst <a href="https://www.google.com/search?q=site%3Acmspecialist.nl+%22Nick+Spaargaren%22" rel="noopener noreferrer" target="_blank">meer projecten</a> zien?</p>
            </div>
          </footer>
        </Layout>
        )
}

export default Portfolio