export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'titel',
      title: 'Titel',
      type: 'string',
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      name: 'beschrijving',
      title: 'Beschrijving',
      type: 'text',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
    },
    {
      name: 'github',
      title: 'Github',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
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
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'In samenwerking met CM Specialist',
      name: 'samenwerking',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'titel',
      subtitle: 'website'
    }
  }
}