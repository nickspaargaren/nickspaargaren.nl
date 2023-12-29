import Breadcrumbs from "@src/components/Breadcrumbs";
import PortfolioItem from "@src/components/PortfolioItem";
import SlideAnimation from "@src/components/SlideAnimation";
import { usePortfolioData } from "@src/hooks/usePortfolioData";
import Layout from "@src/layout";
import React from "react";

const Projecten = () => {
  const portfolio = usePortfolioData();

  return (
    <Layout title={`Portfolio`} description="Portfolio overzicht" noindex>
      <div className="inhoud">
        <Breadcrumbs list={["Projecten"]} />
      </div>
      <div className="inhoud">
        <div className="grid-4x">
          {portfolio.map((item, key) => (
            <SlideAnimation>
              <PortfolioItem
                key={key}
                title={item.title || ""}
                image={item.image?.asset?.gatsbyImageData}
                skillsused={item.skillsused}
              />
            </SlideAnimation>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projecten;
