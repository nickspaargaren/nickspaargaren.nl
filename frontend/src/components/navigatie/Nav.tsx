import React from 'react';
import { Link } from "gatsby"
import Button from '../button/Button';

import {SocialData} from '../../data/socials/SocialData';
import {useSiteMetadata} from '../../data/hooks/algemeen';
import styled from 'styled-components';

const StyledNav = styled.div`

  background: #fff;
  color: #292a2c;
  box-shadow: rgba(0, 0, 0, .1) 0px 1px 2px 0px;
  display: flex;
  position: relative;

 > div {margin: auto 0; padding: 15px;}
 > div a {color: inherit; text-decoration: none;}
 > .info {display: flex;}
 > .info img {height: 37px; margin: auto 10px auto 0; border-radius: 50px;}

 .social {display: grid; grid-gap: 15px; grid-template-columns: 1fr 1fr 1fr 1fr; margin-left: auto;}

.switch {overflow: hidden; height: 17px;}
.switch > div {position: relative; top: 0; transition: .3s all ease;}

> .info:hover .switch > div {top: -17px;}

ul.menu {list-style: none; display: flex; margin: auto 0; background-color: #f1f1f1; border-radius: 4px; padding: 4px; font-size: 14px;}
ul.menu li {}
ul.menu li a {display: block; padding: 6px; color: #292a2c; text-decoration: none; font-weight: bold;}
ul.menu li a.active {background: #fff; border-radius: 4px; box-shadow: rgba(0, 0, 0, .1) 0px 1px 2px 0px;}


@media (max-width: 735px) {
  {flex-direction: column; padding: 0;}
  .social {margin: 0; grid-template-columns: 1fr 1fr; grid-gap: 5px;}
  > div {padding: 10px 10px 0;}
  > div:first-child {display: none;}
  > div:last-child {padding-bottom: 10px;}
}`;


const Nav = () => {

  const {naam, functie, email} = useSiteMetadata();

  return (
    <StyledNav>
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
        <li><Link activeClassName="active" to="/portfolio/">Portfolio</Link></li>
        <li><Link activeClassName="active" to="/drone/">Drone</Link></li>
      </ul>
      <div className="social">
        {SocialData.map((data, key) => 
          <Button key={key} title={data.platform} subtitle="Account" icoon={data.icoon} url={data.url} external/>
        )}
      </div>
    </StyledNav>

  )
}

export default Nav