import React from 'react';
import styles from './nav.module.css';
import { Link } from "gatsby"
import profielfoto from '../../assets/images/nick-spaargaren.jpeg';

import {SocialData} from '../socials/SocialData';

const Nav = () => {
  return (
    <div className={styles.bovenkant}>
      <div><Link to="/">Terug</Link></div>
      <div className={styles.info}>
      <img src={profielfoto} alt="Nick Spaargaren"/>
      <div>
        <strong>Nick Spaargaren</strong>
        <div className={styles.klein}>Designer & Front-End Developer</div>
      </div>
      </div>
      <div className={styles.social}>
        {SocialData.map((data, key) => (
          <a key={key} href={data.url} rel="noopener noreferrer" target="_blank">
            {data.icoon}
            <span>
            <strong>{data.platform}</strong>
            Account
            </span>
          </a>
        ))}
      </div>

    </div>

  )
}

export default Nav