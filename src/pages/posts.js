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
        tlDr
        title
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
  );
}

export default BlogPage;
