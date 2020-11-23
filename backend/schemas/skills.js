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
      name: 'afbeelding',
      title: 'Afbeelding',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}