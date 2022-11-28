export default {
	name: "skills",
	title: "Skills",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "percentage",
			title: "Percentage",
			description: "0 - 100",
			type: "number",
			validation: (Rule) => Rule.required().min(0).max(100),
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "exclude",
			title: "Niet tonen in overzicht",
			type: "boolean",
		},
	],
};
