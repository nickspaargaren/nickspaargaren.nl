import { graphql, useStaticQuery } from "gatsby";

type useStatsDataType = {
  title: string;
  subtitle: string;
  amount: number;
  icon: string;
};

export const useStatsData = (): useStatsDataType[] => {
  const {
    stats: { nodes },
  } = useStaticQuery(graphql`
    {
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
