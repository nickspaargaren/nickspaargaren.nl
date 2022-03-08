var path = require("path");

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    {
      pages: allSanityPortfolio {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);
  data.pages.nodes.forEach((node) => {
    const slug = node.slug.current;
    actions.createPage({
      path: `/portfolio/projecten/${slug}`,
      component: require.resolve(`./src/templates/PortfolioPage.tsx`),
      context: { slug: slug },
    });
  });
};

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "src"),
      },
    },
  });
};
