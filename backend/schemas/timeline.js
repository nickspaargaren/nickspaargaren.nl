export default {
	name: "timeline",
	title: "Timeline",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "subtitle",
			title: "Subtitle",
			type: "string",
		},
		{
			name: "date",
			title: "Date",
			type: "number",
		},
		{
			name: "order",
			title: "Order",
			type: "number",
			hidden: true,
		},
	],
	orderings: [
		{
			title: "Handmatig",
			name: "Handmatig",
			by: [{ field: "order", direction: "asc" }],
		},
	],
};
