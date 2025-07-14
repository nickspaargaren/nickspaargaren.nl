import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledvierNulVier = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;

  color: #292a2c;
  font-size: 17px;
  -webkit-text-size-adjust: 100%;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fbfbfb;

  div {
    margin: auto;
  }
`;

const vierNulVier = () => (
  <>
    <Helmet>
      <html lang="nl" />
      <meta charSet="utf-8" />
      <title>Nick Spaargaren | 404</title>
      <meta name="description" content="404" />
    </Helmet>
    <StyledvierNulVier>
      <div className="inhoud">404</div>
    </StyledvierNulVier>
  </>
);
export default vierNulVier;
