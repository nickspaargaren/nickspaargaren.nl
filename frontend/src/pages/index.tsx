import Button from "@src/components/Button";
import { useSiteMetadata } from "@src/hooks/useSiteMetadata";
import React, { ReactElement, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { FaEnvelopeOpen } from "react-icons/fa";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --github-color: #292a2c;
  --github-color-tint: #e9e9e9;
  --youtube-color: #ff0200;
  --youtube-color-tint: #ffe9e8;
  --linkedin-color: #2578b5;
  --linkedin-color-tint: #e7f2f7;
}

html,
body {height: 100%;}

body {
  margin: 0;
  color: #292a2c;
  font-size: 17px;
  -webkit-text-size-adjust: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fbfbfb;
}

.siteholder {display: flex; height: 100vh;}

.siteholder .content {margin: auto; padding: 40px; box-sizing: border-box; max-width: 1200px;}
.siteholder .content .title {margin-bottom: 30px;}
.siteholder .content .title h1 {margin: 0 0 10px;}
.siteholder .content .title h2 {margin: 0 0 10px; font-weight: normal; font-size: 1em;}
.siteholder .content .title h1 + h2 {margin-top: -10px; opacity: .7;}


p {line-height: 1.5em; margin: 0 0 10px;}


.small {font-size: 14px;}

/* Grid Templates */
div[class*="grid"] {hyphens: auto; -webkit-hyphens: auto; display: grid; grid-gap: 30px; box-sizing: border-box;}
div[class*="grid"].vertical-align-middle > div {margin: auto 0;}
div[class*="grid"] img {max-width: 100%; height: auto !important;}
.grid-2x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
.grid-3x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
.grid-4x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
/* End Grid Templates */


@media (max-width: 735px) {
  div[class*="grid"] {grid-gap: 15px !important;}
  .content {padding: 40px 10px;}
}

`;

const containerAnimation = {
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Home = (): ReactElement => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="nl" />
        <meta charSet="utf-8" />
        <title>{siteMetadata?.name}</title>
        <meta name="description" content={siteMetadata?.position || ""} />
      </Helmet>
      <GlobalStyle />
      <div className="siteholder">
        <div className="content" style={{ textAlign: "center", width: "100%" }}>
          <div className="title">
            <h1 style={{ fontSize: "2em" }}>{siteMetadata?.name}</h1>
            <h2>{siteMetadata?.position}</h2>
            <div style={{ marginTop: "20px" }}>
              <Button
                url={`mailto:${siteMetadata?.email}`}
                title="Contact"
                subtitle="Send me mail"
                icon={<FaEnvelopeOpen />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
