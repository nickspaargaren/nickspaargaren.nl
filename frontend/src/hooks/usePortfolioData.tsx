import { graphql, useStaticQuery } from "gatsby";

type usePortfolioDataType = {
  title: string;
  subtitle: string;
  website: string;
  tags: string;
  id: string;
  github: string;
  description: string;
  collaboration: string;
  image: any;
  skillsused: [
    {
      title: string;
      image: any;
    }
  ];
};

export const usePortfolioData = (): usePortfolioDataType[] => {
  const {
    portfolio: { nodes },
  } = useStaticQuery(
    graphql`
      {
        portfolio: allSanityPortfolio(
          sort: { fields: collaboration, order: ASC }
        ) {
          nodes {
            title
            subtitle
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
    `
  );

  return nodes;
};
