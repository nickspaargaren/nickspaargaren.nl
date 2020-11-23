module.exports = {
  siteMetadata: {
    naam: 'Nick Spaargaren',
    functie: 'Designer & Front-End Developer',    
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '5mfdvpuc',
        dataset: 'production',
        watchMode: true,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lora`
        ],
        display: 'swap'
      }
    },
  ],
}
