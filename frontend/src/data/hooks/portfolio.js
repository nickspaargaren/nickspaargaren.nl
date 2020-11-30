import { useStaticQuery, graphql } from "gatsby"
export const usePortfolioData = () => {
  const data = useStaticQuery(
    graphql`
    query portfolio {
      portfolio: allSanityPortfolio(sort: {fields: samenwerking, order: ASC}) {
        nodes {
          titel
          website
          tags
          id
          github
          beschrijving
          samenwerking
          afbeelding {
            asset {
              fluid {
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