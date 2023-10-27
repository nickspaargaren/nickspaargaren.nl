import Breadcrumbs from "@src/components/Breadcrumbs";
import PortfolioItem from "@src/components/PortfolioItem";
import Layout from "@src/layout";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Projecten = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolio: allSanityPortfolio(sort: { collaboration: ASC }) {
        nodes {
          title
          website
          tags
          id
          github
          description
          collaboration
          image {
            asset {
              gatsbyImageData
            }
          }
          slug {
            current
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
    }
  `);

  return (
    <Layout title={`Portfolio`} description="Portfolio overzicht" noindex>
      <div className="inhoud">
        <Breadcrumbs list={["Projecten"]} />
      </div>
      <div className="inhoud">
        {data.portfolio.nodes.map((item, key) => (
          <PortfolioItem
            key={key}
            title={item.title}
            description={item.description}
            slug={item.slug.current}
            image={item.image}
            skillsused={item.skillsused}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Projecten;
