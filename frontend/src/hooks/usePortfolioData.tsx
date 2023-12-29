import { graphql, useStaticQuery } from "gatsby";

export const usePortfolioData = () => {
  const {
    portfolio: { nodes },
  } = useStaticQuery<Queries.portfolioQuery>(graphql`
    query portfolio {
      portfolio: allSanityPortfolio {
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
              gatsbyImageData(width: 255, height: 450)
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

  return nodes;
};
