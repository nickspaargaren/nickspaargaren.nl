import { graphql, useStaticQuery } from "gatsby";

type useSkillsDataType = {
  exclude: boolean;
  id: string;
  image: {
    asset: {
      gatsbyImageData: {
        backgroundColor: string;
        height: number;
        images: {
          fallback: {
            sizes: string;
            src: string;
            srcSet: string;
          };
          sources: [
            {
              sizes: string;
              srcSet: string;
              type: string;
            }
          ];
        };
        layout: "fixed" | "fullWidth" | "constrained";
        width: number;
      };
    };
  };
  percentage: number;
  title: string;
};

export const useSkillsData = (): useSkillsDataType[] => {
  const {
    skills: { nodes },
  } = useStaticQuery(graphql`
    {
      skills: allSanitySkills(sort: { fields: percentage, order: DESC }) {
        nodes {
          id
          title
          percentage
          image {
            asset {
              gatsbyImageData
            }
          }
          exclude
        }
      }
    }
  `);

  return nodes;
};
