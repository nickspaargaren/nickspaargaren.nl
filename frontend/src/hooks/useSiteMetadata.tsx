import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<Queries.SiteMetaDataQuery>(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          name
          position
          email
        }
      }
    }
  `);

  return site?.siteMetadata;
};
