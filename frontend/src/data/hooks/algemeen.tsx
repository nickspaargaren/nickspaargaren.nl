import { useStaticQuery, graphql } from "gatsby";
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            name
            position
            phone
            email
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
