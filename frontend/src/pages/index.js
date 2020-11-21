import React from 'react';
import Layout from '../layout/layout';
import {Trail} from 'react-spring/renderprops'

import '../styles/index.css';
import styles from '../styles/styles.module.css';
import {SocialData} from '../components/socials/SocialData';

const Home = () => {

  return (
      <Layout title="Nick Spaargaren" description="Designer & Front-End Developer"> 
      <div className="sitehouder">
        <div className="inhoud">
          <div className="titel">
            <h1>Nick Spaargaren</h1>
            <h2>Designer & Front-End Developer</h2>
          </div>
          <div className={styles.houder}>
            <Trail items={SocialData} keys={social => social.id} from={{opacity: 0}} to={{opacity: 1}}>
              {social => props => 
                <a style={props} key={social.id} className={`${styles.blok} ${styles[social.class]}`} rel="noopener noreferrer" target="_blank" href={social.url}>
                  {social.icoon} 
                  <span><strong>{social.platform}</strong>Nick Spaargaren</span>
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