import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import User from '../User';
import {useSiteMetadata} from '../../data/hooks/algemeen';
import {StaticImage} from 'gatsby-plugin-image';

const StyledNav = styled.div`
  background: #fff;
  color: #292a2c;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  position: relative;
  padding: 20px;
  box-shadow: 0 6px 35px -9px rgb(0 0 0 / 20%);

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = () => {
  const {naam, functie, email} = useSiteMetadata();
  return (
    <StyledNav>
      <User
        title={naam}
        subtitle={functie}
        subtitleHover={email}
        image={
          <StaticImage
            src="../../images/nick-spaargaren.jpeg"
            width={37}
            height={37}
            alt={`${'Profielfoto'} ${naam}`}
          />
        }
      />
      <Menu />
    </StyledNav>
  );
};

export default Nav;
