import Breadcrumbs from "@src/components/Breadcrumbs";
import PortfolioItem from "@src/components/PortfolioItem";
import SlideAnimation from "@src/components/SlideAnimation";
import { usePortfolioData } from "@src/hooks/usePortfolioData";
import Layout from "@src/layout";
import { HeadFC } from "gatsby";
import React, { ReactElement } from "react";

const Projecten = () => {
  const portfolio = usePortfolioData();

  return (
    <Layout>
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

export const Head: HeadFC = (): ReactElement => {
  return (
    <>
      <title>Portfolio</title>
      <meta name="description" content="Portfolio overzicht" />
      <meta name="robots" content="noindex" />
    </>
  );
};
