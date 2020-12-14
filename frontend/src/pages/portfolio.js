import React from "react"
import Layout from "../layout/layout"

import Img from "gatsby-image"

import styles from '../styles/portfolio.module.css';
import Nav from "../components/navigatie/Nav";

import cmspecialistLogo from '../data/images/logo-cm-specialist.png'
import { FaAngleDoubleRight, FaCode } from 'react-icons/fa';

import {useSiteMetadata} from '../data/hooks/algemeen';
import {usePortfolioData} from "../data/hooks/portfolio";
import {useSkillsData} from "../data/hooks/skills";

import {Spring} from 'react-spring/renderprops'
import Button from "../components/button/Button";
import Github from "../components/github/Github";

const Portfolio = () => {

  const {portfolio} = usePortfolioData();
  const {skills} = useSkillsData();
  const {naam, functie, telfoonnummer} = useSiteMetadata();

  return (
        <Layout title={`Portfolio | ${naam}`} description={functie} noindex>
          <header>
              <Spring config={{ tension: 280, friction: 60 }} from={{ opacity: 0, transform: 'translateY(-20px) scale(0.85)' }} to={{ opacity: 1, transform: 'translateY(0px) scale(1.0)' }}>
                {style => (
                  <div style={style} className="inhoud">
                  <Nav />
                  </div>
                )}
              </Spring>  
            <div className="inhoud">
              <div className="grid-2x">
                <div>
                <h1>Welkom, ik ben <strong style={{whiteSpace: 'nowrap'}}>{naam}</strong></h1>
                  <p>{functie}</p>
                </div>
                <div className={styles.skills}>
                  {skills.nodes.map((item, key) => (
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
                  ))}
              </div>
              </div>
            </div>
          </header>
          <div className={styles.portfolio}>
          {portfolio.nodes.map((item, key) =>
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
              <h3>Open source project</h3>
              <p>Met meeste contributers</p>
              <Github  />
            </div>
          </section>
          <footer>
            <div className="inhoud">            
              <div className="tel">{telfoonnummer}</div>
              <p>Of toch eerst <a href="https://www.google.com/search?q=site%3Acmspecialist.nl+%22Nick+Spaargaren%22" rel="noopener noreferrer" target="_blank">meer projecten</a> zien?</p>
            </div>
          </footer>
        </Layout>
        )
}

export default Portfolio