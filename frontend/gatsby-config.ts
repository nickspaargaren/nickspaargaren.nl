import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    name: "Nick Spaargaren",
    position: "Designer & Front-End Developer",
    phone: process.env.TELEFOONNUMMER || "06-12345678",
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lora`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
};

export default config;
