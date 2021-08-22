import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import BlockContent from '../components/BlockContent';

export const query = graphql`
  query BlogPostTemplateQuery {
    post: sanityPost {
      title
      author {
        name
      }
      publishedAt(formatString: "MMMM Do yyyy")
      categories {
        title
      }
      mainImage {
        asset {
          gatsbyImageData(formats: AUTO, placeholder: DOMINANT_COLOR)
        }
      }
      imageCredit
      tlDr
      _rawBody
    }
  }
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post
  const imagePlaceholder = getImage(post.mainImage.asset)
  console.log(data)
  return (
    <>
      {errors && <Seo title='GraphQL Error' />}
      {post && <Seo title={post.title || 'Untitled'} />}
      <h1>{post.title}</h1>
      <h4>by {post.author.name}</h4>
      <p>{post.publishedAt}</p>
      <ul>
        {post.categories.map((category) => (
          <li key={category._id}>{category.title}</li>
        ))}
      </ul>
      <GatsbyImage image={imagePlaceholder} alt={post.imageCredit} />
      <p>{post.imageCredit}</p>
      <p><strong>TLDR: </strong>{post.tlDr}</p>
      <BlockContent blocks={post._rawBody} />
    </>
  )
}

export default BlogPostTemplate;