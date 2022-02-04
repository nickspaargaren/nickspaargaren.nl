import { graphql, useStaticQuery } from "gatsby";

type TimelineItemType = {
  title: string;
  subtitle: string;
};

export const useTimelineData = (): TimelineItemType[] => {
  const {
    allSanityTimeline: { nodes },
  } = useStaticQuery(
    graphql`
      query TimelineData {
        allSanityTimeline {
          nodes {
            title
            subtitle
          }
        }
      }
    `
  );

  return nodes;
};
