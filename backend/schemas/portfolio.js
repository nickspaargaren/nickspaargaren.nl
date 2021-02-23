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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titel',
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      }
    },
    {
      name: 'beschrijving',
      title: 'Beschrijving',
      type: 'text',
    },
    {
      name: 'skillsused',
      title: 'Skills used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'skills'}]
        }
      ]
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
      name: 'afbeeldingen',
      title: 'Extra afbeeldingen',
      type: 'array',
      of: [{type: 'image'}]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'samenwerking',
      title: 'In samenwerking met CM Specialist',
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