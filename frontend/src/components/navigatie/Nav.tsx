import React, {useEffect, useRef} from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import {useSiteMetadata} from '../../data/hooks/algemeen';
import styled from 'styled-components';

const StyledNav = styled.div`
  background: #fff;
  color: #292a2c;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 20px;
  box-shadow: 0 6px 35px -9px rgb(0 0 0 / 20%);

  > div {
    margin: auto 0;
  }
  > div a {
    color: inherit;
    text-decoration: none;
  }
  > .info {
    display: flex;
  }
  > .info .gatsby-image-wrapper {
    margin: auto 10px auto 0;
    border-radius: 50px;
  }

  .switch {
    overflow: hidden;
    height: 17px;
  }
  .switch > div {
    position: relative;
    top: 0;
    transition: 0.3s all ease;
  }

  > .info:hover .switch > div {
    top: -17px;
  }

  .menuHouder {
    margin: auto 0 auto auto;
    position: relative;
  }
  .menuHouder ul.menu {
    margin: 0;
    padding: 4px 0;
    background: #eee;
    border-radius: 50px;
    text-align: right;
    list-style: none;
    display: flex;
    position: relative;
    box-shadow: 0 2px 7px -1px rgb(0 0 0 / 15%) inset;
  }
  .menuHouder ul.menu li a {
    display: block;
    position: relative;
    margin: 0 5px;
    padding: 6px 12px;
    text-decoration: none;
    font-family: 'GilroyRegular';
    z-index: 2;
  }
  .menuHouder .hover {
    top: 4px;
    bottom: 4px;
    background: #fff;
    position: absolute;
    transition: 0.3s all cubic-bezier(0.65, 0.05, 0.36, 1);
    border-radius: 50px;
    z-index: 1;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    .menuHouder {
      margin: 10px 0 0;
    }
    .menuHouder ul.menu {
      justify-content: center;
    }
  }
`;

const Nav = () => {
  const {naam, functie, email} = useSiteMetadata();

  const hoverRef = useRef(null);

  const menuItemRef1 = useRef(null);
  const menuItemRef2 = useRef(null);
  const menuItemRef3 = useRef(null);

  const hover = e => {
    hoverRef.current.style.left = `${e.target.offsetLeft}px`;
    hoverRef.current.style.width = `${e.target.clientWidth}px`;
  };

  const leave = () => {
    if (menuItemRef1.current.classList.contains('active')) {
      hoverRef.current.style.left = `${menuItemRef1.current.offsetLeft}px`;
      hoverRef.current.style.width = `${menuItemRef1.current.clientWidth}px`;
    }
    if (menuItemRef2.current.classList.contains('active')) {
      hoverRef.current.style.left = `${menuItemRef2.current.offsetLeft}px`;
      hoverRef.current.style.width = `${menuItemRef2.current.clientWidth}px`;
    }
    if (menuItemRef3.current.classList.contains('active')) {
      hoverRef.current.style.left = `${menuItemRef3.current.offsetLeft}px`;
      hoverRef.current.style.width = `${menuItemRef3.current.clientWidth}px`;
    }
  };

  useEffect(() => {
    leave();
  });

  return (
    <StyledNav>
      <div className="info">
        <StaticImage
          src="../../images/nick-spaargaren.jpeg"
          width={37}
          height={37}
          alt={`${'Profielfoto'} ${naam}`}
        />
        <div>
          <strong>{naam}</strong>
          <div className="switch">
            <div className="klein">{functie}</div>
            <div className="klein">
              {' '}
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="menuHouder">
        <ul className="menu">
          <li>
            <Link
              activeClassName="active"
              onMouseEnter={hover}
              onMouseLeave={leave}
              ref={menuItemRef1}
              to="/portfolio/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              onMouseEnter={hover}
              onMouseLeave={leave}
              ref={menuItemRef2}
              to="/portfolio/projecten/"
            >
              Projecten
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              onMouseEnter={hover}
              onMouseLeave={leave}
              ref={menuItemRef3}
              to="/portfolio/drone/"
            >
              Drone
            </Link>
          </li>
        </ul>
        <div className="hover" ref={hoverRef}></div>
      </div>
    </StyledNav>
  );
};

export default Nav;
