import Menu from "@src/components/navigation/Menu";
import User from "@src/components/User";
import { useSiteMetadata } from "@src/hooks/useSiteMetadata";
import { StaticImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  background: #fff;
  color: #292a2c;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  position: relative;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = (): ReactElement => {
  const { name, position } = useSiteMetadata();
  return (
    <StyledNav>
      <User
        title={name}
        subtitle={position}
        image={
          <StaticImage
            src="../../images/nick-spaargaren.jpeg"
            width={37}
            height={37}
            alt={`${"Profielfoto"} ${name}`}
          />
        }
      />
      <Menu />
    </StyledNav>
  );
};

export default Nav;
