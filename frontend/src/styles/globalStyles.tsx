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

  .inhoud {margin: auto; padding: 40px; box-sizing: border-box; max-width: 1500px;}
  .inhoud .titel {margin-bottom: 30px;}
  .inhoud .titel h1 {margin: 0 0 10px;}
  .inhoud .titel h2 {margin: 0 0 10px; font-weight: normal; font-size: 1em;}
  .inhoud .titel h1 + h2 {margin-top: -10px; opacity: .7;}

  h1, h2, h3 {margin: 0 0 10px;}
  h1 {font-size: 40px;}
  h1 + p {margin-top: -10px;}
  h2 {font-size: 30px;}
  h3 {font-size: 20px;}
  h3 + p {margin-top: -10px;}

  p {line-height: 1.5em; margin: 0 0 10px;}

  header .links, header .rechts {padding: 100px;}
  header .links {background: #d0d9e2;}
  header .rechts {background: #221e25;} 

  footer {background: #221e25; color: rgba(255,255,255,.6); text-align: center;}
  footer a {color: #fff;}
  footer .tel {font-size: 25px; font-weight: bold; color: #fff; margin: 0 0 10px;}
  footer .tel + p {margin-top: -10px;}

  .klein {font-size: 14px;}

  /* Grid Templates */
  div[class*="grid"] {hyphens: auto; -webkit-hyphens: auto; display: grid; grid-gap: 30px; box-sizing: border-box;}
  div[class*="grid"].vertical-align-middle > div {margin: auto 0;}
  div[class*="grid"] img {max-width: 100%; height: auto !important;}
  .grid-2x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
  .grid-3x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
  .grid-4x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
  /* Einde Grid Templates */

  .bcrumbs {
    display: flex; list-style: none; margin: 0; padding: 0;
    li {margin-right: 5px;}
    li svg {display: inline-block; vertical-align: middle;}
  }


  @media (max-width: 735px) {
    div[class*="grid"] {grid-gap: 15px !important;}
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

.portfolio section {border-bottom: 1px solid #eee; background: linear-gradient(rgba(248, 248, 248, 0), rgba(248, 248, 248, 1));}
.portfolio section .item .beschrijving {margin: auto 0;}
.portfolio section .item .beschrijving ul.tags {list-style: none; margin: 0; padding: 0; display: flex;}
.portfolio section .item .beschrijving ul.tags li {
  display: inline-block;
  padding: 7px 10px;
  text-transform: uppercase;
  border: 1px solid;
  font-size: 10px;
  font-weight: bold;
  color: #009bff;
  margin: 10px 10px 0 0;
  border-radius: 3px;
}
.portfolio section .item .plaatje {}
.portfolio section .item .plaatje img {}
.portfolio section .item .plaatje .info {display: flex; padding: 10px 15px; min-height: 40px; background: #fff; box-shadow: rgba(0, 0, 0, .1) 0px 1px 2px 0px;}
.portfolio section .item .plaatje .info .samenwerking {display: flex; margin-right: auto;}
.portfolio section .item .plaatje .info .samenwerking div {margin: auto 0;}
.portfolio section .item .plaatje .info .samenwerking div img {display: block; margin-right: 10px; border-radius: 2px;}
.portfolio section .item .plaatje .info .samenwerking div strong {display: block;}
.portfolio section .item .plaatje .info .links {display: flex; margin-left: auto;}
.portfolio section .item .plaatje .info .links > * {margin-left: 15px;}





.button {
  position: relative;
  display: inline-flex;
  line-height: 10px;
  background: #f1f1f1;
  padding: 5px 8px 5px 7px;
  border-radius: 3px;
  transition: .3s all ease;
  box-shadow: rgba(0, 0, 0, .1) 0px 1px 2px 0px inset;
  color: inherit; text-decoration: none;
  margin: auto 0;
}

.button:hover {background: #221e25; color: #fff;}

.button strong {display: block;}
.button svg {margin: auto 0;}
.button span {
  display: inline-block;
  margin: auto 0 auto 5px;
  position: relative;
  text-transform: uppercase;
  font-size: 8px;
  white-space: nowrap;
}
.button span strong {font-size: 10px; opacity: .9; letter-spacing: .15px;}



.bovenkant {
  background: #fff;
  color: #292a2c;
  box-shadow: rgba(0, 0, 0, .1) 0px 1px 2px 0px;
  display: flex;
  position: relative;
}
.bovenkant > div {margin: auto 0; padding: 15px;}
.bovenkant > div a {color: inherit; text-decoration: none;}
.bovenkant > .info {display: flex;}
.bovenkant > .info img {height: 37px; margin: auto 10px auto 0; border-radius: 50px;}

.bovenkant .social {display: grid; grid-gap: 15px; grid-template-columns: 1fr 1fr 1fr 1fr; margin-left: auto;}

.switch {overflow: hidden; height: 17px;}
.switch > div {position: relative; top: 0; transition: .3s all ease;}
.bovenkant:hover .switch > div {top: -17px;}

ul.menu {list-style: none; display: flex; margin: auto 0;}
ul.menu li {padding: 10px;}
@media (max-width: 735px) {
  .bovenkant {flex-direction: column; padding: 0;}
  .bovenkant .social {margin: 0; grid-template-columns: 1fr 1fr; grid-gap: 5px;}
  .bovenkant > div {padding: 10px 10px 0;}
  .bovenkant > div:first-child {display: none;}
  .bovenkant > div:last-child {padding-bottom: 10px;}
}



.github {
  display: inline-block;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  text-align: left;
}

.github .titel {font-weight: 600; line-height: 1.25em;}

.github p {font-size: 15px; color: #586069;}
.github p a {color: #0366d6; text-decoration: none;}

.github small {display: flex;}
.github small span {display: inline-flex; margin-right: 10px;}
.github small span svg {margin: auto 3px auto 0;}
.github small span.stars svg {fill: #f1e05b;}
`;
 
export default GlobalStyle;