import { graphql, useStaticQuery } from "gatsby";

type TimelineItemType = {
  title: string;
  subtitle: string;
  date: number;
};

export const useTimelineData = (): TimelineItemType[] => {
  const {
    allSanityTimeline: { nodes },
  } = useStaticQuery(graphql`
    query TimelineData {
      allSanityTimeline(sort: { date: ASC }) {
        nodes {
          title
          subtitle
          date
        }
      }
    }
  `);

  return nodes;
};
