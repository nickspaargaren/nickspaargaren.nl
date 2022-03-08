import Breadcrumbs from "@src/components/Breadcrumbs";
import Button from "@src/components/Button";
import Layout from "@src/layout";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";
import { FaAngleDoubleRight, FaCode } from "react-icons/fa";
import styled from "styled-components";

const PortfolioGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;

  .image > div {
    height: 100% !important;
    object-fit: cover;
    width: 100% !important;
  }
`;

const PortfolioPage = ({ data: { page } }): ReactElement => (
  <Layout
    title={`Projecten | ${page.title}`}
    description={page.description}
    noindex
  >
    <div className="inhoud">
      <Breadcrumbs list={["Projecten", page.title]} />
    </div>
    <div className="inhoud">
      <div className="grid-2x">
        <div>
          <h1>{page.title}</h1>
          <p>{page.description}</p>

          <div className="links">
            {page.website && (
              <Button
                title="Website"
                subtitle="Bekijken"
                icon={<FaAngleDoubleRight />}
                url={page.website}
                external
              />
            )}
            {page.github && (
              <Button
                title="Source"
                subtitle="Bekijken"
                icon={<FaCode />}
                url={page.github}
                external
              />
            )}
          </div>
        </div>
        <div>
          <div className="image groot">
            <GatsbyImage image={page.image.asset.gatsbyImageData} alt="" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
export const query = graphql`
  query ($slug: String!) {
    page: sanityPortfolio(slug: { current: { eq: $slug } }) {
      title
      website
      github
      description
      image {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default PortfolioPage;
