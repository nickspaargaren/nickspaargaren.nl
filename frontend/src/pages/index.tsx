import React from "react"
import Layout from "../layout/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import {useSiteMetadata} from '../data/hooks/algemeen';

import {Spring} from 'react-spring/renderprops'
import Button from "../components/button/Button";
import Github from "../components/github/Github";

import {SocialData} from '../data/socials/SocialData';
import PortfolioItem from "../components/PortfolioItem";

import {SiAdobe, SiSketch, SiVisualstudiocode, SiMaterialdesignicons, SiCodeclimate, SiAirbnb, SiDevDotTo, SiOneplus, SiRaspberrypi, SiLinux, SiApple, SiAdobepremiere, SiXbox, SiNetflix, SiSpotify} from 'react-icons/si';

const Index = () => {

  const data = useStaticQuery(graphql`

    query {
      portfolio: allSanityPortfolio(sort: {fields: samenwerking, order: ASC}, limit: 3) {
        nodes {
          titel
          website
          tags
          id
          github
          beschrijving
          samenwerking
          afbeelding {
            asset {
              fluid(maxWidth: 1086, toFormat: WEBP) {
                base64
                aspectRatio
                src
                srcSet
                sizes
                srcSetWebp
                srcWebp
              }
            }
          }
          slug {
            current
          }
          skillsused {
            titel
            afbeelding {
              asset {
                fluid(maxWidth: 35, maxHeight: 35) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }

      skills: allSanitySkills(sort: {fields: percentage, order: DESC}) {
        nodes {
          id
          titel
          percentage
          afbeelding {
            asset {
              fluid(maxWidth: 35, maxHeight: 35) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }  
    `
  )
  
  const {naam, functie, telefoonnummer} = useSiteMetadata();

  return (
        <Layout title={`Portfolio | ${naam}`} description={functie} noindex>
          <header>
            <div className="grid-2x">
              <div className="links">
                <h1>Welkom, ik ben <strong style={{whiteSpace: 'nowrap'}}>{naam}</strong>. {functie}</h1>

                <div>
                  {SocialData.map((social, key) => 
                    <div key={key} >
                      <a rel="noopener noreferrer" target="_blank" href={social.url}>
                        {social.icoon} 
                        <span><strong>{social.platform}</strong></span>
                      </a>
                    </div>
                  )}
                </div>

              </div>
              <div className="rechts">
                <div className="skills">
                  {data.skills.nodes.map((item, key) => 
                    <div key={key} className="skill">
                      {item.afbeelding ? <Img fluid={item.afbeelding.asset.fluid} alt={item.titel} loading="lazy" /> : <img src="https://placehold.it/35x35" alt="placeholder"/>}
                      <div>
                        <div className="titel">
                          {item.titel}
                          <span>{item.percentage + '%'}</span>
                        </div>
                        <div className="percentage">
                          <Spring config={{ tension: 280, friction: 60, delay: 300 }} from={{ width: '0%' }} to={{ width: item.percentage + '%'}}>
                            {style => (
                              <div style={style} className="gevuld"></div>
                            )}
                          </Spring>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>
          <div className="inhoud">
            <div className="hgroup">
              <h2>Waar ik goed in ben</h2>
              <p>Ervaring en interesse</p>
            </div>
            <div className="grid-3x">
              <div>
                <SiMaterialdesignicons/><SiAdobe/><SiSketch/>
                <h4>Design</h4>
                <p>Minimaal 10 jaar <span className="calc">27 - 10 = 17 ✓</span> ervaring met vormgeving, design, fotobewerking en dtp.</p>
              </div>
              <div>
                <SiVisualstudiocode/><SiDevDotTo/>
                <h4>Develop</h4>
                <p>Front-end developer sinds 2013. Altijd zoekend naar nieuwe technieken waaronder op dit moment <i>Apollo en Graphql</i></p>
              </div>
              <div>
                <SiCodeclimate/><SiAirbnb/>
                <h4>Drone videography</h4>
                <p>Vakantie en activiteitenvideo's, promotievideo's / inzamelingsacties, luchtopnames. <Link to="/drone">Naar video's</Link></p>
              </div>
              <div>
                <SiOneplus/><SiApple/>
                <h4>Device rooting/jailbreakscene</h4>
                <p>Checkra1n, ADB debug, Unc0ver, Odin, Custom recoveries, TWRP, ClockwordMod, LineageOS, CarBridge</p>
              </div>
              <div>
                <SiRaspberrypi/><SiLinux/>
                <h4>Linux / Raspberry pi</h4>
                <p>Pi-hole, Homebrige, Unbound DNS, openVPN, Domoticz, Wireguard</p>
              </div>
              <div>
                <SiAdobe/><SiAdobepremiere/>
                <h4>Videobewerking</h4>
                <p>Premiere pro, Audacity, <span style={{ textDecoration: 'line-through' }}>Adobe Flash</span>, Proxies, GoPro timelapses</p>
              </div>
              <div>
                <SiXbox/><SiNetflix/><SiSpotify/>
                <h4>Overige</h4>
                <p>Xbox ambassador, iOS Dev Beta, PSP Custom Firmware, SONOS fan, Testflight</p>
              </div>
              
            </div>

          </div>
          <div className="inhoud">
          <div className="hgroup">
            <h2>Projecten</h2>
            <p>Ervaring en interesse</p>
          </div>
          {data.portfolio.nodes.map((item, key) => {
            return (
              <>
              <PortfolioItem key={key} titel={item.titel} beschrijving={item.beschrijving} slug={item.slug.current} afbeelding={item.afbeelding} skillsused={item.skillsused}/>

              {/* <div className="info">
                    {item.samenwerking && <div className="samenwerking">
                      <div><img src={`/images/logo-cm-specialist.png`} alt="CM Specialist" width="39px" height="39px" /></div>
                      <div><span className="klein">Samenwerking</span><strong>CM Specialist</strong></div></div>
                    }
                  </div> */}

            </>
            )
          }
             
            )}
          </div>
          <section>
            <div className="inhoud" style={{textAlign: 'center'}}>
              <h3>Open Source project</h3>
              <p>met meeste contributors</p>
              <Github  />
            </div>
          </section>
        </Layout>
        )
}

export default Index