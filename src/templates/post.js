import React from 'react';
import { format } from 'date-fns';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import Seo from '../components/seo';

export const query = graphql`
  query BlogPostTemplateQuery {
    post: sanityPost {
      title
      author {
        name
      }
      publishedAt
      categories {
        _id
        title
      }
  }
}
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post
  console.log(data)
  return (
    <>
      {errors && <Seo title='GraphQL Error' />}
      {post && <Seo title={post.title || 'Untitled'} />}
      <h1>{post.title}</h1>
      <h4>by {post.author.name}</h4>
      <p>{format(new Date(post.publishedAt), 'MMMM Do yyyy')}</p>
      <ul>
        {post.categories.map((category) => (
          <li key={category._id}>{category.title}</li>
        ))}
      </ul>
    </>
  )
}

export default BlogPostTemplate;