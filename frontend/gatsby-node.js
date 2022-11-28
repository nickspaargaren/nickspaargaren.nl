var path = require("path");

exports.createPages = async ({ actions, graphql }) => {
	const {
		data: { pages },
	} = await graphql(`
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

	pages.nodes.forEach((node) => {
		const slug = node.slug.current;
		actions.createPage({
			path: `/portfolio/projecten/${slug}`,
			component: require.resolve("./src/templates/PortfolioPage.tsx"),
			context: {
				slug,
			},
		});
	});
};

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@src": path.resolve(__dirname, "src"),
			},
		},
	});
};
