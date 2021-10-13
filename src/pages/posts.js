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
            gatsbyImageData(formats: AUTO, placeholder: BLURRED, aspectRatio: 1)
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
      <Seo title='Tech Blog Posts' />
      <h1>tech blog posts</h1>
      <BlogList posts={posts} />
    </>
  );
}

export default BlogPage;
