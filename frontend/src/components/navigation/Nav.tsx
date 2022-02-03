import React, { ReactElement } from "react";
import styled from "styled-components";
import Menu from "@src/components/navigation/Menu";
import User from "@src/components/User";
import { useSiteMetadata } from "@src/hooks/useSiteMetadata";
import { StaticImage } from "gatsby-plugin-image";

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

const Nav = (): ReactElement => {
  const { name, position, email } = useSiteMetadata();
  return (
    <StyledNav>
      <User
        title={name}
        subtitle={position}
        subtitleHover={email}
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
