import { graphql, useStaticQuery } from "gatsby";

type useSiteMetadataType = {
  name: string;
  position: string;
  email: string;
};

export const useSiteMetadata = (): useSiteMetadataType => {
  const { site } = useStaticQuery(graphql`
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
  return site.siteMetadata;
};
