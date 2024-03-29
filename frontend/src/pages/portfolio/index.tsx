import Button from "@src/components/Button";
import Github from "@src/components/Github";
import PortfolioItem from "@src/components/PortfolioItem";
import Skills from "@src/components/Skills";
import SlideAnimation from "@src/components/SlideAnimation";
import Stats from "@src/components/Stats";
import Timeline from "@src/components/Timeline";
import { usePortfolioData } from "@src/hooks/usePortfolioData";
import { useSiteMetadata } from "@src/hooks/useSiteMetadata";
import { useStatsData } from "@src/hooks/useStatsData";
import Layout from "@src/layout";
import { Link } from "gatsby";
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

const Index = () => {
  const portfolio = usePortfolioData();
  const stats = useStatsData();
  const siteMetadata = useSiteMetadata();

  return (
    <Layout
      title={`Portfolio | ${siteMetadata?.name}`}
      description={siteMetadata?.position}
      noindex
    >
      <section>
        <div className="inhoud">
          <div className="grid-4x">
            {portfolio.map((item, key) => (
              <SlideAnimation key={key}>
                <PortfolioItem
                  title={item.title || ""}
                  image={item.image?.asset?.gatsbyImageData}
                  skillsused={item.skillsused}
                />
              </SlideAnimation>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="inhoud">
          <div className="grid-4x">
            {stats.map((item, key) => (
              <SlideAnimation key={key}>
                <Stats
                  title={item.title || ""}
                  subtitle={item.subtitle || ""}
                  amount={item.amount || 0}
                  icon={item.icon || ""}
                />
              </SlideAnimation>
            ))}
          </div>
        </div>
      </section>
      <section className="full">
        <div className="inhoud">
          <SlideAnimation>
            <div className="hgroup">
              <h2 style={{ margin: 0 }}>Waar ik goed in ben</h2>
              <p>Ervaring en interesse</p>
            </div>
          </SlideAnimation>
          <div className="grid-4x">
            <SlideAnimation>
              <SiMaterialdesignicons aria-hidden="true" />
              <SiAdobe aria-hidden="true" />
              <SiSketch aria-hidden="true" />
              <h4>Design</h4>
              <p>
                Meer dan 10 jaar{" "}
                <span className="calc" aria-hidden="true">
                  27 - 10 = 17 ✓
                </span>{" "}
                ervaring met vormgeving, design, fotobewerking en dtp.
              </p>
            </SlideAnimation>
            <SlideAnimation>
              <SiVisualstudiocode aria-hidden="true" />
              <SiDevdotto aria-hidden="true" />
              <h4>Develop</h4>
              <p>
                Front-end developer sinds 2013. Altijd zoekend naar nieuwe
                technieken waaronder op dit moment <i>Apollo en Graphql</i>
              </p>
            </SlideAnimation>
            <SlideAnimation>
              <SiCodeclimate aria-hidden="true" />
              <SiAirbnb aria-hidden="true" />
              <h4>Drone videography</h4>
              <p>
                Vakantie en activiteitenvideo's, promotievideo's /
                inzamelingsacties, luchtopnames.{" "}
                <Link to="/portfolio/drone" aria-label="Drone video's">
                  Naar video's
                </Link>
              </p>
            </SlideAnimation>
            <SlideAnimation>
              <SiOneplus aria-hidden="true" />
              <SiApple aria-hidden="true" />
              <h4>Device rooting/jailbreakscene</h4>
              <p>
                Checkra1n, ADB debug, Unc0ver, Odin, Custom recoveries, TWRP,
                ClockwordMod, LineageOS, CarBridge
              </p>
            </SlideAnimation>
            <SlideAnimation>
              <SiRaspberrypi aria-hidden="true" />
              <SiLinux aria-hidden="true" />
              <h4>Linux / Raspberry pi</h4>
              <p>
                Pi-hole, Homebrige, Unbound DNS, openVPN, Domoticz, Wireguard
              </p>
            </SlideAnimation>
            <SlideAnimation>
              <SiAdobe aria-hidden="true" />
              <SiAdobepremierepro aria-hidden="true" />
              <h4>Videobewerking</h4>
              <p>
                Premiere pro, Audacity,{" "}
                <span style={{ textDecoration: "line-through" }}>
                  Adobe Flash
                </span>
                , Proxies, GoPro timelapses
              </p>
            </SlideAnimation>
            <SlideAnimation>
              <SiXbox aria-hidden="true" />
              <SiNetflix aria-hidden="true" />
              <SiSpotify aria-hidden="true" />
              <h4>Overige</h4>
              <p>
                Xbox ambassador, iOS Dev Beta, PSP Custom Firmware, SONOS fan,
                Testflight
              </p>
            </SlideAnimation>
            <SlideAnimation>
              <Github />
            </SlideAnimation>
          </div>
        </div>
      </section>
      <section className="full">
        <div className="inhoud">
          <SlideAnimation>
            <div className="hgroup">
              <h2 style={{ margin: 0 }}>Timeline</h2>
              <p>Werkervaring en technieken</p>
            </div>
          </SlideAnimation>
          <Timeline />
          <Button
            title="Linkedin"
            subtitle="Account"
            icon={<FaLinkedin />}
            url="https://www.linkedin.com/in/nickspaargaren"
            ariaLabel={`Nick's Linkedin account`}
            external
          />
        </div>
      </section>
      <section>
        <div className="inhoud">
          <SlideAnimation>
            <Skills />
          </SlideAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
