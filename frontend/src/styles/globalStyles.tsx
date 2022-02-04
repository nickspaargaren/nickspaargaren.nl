import { createGlobalStyle } from "styled-components";

import ArticulatCFBold from "../fonts/ArticulatCF-Bold.woff";
import ArticulatCFBold2 from "../fonts/ArticulatCF-Bold.woff2";
import ArticulatCFDemiBold from "../fonts/ArticulatCF-DemiBold.woff";
import ArticulatCFDemiBold2 from "../fonts/ArticulatCF-DemiBold.woff2";
import ArticulatCFMedium from "../fonts/ArticulatCF-Medium.woff";
import ArticulatCFMedium2 from "../fonts/ArticulatCF-Medium.woff2";
import ArticulatCFNormal from "../fonts/ArticulatCF-Normal.woff";
import ArticulatCFNormal2 from "../fonts/ArticulatCF-Normal.woff2";

const GlobalStyle = createGlobalStyle`

  @font-face {
      font-display: swap;
      font-family: Articulat CF;
      font-style: normal;
      font-weight: 400;
      src: url(${ArticulatCFNormal2}) format("woff2"), url(${ArticulatCFNormal}) format("woff")
  }

  @font-face {
      font-display: swap;
      font-family: Articulat CF;
      font-style: normal;
      font-weight: 500;
      src: url(${ArticulatCFMedium2}) format("woff2"), url(${ArticulatCFMedium}) format("woff")
  }

  @font-face {
      font-display: swap;
      font-family: Articulat CF;
      font-style: normal;
      font-weight: 600;
      src: url(${ArticulatCFDemiBold2}) format("woff2"), url(${ArticulatCFDemiBold}) format("woff")
  }

  @font-face {
      font-display: swap;
      font-family: Articulat CF;
      font-style: normal;
      font-weight: 700;
      src: url(${ArticulatCFBold2}) format("woff2"), url(${ArticulatCFBold}) format("woff")
  }


  html,
  body {height: 100%;}

  body {
    margin: 0;
    color: #2e3239;
    font-size: 17px;
    font-weight: 400;
    font-family: "Articulat CF", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: #fff;
    line-height: 1.25em;
  }

  .sitehouder {display: flex; height: 100vh;}

  section {border-bottom: 1px solid #e6e6e6;}
  section.full {min-height: 100vh; display: flex;}
  section.full .inhoud {margin: auto;}
  section.full .inhoud .hgroup {text-align: center;}

  .inhoud {margin: 0 auto; padding: 40px; box-sizing: border-box; max-width: 1500px;}
  .inhoud svg {margin: 0 10px 5px 0;}

  .hgroup {margin-bottom: 40px;}

  h1, h2, h3, h4 {color: #292a2c; font-family: "Articulat CF"; line-height: 1.25em;}
  h1 {font-size: 36px; margin: 0 0 10px; font-weight: 700;}
  h2 {font-size: 24px; margin: 0 0 10px; font-weight: 600;}
  h3 {font-size: 20px; margin: 0 0 10px; font-weight: 600;}
  h4 {font-size: 18px; margin: 0 0 5px; font-weight: 500;}
  h5 {font-size: 16px; margin: 0 0 10px; font-weight: 400;}

  p {line-height: 1.5em; margin: 0 0 10px;}

  p a {color: #019bff;}

  .calc {display: inline-block; text-decoration: line-through; background: #d1d9e2; opacity: .5; padding: 0 7px; border-radius: 3px; font-size: 13px;}

  header {
    background: #221e25; color: #fff; overflow: hidden;
  }

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

  hr {margin: 30px 0; border-color: rgba(255,255,255,.2);}

  @media (max-width: 735px) {
    div[class*="grid"] {grid-gap: 15px !important;}
    .inhoud {padding: 40px 10px;}
  }

`;

export default GlobalStyle;
