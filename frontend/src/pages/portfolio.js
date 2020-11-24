import React from "react"
import Layout from "../layout/layout"

import Img from "gatsby-image"

import styles from '../styles/portfolio.module.css';
import Nav from "../components/navigatie/Nav";

import cmspecialistLogo from '../data/images/logo-cm-specialist.png'
import { FaGlobe, FaGithub } from 'react-icons/fa';

import {usePortfolioData} from "../data/hooks/portfolio";
import {useSkillsData} from "../data/hooks/skills";

import {Spring, config} from 'react-spring/renderprops'

const Portfolio = () => {

  const {portfolio} = usePortfolioData();
  const {skills} = useSkillsData();

  return (
        <Layout title="Portfolio | Nick Spaargaren" description="Designer & Front-End Developer" noindex>
          <header>
              <Spring config={{ tension: 280, friction: 60 }} from={{ opacity: 0, transform: 'translateY(-20px) scale(0.8)' }} to={{ opacity: 1, transform: 'translateY(0px) scale(1.0)' }}>
                {style => (
                  <div style={style} className="inhoud">
                  <Nav />
                  </div>
                )}
              </Spring>  
            <div className="inhoud">
              <div className="grid-2x">
                <div>
                  <h1>Welkom, ik ben <strong style={{whiteSpace: 'nowrap'}}>Nick Spaargaren</strong></h1>
                  <p>Designer & Front-End Developer</p>
                </div>
                <div class={styles.skills}>
                  {skills.nodes.map((item, key) => (
                    <div key={key} class={styles.skill}>
                      {item.afbeelding ? <Img fluid={item.afbeelding.asset.fluid} alt={item.titel} loading="lazy" /> : <img src="https://placehold.it/35x35"/>}
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
                  <div>
                    {item.afbeelding && <a rel="noopener noreferrer" target="_blank" href={item.website}><Img fluid={item.afbeelding.asset.fluid} alt={item.titel} loading="lazy" /></a>}
                    <div class={styles.info}>
                      {item.samenwerking && <div class={styles.samenwerking}><img src={cmspecialistLogo} alt="CM Specialist" width="39px" height="39px" /><div><span class="klein">Samenwerking</span><strong>CM Specialist</strong></div></div>}
                      <div class={styles.links}>
                        {item.website && <div><a rel="noopener noreferrer" target="_blank" href={item.website}><FaGlobe/></a></div>}
                        {item.github && <div><a rel="noopener noreferrer" target="_blank" href={item.github}><FaGithub/></a></div>}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </Layout>
        )
}

export default Portfolio