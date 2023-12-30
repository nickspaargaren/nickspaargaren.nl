import Breadcrumbs from "@src/components/Breadcrumbs";
import Button from "@src/components/Button";
import Layout from "@src/layout";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";
import { FaAngleDoubleRight, FaCode } from "react-icons/fa";

type PortfolioDetailPageType = {
  data: Queries.pageQuery;
};

const PortfolioDetailPage = ({
  data: { page },
}: PortfolioDetailPageType): ReactElement => (
  <Layout
    title={`Projecten | ${page?.title}`}
    description={page?.description}
    noindex
  >
    <div className="inhoud">
      <Breadcrumbs list={["Projecten", page?.title || ""]} />
    </div>
    <div className="inhoud">
      <div className="grid-2x">
        <div>
          <h1>{page?.title}</h1>
          <p>{page?.description}</p>

          <div className="links">
            {page?.website && (
              <Button
                title="Website"
                subtitle="Bekijken"
                icon={<FaAngleDoubleRight />}
                url={page?.website}
                external
              />
            )}
            {page?.github && (
              <Button
                title="Source"
                subtitle="Bekijken"
                icon={<FaCode />}
                url={page?.github}
                external
              />
            )}
          </div>
        </div>
        <div>
          {page?.image?.asset && (
            <div className="image groot">
              <GatsbyImage image={page?.image.asset.gatsbyImageData} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query page($slug: String!) {
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

export default PortfolioDetailPage;
