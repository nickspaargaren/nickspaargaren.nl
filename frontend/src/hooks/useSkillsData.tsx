import { GatsbyImageType } from "@src/types";
import { graphql, useStaticQuery } from "gatsby";

type useSkillsDataType = {
	exclude: boolean;
	id: string;
	image: GatsbyImageType;
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
