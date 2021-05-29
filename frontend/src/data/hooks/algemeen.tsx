import {useStaticQuery, graphql} from 'gatsby';
export const useSiteMetadata = () => {
  const {site} = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            naam
            functie
            telefoonnummer
            email
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};
