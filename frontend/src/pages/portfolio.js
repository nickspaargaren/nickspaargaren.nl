import React from "react"
import Layout from "../layout/layout"

import Img from "gatsby-image"

import styles from '../styles/portfolio.module.css';
import Nav from "../components/navigatie/Nav";

import {usePortfolioData} from "../data/hooks/portfolio";
import {useSkillsData} from "../data/hooks/skills";


const Portfolio = () => {

  const {portfolio} = usePortfolioData();
  const {skills} = useSkillsData();

  return (
        <Layout title="Portfolio | Nick Spaargaren" description="Designer & Front-End Developer" noindex>
          <header>
            <Nav/>
            <div className={styles.inhoud}>
              <h1>Welkom, ik ben <strong>Nick Spaargaren</strong></h1>
              <p>Designer & Front-End Developer</p>
              {skills.nodes.map((item, key) => (
                <div key={key}>{item.titel}</div>
              ))}
            </div>
          </header>
          <div className={styles.portfolio}>
          {portfolio.nodes.map((item, key) =>
              <section key={key}>
                <div className={`${styles.item} ${styles.inhoud}`}> 
                  <div className={styles.beschrijving}>
                    <h2>{item.titel}</h2>
                    <p>{item.beschrijving}</p>
                    <div><a rel="noopener noreferrer" target="_blank" href={item.website}>{item.website}</a></div>
                    <div><a rel="noopener noreferrer" target="_blank" href={item.github}>{item.github}</a></div>

                    <ul className={styles.tags}>
                      {item.tags.map((tag, key) => 
                        <li key={key}>{tag}</li>
                      )}
                    </ul>

                  </div>
                  <a rel="noopener noreferrer" target="_blank" href={item.website}>
                    <Img fluid={item.afbeelding.asset.fluid} loading="lazy" />
                  </a>
                </div>
              </section>
            )}
          </div>
        </Layout>
        )
}

export default Portfolio