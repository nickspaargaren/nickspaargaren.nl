import { defineType } from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
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
        source: 'title',
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      },
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      name: 'description',
      title: 'Description',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'website'
    }
  }
});