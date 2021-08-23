import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';

export const BlogPostQuery = graphql`
  query BlogPageQuery {
    posts: allSanityPost {
      nodes {
        publishedAt
        categories {
          title
        }
        mainImage {
          asset {
            gatsbyImageData(formats: AUTO, placeholder: BLURRED)
          }
        }
        imageCredit
        title
        tlDr
        slug {
          current
        }
      }
    }
  }
`;

const BlogPage = props => {
  const { data } = props
  con

  return (
    <>
      <Seo title='Blog Posts' />
      <h1>Blog Posts</h1>
      {postNodes}
    </>
  )
};

export default BlogPage;

// A good example of this might be pizzas.js under pages, from video 18

