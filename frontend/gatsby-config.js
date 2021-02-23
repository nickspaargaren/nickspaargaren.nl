require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    naam: 'Nick Spaargaren',
    functie: 'Designer & Front-End Developer',
    telefoonnummer: process.env.TELEFOONNUMMER,
    email: process.env.EMAIL
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
    {
      resolve: `gatsby-plugin-styled-components`
    },
  ],
}
