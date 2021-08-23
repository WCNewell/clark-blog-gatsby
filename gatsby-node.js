const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)
  return graphql(`
    query {
      allSanityPost {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allSanityPost.edges.forEach(edge => {
      createPage({
        path: `${edge.node.slug.current}`,
        component: blogPostTemplate,
        context: {
          slug: edge.node.slug.current
        },  
      })
    })
  })
}
