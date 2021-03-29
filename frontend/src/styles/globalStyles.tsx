import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html,
  body {height: 100%;}

  body {margin: 0;
    color: #292a2c;
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

  h1, h2, h3 {margin: 0 0 10px;}
  h1 {font-size: 36px;}
  h2 {font-size: 30px;}
  h3 {font-size: 20px;}
  h4 {font-size: 18px; margin: 0 0 5px;}

  p {line-height: 1.5em; margin: 0 0 10px;}

  p a {color: #019bff;}

  .calc {display: inline-block; text-decoration: line-through; background: #d1d9e2; opacity: .5; padding: 0 7px; border-radius: 3px; font-size: 13px;}

  header {background: #221e25; color: #fff; clip-path: ellipse(100% 70% at 80% 30%);}
  header .links, header .rechts {padding: 20px;}
  header .links {}
  header .rechts {} 

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
    li svg {display: inline-block; vertical-align: middle; margin: 0;}
  }


  @media (max-width: 735px) {
    div[class*="grid"] {grid-gap: 15px !important;}
    header {clip-path: ellipse(100% 100% at 50% 50%);}
    header .links, header .rechts {padding: 40px 10px;}
    .inhoud {padding: 40px 10px;}
  }












.skills .skill {display: grid; grid-gap: 10px; grid-template-columns: 35px 1fr; margin: 0 0 10px;}
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

`;
 
export default GlobalStyle;