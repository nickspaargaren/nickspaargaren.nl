import { graphql, useStaticQuery } from "gatsby";

export const useTimelineData = () => {
  const {
    allSanityTimeline: { nodes },
  } = useStaticQuery<Queries.timelineDataQuery>(graphql`
    query timelineData {
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
