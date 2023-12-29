import Menu from "@src/components/navigation/Menu";
import User from "@src/components/User";
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
  return (
    <StyledNav>
      <User />
      <Menu />
    </StyledNav>
  );
};

export default Nav;
