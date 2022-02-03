import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { useSocialData } from "@src/hooks/useSocialData";
import { useSiteMetadata } from "@src/hooks/useSiteMetadata";
import { Helmet } from "react-helmet";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --dribbble-color: #ea4c89;
  --dribbble-color-tint: #fdedf3;
  --github-color: #292a2c;
  --github-color-tint: #e9e9e9;
  --youtube-color: #ff0200;
  --youtube-color-tint: #ffe9e8;
  --linkedin-color: #2578b5;
  --linkedin-color-tint: #e7f2f7;
}

html,
body {height: 100%;}

body {margin: 0;
  color: #292a2c;
  font-size: 17px;
  -webkit-text-size-adjust: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fbfbfb;
}

.sitehouder {display: flex; height: 100vh;}

.sitehouder .inhoud {margin: auto; padding: 40px; box-sizing: border-box; max-width: 1200px;}
.sitehouder .inhoud .title {margin-bottom: 30px;}
.sitehouder .inhoud .title h1 {margin: 0 0 10px;}
.sitehouder .inhoud .title h2 {margin: 0 0 10px; font-weight: normal; font-size: 1em;}
.sitehouder .inhoud .title h1 + h2 {margin-top: -10px; opacity: .7;}


p {line-height: 1.5em; margin: 0 0 10px;}


.klein {font-size: 14px;}

/* Grid Templates */
div[class*="grid"] {hyphens: auto; -webkit-hyphens: auto; display: grid; grid-gap: 30px; box-sizing: border-box;}
div[class*="grid"].vertical-align-middle > div {margin: auto 0;}
div[class*="grid"] img {max-width: 100%; height: auto !important;}
.grid-2x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
.grid-3x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
.grid-4x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
/* Einde Grid Templates */


@media (max-width: 735px) {
  div[class*="grid"] {grid-gap: 15px !important;}
  .inhoud {padding: 40px 10px;}
}

.houder {display: grid; grid-gap: 10px; grid-template-columns: repeat(auto-fit, minmax(158px, 1fr)); max-width: 768px; margin: 0 auto;}

.houder a.blok {transition: .3s all ease; color: inherit; text-decoration: none; white-space: nowrap; font-size: 30px; position: relative; padding: 20px; background: #fff; border-radius: 4px; box-shadow: 2px 2px 1px 2px rgba(0,0,0,.1);}

.houder a.blok span {display: block; border-radius: 3px; white-space: nowrap; padding: 9px 11px; font-size: 12px; line-height: 1.25em; pointer-events: none; position: relative; margin-top: 10px; transition: .3s all ease; background: #aaa;}
.houder a.blok span::before {border: solid; border-width: 0px 6px 6px 6px; top: -4px; content: ""; position: absolute; left: 50%; transform: translateX(-50%); transition: .3s all ease; border-color: #aaa transparent;}
.houder a.blok span strong {display: block; font-size: 14px; text-transform: capitalize;}


.houder a.blok.linkedin span {background: var(--linkedin-color-tint); color: var(--linkedin-color);}
.houder a.blok.linkedin:hover span {background: var(--linkedin-color); color: #fff;}
.houder a.blok.linkedin span::before {border-color: var(--linkedin-color-tint) transparent;}
.houder a.blok.linkedin:hover span::before {border-color: var(--linkedin-color) transparent;}
.houder a.blok.linkedin svg path {fill: var(--linkedin-color);}
.houder a.blok.linkedin::before {content: ""; height: 13px; width: 13px; border-radius: 4px; top: -5px; position: absolute; right: -5px; background: #F54335; border: 2px solid rgba(255, 255, 255, 0.5); box-sizing: border-box;}

.houder a.blok.github span {background: var(--github-color); color: #fff;}
.houder a.blok.github span::before {border-color: var(--github-color) transparent;}
.houder a.blok.github svg path {fill:var(--github-color);}

.houder a.blok.youtube span {background: var(--youtube-color); color: #fff;}
.houder a.blok.youtube span::before {border-color: var(--youtube-color) transparent;}
.houder a.blok.youtube svg path {fill: var(--youtube-color);}

.houder a.blok.dribbble span {background: var(--dribbble-color); color: #fff;}
.houder a.blok.dribbble span::before {border-color: var(--dribbble-color) transparent;}
.houder a.blok.dribbble svg path {fill: var(--dribbble-color);}
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

const Home = () => {
  const { name, position } = useSiteMetadata();
  const SocialData = useSocialData();

  const sitehouderRef = useRef<HTMLDivElement>(null);
  const blokRef = useRef<HTMLAnchorElement>(null);
  const limiet = 5;

  useEffect(() => {
    const canvas = sitehouderRef.current?.getBoundingClientRect();

    const width = canvas?.width || 0;
    const height = canvas?.height || 0;

    sitehouderRef.current?.addEventListener("mousemove", (e) => {
      const xWalk = (e.x / width) * limiet - limiet / 2;
      const yWalk = (e.y / height) * limiet - limiet / 2;

      document.querySelectorAll("a.blok").forEach((el) => {
        el.style.boxShadow = `${xWalk}px ${yWalk}px 1px 2px rgba(0,0,0,.1)`;
      });
    });
  }, [sitehouderRef]);

  return (
    <>
      <Helmet>
        <html lang="nl" />
        <meta charSet="utf-8" />
        <title>Nick Spaargaren</title>
        <meta name="description" content="Designer & Front-End Developer" />
      </Helmet>
      <GlobalStyle />
      <div className="sitehouder" ref={sitehouderRef}>
        <div className="inhoud" style={{ textAlign: "center", width: "100%" }}>
          <div className="title">
            <h1 style={{ fontSize: "2em" }}>{name}</h1>
            <h2>{position}</h2>
          </div>

          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
          >
            <div className="houder">
              {SocialData.map((social) => (
                <motion.a
                  variants={itemAnimation}
                  key={social.id}
                  className={`blok ${social.class}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={social.url}
                  ref={blokRef}
                >
                  {social.icon}
                  <span>
                    <strong>{social.platform}</strong>
                    {name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
