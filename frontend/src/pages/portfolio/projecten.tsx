import React from "react";
import Layout from "../../layout/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

import { FaCaretRight } from "react-icons/fa";

import PortfolioItem from "../../components/PortfolioItem";

const Projecten = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolio: allSanityPortfolio(
        sort: { fields: collaboration, order: ASC }
      ) {
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
        <small>
          <ul className="bcrumbs">
            <li>
              <Link to="/portfolio">Home</Link>
            </li>
            <li>
              <FaCaretRight />
            </li>
            <li>Projecten</li>
          </ul>
        </small>
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
