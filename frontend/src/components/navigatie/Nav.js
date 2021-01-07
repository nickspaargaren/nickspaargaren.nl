import React from 'react';
import styles from './nav.module.css';
import { Link } from "gatsby"
import profielfoto from '../../data/images/nick-spaargaren.jpeg';
import Button from '../button/Button';

import {SocialData} from '../../data/socials/SocialData';
import {useSiteMetadata} from '../../data/hooks/algemeen';

const Nav = () => {

  const {naam, functie, email} = useSiteMetadata();

  return (
    <div className={styles.bovenkant}>
      <div><Link to="/">Terug</Link></div>
      <div className={styles.info}>
      <img src={profielfoto} width="37px" height="37px" alt={`${"Profielfoto"} ${naam}`}/>
      <div>
        <strong>{naam}</strong>
        <div className={styles.switch}>
          <div className="klein">{functie}</div>
          <div className="klein"> <a href={`mailto:${email}`}>{email}</a></div>
        </div>
      </div>
      </div>
      <div className={styles.social}>
        {SocialData.map((data, key) => (
          <Button key={key} title={data.platform} subtitle="Account" icoon={data.icoon} url={data.url} external/>
        ))}
      </div>
    </div>

  )
}

export default Nav