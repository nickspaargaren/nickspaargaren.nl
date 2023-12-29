import Breadcrumbs from "@src/components/Breadcrumbs";
import Youtube from "@src/components/Youtube";
import { useSiteMetadata } from "@src/hooks/useSiteMetadata";
import Layout from "@src/layout";
import React from "react";

const Drone = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <Layout
      title={`Drone videos | ${siteMetadata?.name}`}
      description="Drone videos"
      noindex
    >
      <div className="inhoud">
        <Breadcrumbs list={["Drone videos"]} />
      </div>

      <div className="inhoud">
        <div className="grid-2x">
          <Youtube
            title="Zaanse schans"
            url="https://www.youtube-nocookie.com/embed/CI7je7P7ask"
          />
          <Youtube
            title="Naarden-Vesting | Muiderslot | Aug 2018"
            url="https://www.youtube-nocookie.com/embed/06G-JPIPK0U"
          />
        </div>
      </div>
      <div className="inhoud">
        <div className="grid-2x">
          <Youtube
            title="Gooimeer - Flevoland - 26 July 2018"
            url="https://www.youtube-nocookie.com/embed/Fp_LSgD7D9E"
          />
          <Youtube
            title="Portugal Guincho - July 2018"
            url="https://www.youtube-nocookie.com/embed/zDiSkH9PPJg"
          />
        </div>
      </div>
      <div className="inhoud">
        <div className="grid-2x">
          <Youtube
            title="Help Quintus de modder door | Actie Hersenstichting Mudmaster Marathon."
            url="https://www.youtube-nocookie.com/embed/mDX5lj4eepQ"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Drone;
