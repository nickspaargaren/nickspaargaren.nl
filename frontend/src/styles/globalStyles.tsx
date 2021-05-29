import {createGlobalStyle} from 'styled-components';
import GilroyRegularWoff2 from '../fonts/Gilroy-Regular.woff2';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "GilroyRegular";
    src: url(${GilroyRegularWoff2});
  }

  html,
  body {height: 100%;}

  body {margin: 0;
    color: #333e52;
    font-size: 17px;
    -webkit-text-size-adjust: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
  }

  .sitehouder {display: flex; height: 100vh;}

  .inhoud {margin: 0 auto; padding: 40px; box-sizing: border-box; max-width: 1500px;}
  .inhoud svg {margin: 0 10px 5px 0;}

  .hgroup {margin-bottom: 40px;}

  h1, h2, h3, h4 {color: #292a2c; font-family: "GilroyRegular"; letter-spacing: .025em;}
  h1 {font-size: 36px; margin: 0 0 10px;}
  h2 {font-size: 30px; margin: 0 0 10px;}
  h3 {font-size: 20px; margin: 0 0 10px;}
  h4 {font-size: 18px; margin: 0 0 5px;}
  h5 {font-size: 16px; margin: 0 0 10px;}

  p {line-height: 1.5em; margin: 0 0 10px;}

  p a {color: #019bff;}

  .calc {display: inline-block; text-decoration: line-through; background: #d1d9e2; opacity: .5; padding: 0 7px; border-radius: 3px; font-size: 13px;}

  header {background: #221e25; color: #fff;}
  header .links, header .rechts {}
  header .links {display: flex; flex-direction: column;}
  header h1, 
  header h2, 
  header h3, 
  header h4 {color: inherit;} 

  .klein {font-size: 14px;}

  /* Grid Templates */
  div[class*="grid"] {display: grid; grid-gap: 30px; box-sizing: border-box;}
  div[class*="grid"].vertical-align-middle > div {margin: auto 0;}
  div[class*="grid"] img {max-width: 100%; height: auto !important;}
  .grid-2x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
  .grid-3x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
  .grid-4x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
  /* Einde Grid Templates */

  .bcrumbs {
    display: flex; list-style: none; margin: 0; padding: 0;
    li {margin-right: 5px;}
    li a {color: inherit; text-decoration: none;}
    li a:hover {text-decoration: underline;}
    li svg {display: inline-block; vertical-align: middle; margin: 0;}
  }

  hr {margin: 30px 0; border-color: rgba(255,255,255,.2);}

  @media (max-width: 735px) {
    div[class*="grid"] {grid-gap: 15px !important;}
    header {clip-path: ellipse(100% 100% at 50% 50%);}
    header .links, header .rechts {padding: 40px 10px;}
    .inhoud {padding: 40px 10px;}
  }





.skills {
  background: #18151a;
  color: #fff;
  padding: 30px;
  margin-bottom: -100px;
  box-shadow: 0 50px 75px -40px rgba(0, 0, 0,.6);
  position: relative;
  z-index: 0;
}
.skills .skill {display: grid; grid-gap: 10px; grid-template-columns: 35px 1fr 29px; margin: 0 0 10px; user-select: none;}
.skills .skill > div {margin: auto 0;}
.skills .skill .titel {
  display: flex;
  color: rgba(255,255,255,.6);
  margin-bottom: 4px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
}
.skills .skill .titel span {margin-left: auto;}

.skills .skill .percentage {
  height: 6px;
  background: rgba(255,255,255,.2);
  padding: 2px;
  border-radius: 10px;
}

.skills .skill .percentage .gevuld {
  background: #009bff;
  height: 100%;
  border-radius: inherit;}


.skills .skill .opties {}
.skills .skill .opties .icoon {cursor: pointer; background: #221e25; line-height: 0; margin: auto; padding: 6px; border-radius: 5px;}
.skills .skill .opties .icoon:hover {background: rgba(255,255,255,.2);}
.skills .skill .opties .icoon.actief {background: rgba(255,255,255,.2); color: #35ca88;}
.skills .skill .opties .icoon svg {margin: 0;}

.skills .tags {margin: 0 0 15px; padding: 0;}
.skills .tags .tag {
  display: inline-flex;
  background: #221e25;
  padding: 5px 7px;
  border-radius: 3px;
  font-size: 13px;
  margin: 0 5px 5px 0;
  }
.skills .tags .tag svg {margin: auto 5px auto 0; fill: #35ca88;}
.skills .tags .tag.reset {cursor: pointer;}
.skills .tags .tag.reset:hover {background: rgba(255,255,255,.2);}
.skills .tags .tag.reset svg {fill: #f13f30;}

.skills .skillTitel {font-size: 30px; font-family: "GilroyRegular"; letter-spacing: .025em; margin: 0 0 20px; position: relative; color: #fff; font-weight: bold;}
.skills .skillTitel::before {content: ""; background: #fff; height: 2px; left: 0; right: 13px; position: absolute; bottom: 15px; z-index: 0;}
.skills .skillTitel::after {content: ""; background: #fff; width: 2px; bottom: 0; height: 15px; position: absolute; right: 13px;}
.skills .skillTitel span {background: #18151a; z-index: 1; position: relative; padding-right: 20px; margin-right: 20px;}



`;

export default GlobalStyle;
