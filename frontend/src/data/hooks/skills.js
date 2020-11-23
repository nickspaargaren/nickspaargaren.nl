import { useStaticQuery, graphql } from "gatsby"
export const useSkillsData = () => {
  const data = useStaticQuery(
    graphql`
    query skills {
      skills: allSanitySkills {
        nodes {
          titel
          id
        }
      }
    }  
    `
  )
  
  return data
}