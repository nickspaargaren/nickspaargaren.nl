import React from 'react';
import Layout from '../../layout/layout';
import {useStaticQuery, graphql, Link} from 'gatsby';

import {useSiteMetadata} from '../../data/hooks/algemeen';

import Github from '../../components/github/Github';

import PortfolioItem from '../../components/PortfolioItem';

import {
  SiAdobe,
  SiSketch,
  SiVisualstudiocode,
  SiMaterialdesignicons,
  SiCodeclimate,
  SiAirbnb,
  SiDevDotTo,
  SiOneplus,
  SiRaspberrypi,
  SiLinux,
  SiApple,
  SiAdobepremiere,
  SiXbox,
  SiNetflix,
  SiSpotify,
} from 'react-icons/si';
import Skills from '../../components/Skills';

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      portfolio: allSanityPortfolio(
        sort: {fields: samenwerking, order: ASC}
        limit: 3
      ) {
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
              gatsbyImageData
            }
          }
          slug {
            current
          }
          skillsused {
            titel
            afbeelding {
              asset {
                gatsbyImageData(width: 37)
              }
            }
          }
        }
      }
    }
  `);

  const {naam, functie} = useSiteMetadata();

  return (
    <Layout title={`Portfolio | ${naam}`} description={functie} noindex>
      <header>
        <div className="inhoud">
          <div className="grid-2x">
            <div className="links">
              <h1 style={{margin: 'auto 0 0'}}>{functie}</h1>
              <p>{naam}</p>
            </div>
            <div className="rechts">
              <Skills />
            </div>
          </div>
        </div>
      </header>
      <div className="inhoud">
        <div className="hgroup">
          <h2 style={{margin: 0}}>Waar ik goed in ben</h2>
          <p>Ervaring en interesse</p>
        </div>
        <div className="grid-3x">
          <div>
            <SiMaterialdesignicons />
            <SiAdobe />
            <SiSketch />
            <h4>Design</h4>
            <p>
              Meer dan 10 jaar <span className="calc">27 - 10 = 17 ✓</span>{' '}
              ervaring met vormgeving, design, fotobewerking en dtp.
            </p>
          </div>
          <div>
            <SiVisualstudiocode />
            <SiDevDotTo />
            <h4>Develop</h4>
            <p>
              Front-end developer sinds 2013. Altijd zoekend naar nieuwe
              technieken waaronder op dit moment <i>Apollo en Graphql</i>
            </p>
          </div>
          <div>
            <SiCodeclimate />
            <SiAirbnb />
            <h4>Drone videography</h4>
            <p>
              Vakantie en activiteitenvideo's, promotievideo's /
              inzamelingsacties, luchtopnames.{' '}
              <Link to="/portfolio/drone">Naar video's</Link>
            </p>
          </div>
          <div>
            <SiOneplus />
            <SiApple />
            <h4>Device rooting/jailbreakscene</h4>
            <p>
              Checkra1n, ADB debug, Unc0ver, Odin, Custom recoveries, TWRP,
              ClockwordMod, LineageOS, CarBridge
            </p>
          </div>
          <div>
            <SiRaspberrypi />
            <SiLinux />
            <h4>Linux / Raspberry pi</h4>
            <p>Pi-hole, Homebrige, Unbound DNS, openVPN, Domoticz, Wireguard</p>
          </div>
          <div>
            <SiAdobe />
            <SiAdobepremiere />
            <h4>Videobewerking</h4>
            <p>
              Premiere pro, Audacity,{' '}
              <span style={{textDecoration: 'line-through'}}>Adobe Flash</span>,
              Proxies, GoPro timelapses
            </p>
          </div>
          <div>
            <SiXbox />
            <SiNetflix />
            <SiSpotify />
            <h4>Overige</h4>
            <p>
              Xbox ambassador, iOS Dev Beta, PSP Custom Firmware, SONOS fan,
              Testflight
            </p>
          </div>
        </div>
      </div>
      <div className="inhoud">
        <div className="hgroup">
          <h2 style={{margin: 0}}>Projecten</h2>
          <p>Ervaring en interesse</p>
        </div>
        {data.portfolio.nodes.map((item, key) => {
          return (
            <PortfolioItem
              key={key}
              titel={item.titel}
              beschrijving={item.beschrijving}
              slug={item.slug.current}
              afbeelding={item.afbeelding}
              skillsused={item.skillsused}
            />
          );
        })}
      </div>
      <div className="inhoud" style={{textAlign: 'center'}}>
        {' '}
        <h3 style={{margin: 0}}>Open Source project</h3>
        <p>met meeste contributors</p>
        <Github />
      </div>
    </Layout>
  );
};

export default Index;
