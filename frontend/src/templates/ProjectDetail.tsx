import Breadcrumbs from "@src/components/Breadcrumbs";
import Button from "@src/components/Button";
import Layout from "@src/layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";
import { FaAngleDoubleRight, FaCaretRight, FaCode } from "react-icons/fa";
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

const ProjectDetail = ({ data }): ReactElement => (
  <>
    <Layout
      title={`Projecten | ${data.pagina.title}`}
      description={data.pagina.description}
      noindex
    >
      <div className="inhoud">
        <Breadcrumbs list={["Projecten", data.pagina.title]} />
      </div>
      <div className="inhoud">
        <div className="grid-2x">
          <div>
            <h1>{data.pagina.title}</h1>
            <p>{data.pagina.description}</p>

            <div className="links">
              {data.pagina.website && (
                <Button
                  title="Website"
                  subtitle="Bekijken"
                  icon={<FaAngleDoubleRight />}
                  url={data.pagina.website}
                  external
                />
              )}
              {data.pagina.github && (
                <Button
                  title="Source"
                  subtitle="Bekijken"
                  icon={<FaCode />}
                  url={data.pagina.github}
                  external
                />
              )}
            </div>
          </div>
          <div>
            <div className="image groot">
              <GatsbyImage
                image={data.pagina.image.asset.gatsbyImageData}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
);

export const query = graphql`
  query ($slug: String!) {
    pagina: sanityPortfolio(slug: { current: { eq: $slug } }) {
      title
      website
      tags
      github
      description
      collaboration
      image {
        asset {
          gatsbyImageData
        }
      }
      skillsused {
        title
      }
    }
  }
`;

export default ProjectDetail;
