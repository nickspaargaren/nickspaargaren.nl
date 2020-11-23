import React from 'react';
import Layout from '../layout/layout';
import {Trail} from 'react-spring/renderprops'

import styles from '../styles/styles.module.css';
import {SocialData} from '../data/socials/SocialData';
import {useSiteMetadata} from '../data/hooks/algemeen';

const Home = () => {

  const {naam, functie} = useSiteMetadata();

  return (
      <Layout title="Nick Spaargaren" description="Designer & Front-End Developer"> 
      <div className="sitehouder">
        <div className="inhoud" style={{textAlign: 'center', width: '100%'}}>
          <div className="titel">
            <h1>{naam}</h1>
            <h2>{functie}</h2>
          </div>
          <div className={styles.houder}>
            <Trail items={SocialData} keys={social => social.id} from={{opacity: 0}} to={{opacity: 1}}>
              {social => props => 
                <a style={props} key={social.id} className={`${styles.blok} ${styles[social.class]}`} rel="noopener noreferrer" target="_blank" href={social.url}>
                  {social.icoon} 
                  <span><strong>{social.platform}</strong>{naam}</span>
                </a>
              }
            </Trail>
          </div>
        </div>
      </div>
      </Layout>
  )
}

export default Home