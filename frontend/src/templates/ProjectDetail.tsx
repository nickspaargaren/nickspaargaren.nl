import React from 'react';
import Layout from '../layout/layout';
import {graphql, Link} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import styled from 'styled-components';
import {FaAngleDoubleRight, FaCaretRight, FaCode} from 'react-icons/fa';
import Button from '../components/button/Button';

const PortfolioGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;

  .afbeelding > div {
    height: 100% !important;
    object-fit: cover;
    width: 100% !important;
  }
`;

const ProjectDetail = ({data}) => {
  return (
    <>
      <Layout
        title={`Projecten | ${data.pagina.titel}`}
        description={data.pagina.beschrijving}
        noindex
      >
        <div className="inhoud">
          <small>
            <ul className="bcrumbs">
              <li>
                <Link to="/portfolio">Home</Link>
              </li>
              <li>
                <FaCaretRight />
              </li>
              <li>
                <Link to="/portfolio/projecten/">Projecten</Link>
              </li>
              <li>
                <FaCaretRight />
              </li>
              <li>{data.pagina.titel}</li>
            </ul>
          </small>
        </div>
        <div className="inhoud">
          <div className="grid-2x">
            <div>
              <h1>{data.pagina.titel}</h1>
              <p>{data.pagina.beschrijving}</p>

              <div className="links">
                {data.pagina.website && (
                  <Button
                    title="Website"
                    subtitle="Bekijken"
                    icoon={<FaAngleDoubleRight />}
                    url={data.pagina.website}
                    external
                  />
                )}
                {data.pagina.github && (
                  <Button
                    title="Source"
                    subtitle="Bekijken"
                    icoon={<FaCode />}
                    url={data.pagina.github}
                    external
                  />
                )}
              </div>
            </div>
            <div>
              <div className="afbeelding groot">
                <GatsbyImage
                  image={data.pagina.afbeelding.asset.gatsbyImageData}
                  alt=""
                />
              </div>
              <PortfolioGrid>
                {data.pagina.afbeeldingen.map((afbeelding, key) => (
                  <div key={key} className="afbeelding">
                    <GatsbyImage
                      image={afbeelding.asset.gatsbyImageData}
                      alt=""
                    />
                  </div>
                ))}
              </PortfolioGrid>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    pagina: sanityPortfolio(slug: {current: {eq: $slug}}) {
      titel
      website
      tags
      github
      beschrijving
      samenwerking
      afbeelding {
        asset {
          gatsbyImageData
        }
      }
      afbeeldingen {
        asset {
          gatsbyImageData
        }
      }
      skillsused {
        titel
      }
    }
  }
`;

export default ProjectDetail;
