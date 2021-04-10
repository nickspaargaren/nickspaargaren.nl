import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {useSiteMetadata} from '../../data/hooks/algemeen';
import styled from 'styled-components';

const StyledNav = styled.div`

  background: #fff;
  color: #292a2c;
  display: flex;
  position: sticky;
  top: 0; z-index: 1;
  padding: 20px;
  box-shadow: 0 6px 35px -9px rgb(0 0 0 / 20%);

 > div {margin: auto 0;}
 > div a {color: inherit; text-decoration: none;}
 > .info {display: flex;}
 > .info .gatsby-image-wrapper {margin: auto 10px auto 0;}
 > .info .gatsby-image-wrapper picture {border-radius: 50px;}

  .switch {overflow: hidden; height: 17px;}
  .switch > div {position: relative; top: 0; transition: .3s all ease;}

  > .info:hover .switch > div {top: -17px;}

  .menuKnop {margin: auto 0 auto auto; width: 30px; height: 30px; position: relative; cursor: pointer;}
  .menuKnop::after {content:""; position: absolute; z-index: 0; top: -10px; right: -10px; bottom: -10px; left: -10px; border-radius: 12px; transition: .3s all ease;}
  .menuKnop div {position: absolute; left: 0; right: 0; height: 4px; background-color: #221e25; transition: .3s all ease; border-radius: 3px; z-index: 1;}
  .menuKnop div.boven  {top: 0; transform: translateY(2px); opacity: .7}
  .menuKnop div.midden {top: 13px; opacity: .85}
  .menuKnop div.onder  {bottom: 0; transform: translateY(-2px);}
  
  .menuKnop:hover div.boven, .menuKnop:hover div.onder {right: 3px; left: 3px;}
  .menuKnop.open::after {background: #eee;}
  
  .menuKnop.open div.boven  {top: 13px; transform: rotate(-45deg);}
  .menuKnop.open div.midden {opacity: 0;}
  .menuKnop.open div.onder  {bottom: 13px; transform: rotate(225deg);}

  .menuHouder {display: flex; position: fixed; z-index: 1; pointer-events: none; transition: .3s all ease; opacity:0; top: 77px; left: 0; right: 0; border: 0; bottom: 0; background: #221e25;}
  .menuHouder.open {pointer-events: all; opacity: 1;}
  ul.menu {margin: auto 0 auto auto; padding: 20px; text-align: right; list-style: none; font-size: 30px;}
  ul.menu li a {display: block; position: relative; padding: 10px 0; margin: 0 10px; color: #fff; opacity:.7; text-decoration: none; font-weight: bold;}
  ul.menu li a.active {opacity: 1;}
`;

const Nav = () => {

  const [menu, setMenu] = useState({toggle: false, class: ''});

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
      <div className={`menuKnop ${menu.class}`} onClick={() => {
        if(menu.toggle === false) {
          setMenu({toggle: true, class: 'open'});
        } else {
          setMenu({toggle: false, class: ''});
        }
      }}>
        <div className="boven"></div>
        <div className="midden"></div>
        <div className="onder"></div>
      </div>
      <div className={`menuHouder ${menu.class}`}>
        <ul className="menu">
          <li><Link activeClassName="active" to="/portfolio/">Home</Link></li>
          <li><Link activeClassName="active" to="/portfolio/projecten/">Projecten</Link></li>
          <li><Link activeClassName="active" to="/portfolio/drone/">Drone</Link></li>
        </ul>
      </div>
    </StyledNav>

  )
}

export default Nav