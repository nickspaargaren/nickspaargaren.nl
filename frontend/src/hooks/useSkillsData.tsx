import { useSkillsDataType } from "@src/types";
import { graphql, useStaticQuery } from "gatsby";

export const useSkillsData = (): useSkillsDataType[] => {
  const {
    skills: { nodes },
  } = useStaticQuery(graphql`
    {
      skills: allSanitySkills(sort: { percentage: DESC }) {
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
