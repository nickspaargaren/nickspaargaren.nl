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
              fluid(maxWidth: 1086, toFormat: WEBP) {
                base64
                aspectRatio
                src
                srcSet
                sizes
                srcSetWebp
                srcWebp
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