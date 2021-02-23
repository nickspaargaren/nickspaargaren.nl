exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    {
      paginas: allSanityPortfolio {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)
  data.paginas.nodes.forEach(node => {
    const slug = node.slug.current
    actions.createPage({
      path: `/portfolio/${slug}`,
      component: require.resolve(`./src/templates/PortfolioDetail.js`),
      context: { slug: slug },
    })
  })
}