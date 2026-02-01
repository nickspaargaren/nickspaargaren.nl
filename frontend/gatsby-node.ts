import type { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { data } = await graphql<Queries.SanityPortfolioPagesQuery>(`
    query SanityPortfolioPages {
      pages: allSanityPortfolio {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  if (!data) throw new Error("Failed to fetch portfolio data");

  data.pages.nodes.forEach((node) => {
    const slug = node.slug?.current;

    if (!slug) return;

    actions.createPage({
      path: `/portfolio/projecten/${slug}`,
      component: path.resolve(`./src/templates/PortfolioPage.tsx`),
      context: {
        slug,
      },
    });
  });
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "src"),
      },
    },
  });
};
