import React from "react";
import Layout from "../../layout/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

import { useSiteMetadata } from "../../data/hooks/algemeen";

import Github from "../../components/github/Github";
import Stats from "../../components/Stats";

import PortfolioItem from "../../components/PortfolioItem";
import Marquee from "react-fast-marquee";

import {
  SiAdobe,
  SiSketch,
  SiVisualstudiocode,
  SiMaterialdesignicons,
  SiCodeclimate,
  SiAirbnb,
  SiDevdotto,
  SiOneplus,
  SiRaspberrypi,
  SiLinux,
  SiApple,
  SiAdobepremierepro,
  SiXbox,
  SiNetflix,
  SiSpotify,
} from "react-icons/si";

import styled from "styled-components";

import Skills from "../../components/Skills";

const StyledPortfolioItems = styled.div`
  display: flex;
`;

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      portfolio: allSanityPortfolio(
        sort: { fields: samenwerking, order: ASC }
      ) {
        nodes {
          titel
          subtitle
          website
          tags
          id
          github
          beschrijving
          samenwerking
          afbeelding {
            asset {
              gatsbyImageData(width: 255, height: 450)
            }
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

  const { naam, functie } = useSiteMetadata();

  return (
    <Layout title={`Portfolio | ${naam}`} description={functie} noindex>
      <header>
        <Marquee gradient={false}>
          <StyledPortfolioItems>
            {data.portfolio.nodes.map((item, key) => {
              return (
                <PortfolioItem
                  key={key}
                  titel={item.titel}
                  subtitle={item.subtitle}
                  beschrijving={item.beschrijving}
                  afbeelding={item.afbeelding}
                  skillsused={item.skillsused}
                  samenwerking={item.samenwerking}
                />
              );
            })}
          </StyledPortfolioItems>
        </Marquee>
      </header>
      <section>
        <div className="inhoud">
          <div className="grid-4x">
            <Stats
              title="Websites"
              subtitle="Front-end"
              amount={100}
              icoon="~"
            />
            <Stats
              title="Webwinkels"
              subtitle="Front-end"
              amount={40}
              icoon="~"
            />
            <Stats title="Designs" subtitle="Gemaakt" amount={50} icoon="~" />
            <Stats title="Jaar" subtitle="Ervaring" amount={10} icoon="+" />
          </div>
        </div>
      </section>
      <section>
        <div className="inhoud">
          <div className="hgroup">
            <h2 style={{ margin: 0 }}>Waar ik goed in ben</h2>
            <p>Ervaring en interesse</p>
          </div>
          <div className="grid-4x">
            <div>
              <SiMaterialdesignicons />
              <SiAdobe />
              <SiSketch />
              <h4>Design</h4>
              <p>
                Meer dan 10 jaar <span className="calc">27 - 10 = 17 ✓</span>{" "}
                ervaring met vormgeving, design, fotobewerking en dtp.
              </p>
            </div>
            <div>
              <SiVisualstudiocode />
              <SiDevdotto />
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
                inzamelingsacties, luchtopnames.{" "}
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
              <p>
                Pi-hole, Homebrige, Unbound DNS, openVPN, Domoticz, Wireguard
              </p>
            </div>
            <div>
              <SiAdobe />
              <SiAdobepremierepro />
              <h4>Videobewerking</h4>
              <p>
                Premiere pro, Audacity,{" "}
                <span style={{ textDecoration: "line-through" }}>
                  Adobe Flash
                </span>
                , Proxies, GoPro timelapses
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
            <Github />
          </div>
        </div>
      </section>
      <section>
        <div className="inhoud">
          <Skills />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
