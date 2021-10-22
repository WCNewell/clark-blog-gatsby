import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import Header from '../components/Header';
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

const Blog = ({ data }) => {
  const posts = data.posts.nodes;
  return (
    <>
      <Seo title='Blog Posts' />
      <div className="main-grid">
        <Header />
        <h1 className="page-title">blog</h1>
        <div className="content">
          <BlogList posts={posts} />
        </div>
      </div>
    </>
  );
}

export default Blog;
