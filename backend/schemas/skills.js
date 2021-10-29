export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'titel',
      title: 'Titel',
      type: 'string',
    },
    {
      name: 'percentage',
      title: 'Percentage',
      description: '0 - 100',
      type: 'number',
      validation: Rule => Rule.required().min(0).max(100)
    },
    {
      name: 'afbeelding',
      title: 'Afbeelding',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'exclude',
      title: 'Niet tonen in overzicht',
      type: 'boolean'
    }
  ]
}