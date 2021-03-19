import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {useSiteMetadata} from '../../data/hooks/algemeen';
import styled from 'styled-components';

const StyledNav = styled.div`

  background: #fff;
  color: #292a2c;
  display: flex;
  position: relative;
  padding: 15px;

 > div {margin: auto 0;}
 > div a {color: inherit; text-decoration: none;}
 > .info {display: flex;}
 > .info .gatsby-image-wrapper {margin: auto 10px auto 0; border-radius: 50px;}

  .switch {overflow: hidden; height: 17px;}
  .switch > div {position: relative; top: 0; transition: .3s all ease;}

  > .info:hover .switch > div {top: -17px;}

  ul.menu {list-style: none; display: flex; margin: auto 0 auto auto;}
  ul.menu li {}
  ul.menu li a {display: block; position: relative; padding: 10px 0; margin: 0 10px; color: #292a2c; text-decoration: none; font-weight: bold;}
  ul.menu li a.active {&::after {content:""; position: absolute; left: 0; bottom: 0; right: 0; height: 3px; background-color: #019bff; border-radius: 13px; transform: rotate(-1deg) }}

`;

const Nav = () => {

  const {naam, functie, email} = useSiteMetadata();

  return (
    <StyledNav>
      <div className="info">
        <StaticImage src="../../images/nick-spaargaren.jpeg" width={37} height={37} alt={`${"Profielfoto"} ${naam}`}/>
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
    </StyledNav>

  )
}

export default Nav