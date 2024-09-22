import { defineType } from 'sanity'

export default defineType({
  name: 'timeline',
  title: 'Timeline',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: "date",
      title: "Date",
      type: "number",
    }
  ]
});