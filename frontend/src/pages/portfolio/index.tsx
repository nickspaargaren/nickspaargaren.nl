import Button from "@src/components/button/Button";
import Github from "@src/components/Github";
import PortfolioItem from "@src/components/PortfolioItem";
import Skills from "@src/components/Skills";
import Stats from "@src/components/Stats";
import Timeline from "@src/components/Timeline";
import { useSiteMetadata } from "@src/hooks/useSiteMetadata";
import Layout from "@src/layout";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  SiAdobe,
  SiAdobepremierepro,
  SiAirbnb,
  SiApple,
  SiCodeclimate,
  SiDevdotto,
  SiLinux,
  SiMaterialdesignicons,
  SiNetflix,
  SiOneplus,
  SiRaspberrypi,
  SiSketch,
  SiSpotify,
  SiVisualstudiocode,
  SiXbox,
} from "react-icons/si";
import styled from "styled-components";

const StyledPortfolioItems = styled.div`
  padding: 30px;
`;

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      portfolio: allSanityPortfolio(
        sort: { fields: collaboration, order: ASC }
      ) {
        nodes {
          title
          subtitle
          website
          tags
          id
          github
          description
          collaboration
          image {
            asset {
              gatsbyImageData(width: 255, height: 450)
            }
          }
          skillsused {
            title
            image {
              asset {
                gatsbyImageData(width: 37)
              }
            }
          }
        }
      }
      stats: allSanityStats {
        nodes {
          title
          subtitle
          amount
          icon
        }
      }
    }
  `);

  const { name, position } = useSiteMetadata();

  return (
    <Layout title={`Portfolio | ${name}`} description={position} noindex>
      <header>
        <StyledPortfolioItems>
          <div className="inhoud">
            <div className="grid-4x">
              {data.portfolio.nodes.map((item, key) => (
                <PortfolioItem
                  key={key}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  image={item.image}
                  skillsused={item.skillsused}
                  collaboration={item.collaboration}
                />
              ))}
            </div>
          </div>
        </StyledPortfolioItems>
      </header>
      <section>
        <div className="inhoud">
          <div className="grid-4x">
            {data.stats.nodes.map((item, key) => (
              <Stats
                key={key}
                title={item.title}
                subtitle={item.subtitle}
                amount={item.amount}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="full">
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
      <section className="full">
        <div className="inhoud">
          <div className="hgroup">
            <h2 style={{ margin: 0 }}>Timeline</h2>
            <p>Ervaring en technieken</p>
          </div>
          <Timeline />
          <Button
            title="Linkedin"
            subtitle="Account"
            icon={<FaLinkedin />}
            url="https://www.linkedin.com/in/nickspaargaren"
            external
          />
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
