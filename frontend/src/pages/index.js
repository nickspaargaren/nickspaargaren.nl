import React from 'react';
import Layout from '../layout/layout';
import {Trail} from 'react-spring/renderprops'

import '../styles/index.css';
import styles from '../styles/styles.module.css';

import { FaDribbble, FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Home() {

  const SocialList = [
    {id: 1, platform: 'Dribbble', class: styles.dribbble, icoon: <FaDribbble/>, link: 'https://dribbble.com/nickspaargaren'},
    {id: 2, platform: 'Github', class: styles.github, icoon: <FaGithub/>, link: 'https://github.com/nickspaargaren'},
    {id: 3, platform: 'Youtube', class: styles.youtube, icoon: <FaYoutube/>, link: 'https://www.youtube.com/watch?v=zDiSkH9PPJg&list=PLrZcPERRIctdZztCmNMHQ11aOne2yYOX3'},
    {id: 4, platform: 'Linkedin', class: styles.linkedin, icoon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/nickspaargaren'}
  ];

  return (
      <Layout> 
      <div className="sitehouder">
        <div className="inhoud">
          <div className="titel">
            <h1>Nick Spaargaren</h1>
            <h2>Designer & Front-End Developer</h2>
          </div>
          <div className={styles.houder}>
            <Trail items={SocialList} keys={social => social.id} from={{opacity: 0}} to={{opacity: 1}}>
              {social => props => 
                <a style={props} key={social.id} className={`${styles.blok} ${social.class}`} rel="noopener noreferrer" href={social.link} target="_blank" >
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