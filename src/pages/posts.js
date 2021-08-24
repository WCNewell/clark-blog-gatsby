import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import BlogList from '../components/BlogList';

export const BlogPostQuery = graphql`
  query BlogPageQuery {
    posts: allSanityPost {
      nodes {
        _id
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

const BlogPage = ({ data }) => {
  const posts = data.posts.nodes;
  return (
    <>
      <Seo title='Blog Posts' />
      <h1>Blog Posts</h1>
      <BlogList posts={posts} />
    </>
  )
};

export default BlogPage;

// A good example of this might be pizzas.js under pages, from video 18

