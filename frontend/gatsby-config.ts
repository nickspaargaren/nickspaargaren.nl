import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  graphqlTypegen: {
    generateOnBuild: true,
  },
  siteMetadata: {
    name: "Nick Spaargaren",
    position: "Designer & Front-End Developer",
    email: process.env.EMAIL || "EMAIL",
    siteUrl: `https://nickspaargaren.nl`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "5mfdvpuc",
        dataset: "production",
        watchMode: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
};

export default config;
