import { graphql, useStaticQuery } from "gatsby";

type TimelineItemType = {
	title: string;
	subtitle: string;
	date: number;
};

export const useTimelineData = (): TimelineItemType[] => {
	const {
		allSanityTimeline: { nodes },
	} = useStaticQuery(
		graphql`
      query TimelineData {
        allSanityTimeline(sort: { fields: order, order: ASC }) {
          nodes {
            title
            subtitle
            date
          }
        }
      }
    `,
	);

	return nodes;
};
