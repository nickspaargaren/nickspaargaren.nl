import { useSiteMetadata } from "@src/hooks/useSiteMetadata";
import { SocialData } from "@src/hooks/useSocialData";
import { motion } from "framer-motion";
import React, { ReactElement, useEffect, useRef } from "react";
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

.holder {display: grid; grid-gap: 10px; grid-template-columns: repeat(auto-fit, minmax(158px, 1fr)); max-width: 768px; margin: 0 auto;}

.holder a.block {transition: .3s all ease; color: inherit; text-decoration: none; white-space: nowrap; font-size: 30px; position: relative; padding: 20px; background: #fff; border-radius: 4px; box-shadow: 2px 2px 1px 2px rgba(0,0,0,.1);}

.holder a.block span {display: block; border-radius: 3px; white-space: nowrap; padding: 9px 11px; font-size: 12px; line-height: 1.25em; pointer-events: none; position: relative; margin-top: 10px; transition: .3s all ease; background: #aaa;}
.holder a.block span::before {border: solid; border-width: 0px 6px 6px 6px; top: -4px; content: ""; position: absolute; left: 50%; transform: translateX(-50%); transition: .3s all ease; border-color: #aaa transparent;}
.holder a.block span strong {display: block; font-size: 14px; text-transform: capitalize;}


.holder a.block.linkedin span {background: var(--linkedin-color-tint); color: var(--linkedin-color);}
.holder a.block.linkedin:hover span {background: var(--linkedin-color); color: #fff;}
.holder a.block.linkedin span::before {border-color: var(--linkedin-color-tint) transparent;}
.holder a.block.linkedin:hover span::before {border-color: var(--linkedin-color) transparent;}
.holder a.block.linkedin svg path {fill: var(--linkedin-color);}
.holder a.block.linkedin::before {content: ""; height: 13px; width: 13px; border-radius: 4px; top: -5px; position: absolute; right: -5px; background: #F54335; border: 2px solid rgba(255, 255, 255, 0.5); box-sizing: border-box;}

.holder a.block.github span {background: var(--github-color); color: #fff;}
.holder a.block.github span::before {border-color: var(--github-color) transparent;}
.holder a.block.github svg path {fill:var(--github-color);}

.holder a.block.youtube span {background: var(--youtube-color); color: #fff;}
.holder a.block.youtube span::before {border-color: var(--youtube-color) transparent;}
.holder a.block.youtube svg path {fill: var(--youtube-color);}

.holder a.block.dribbble span {background: var(--dribbble-color); color: #fff;}
.holder a.block.dribbble span::before {border-color: var(--dribbble-color) transparent;}
.holder a.block.dribbble svg path {fill: var(--dribbble-color);}
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
  const { name, position } = useSiteMetadata();

  const siteholderRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!siteholderRef.current) return;

    const canvas = siteholderRef.current;

    const { width, height } = canvas.getBoundingClientRect();
    const limit = 5;

    canvas.addEventListener("mousemove", (mousemove) => {
      const xWalk = (mousemove.x / width) * limit - limit / 2;
      const yWalk = (mousemove.y / height) * limit - limit / 2;

      socialsRef.current?.childNodes.forEach((block) => {
        block.style.boxShadow = `${xWalk}px ${yWalk}px 1px 2px rgba(0,0,0,.1)`;
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="nl" />
        <meta charSet="utf-8" />
        <title>Nick Spaargaren</title>
        <meta name="description" content="Designer & Front-End Developer" />
      </Helmet>
      <GlobalStyle />
      <div className="siteholder" ref={siteholderRef}>
        <div className="content" style={{ textAlign: "center", width: "100%" }}>
          <div className="title">
            <h1 style={{ fontSize: "2em" }}>{name}</h1>
            <h2>{position}</h2>
          </div>

          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
          >
            <div className="holder" ref={socialsRef}>
              {SocialData.map((social) => (
                <motion.a
                  variants={itemAnimation}
                  key={social.id}
                  className={`block ${social.class}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={social.url}
                  aria-label={`Nick's ${social.platform} account`}
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
