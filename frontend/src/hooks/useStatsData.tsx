import { graphql, useStaticQuery } from "gatsby";

export const useStatsData = () => {
  const {
    stats: { nodes },
  } = useStaticQuery<Queries.statsQuery>(graphql`
    query stats {
      stats: allSanityStats {
        nodes {
          title
          subtitle
          amount
          icon
        }
      }
    }
  `);

  return nodes;
};
