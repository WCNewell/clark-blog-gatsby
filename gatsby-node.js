const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `)
  result.data.allSanityPost.edges.forEach(edge => {
    createPage({
      path: `$edge.node.slug`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug.current
      }
    })
  })
}
