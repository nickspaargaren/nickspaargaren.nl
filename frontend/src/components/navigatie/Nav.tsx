import React from 'react';
import { Link } from "gatsby"
import Button from '../button/Button';

import {SocialData} from '../../data/socials/SocialData';
import {useSiteMetadata} from '../../data/hooks/algemeen';

const Nav = () => {

  const {naam, functie, email} = useSiteMetadata();

  return (
    <div className="bovenkant">
      <div className="info">
        <img src={'/images/nick-spaargaren.jpeg'} width="37px" height="37px" alt={`${"Profielfoto"} ${naam}`}/>
        <div>
          <strong>{naam}</strong>
          <div className="switch">
            <div className="klein">{functie}</div>
            <div className="klein"> <a href={`mailto:${email}`}>{email}</a></div>
          </div>
        </div>
      </div>
      <ul className="menu">
        <li><Link activeClassName="active" to="/">Home</Link></li>
        <li><Link activeClassName="active" to="/portfolio">Portfolio</Link></li>
        <li><Link activeClassName="active" to="/drone">Drone</Link></li>
      </ul>
      <div className="social">
        {SocialData.map((data, key) => 
          <Button key={key} title={data.platform} subtitle="Account" icoon={data.icoon} url={data.url} external/>
        )}
      </div>
    </div>

  )
}

export default Nav