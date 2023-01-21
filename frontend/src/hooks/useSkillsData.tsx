import { useSkillsDataType } from "@src/types";
import { graphql, useStaticQuery } from "gatsby";

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
