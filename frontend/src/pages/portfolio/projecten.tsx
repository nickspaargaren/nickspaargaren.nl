import React from 'react';
import Layout from '../../layout/layout';
import {useStaticQuery, graphql, Link} from 'gatsby';

import {FaCaretRight} from 'react-icons/fa';

import PortfolioItem from '../../components/PortfolioItem';

const Projecten = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolio: allSanityPortfolio(sort: {fields: samenwerking, order: ASC}) {
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
            titel={item.titel}
            beschrijving={item.beschrijving}
            slug={item.slug.current}
            afbeelding={item.afbeelding}
            skillsused={item.skillsused}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Projecten;
