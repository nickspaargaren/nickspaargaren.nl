import { useStaticQuery, graphql } from "gatsby"
export const useSkillsData = () => {
  const data = useStaticQuery(
    graphql`
    query skills {
      skills: allSanitySkills {
        nodes {
          id
          titel
          percentage
          afbeelding {
            asset {
              fluid(maxWidth: 35, maxHeight: 35) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }  
    `
  )
  
  return data
}