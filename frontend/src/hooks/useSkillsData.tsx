import { graphql, useStaticQuery } from "gatsby";

export const useSkillsData = () => {
  const {
    skills: { nodes },
  } = useStaticQuery<Queries.skillsQuery>(graphql`
    query skills {
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
