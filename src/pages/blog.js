import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import Header from '../components/Header';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';

export const BlogPostQuery = graphql`
  query BlogPageQuery {
    posts: allSanityPost(sort: {order: DESC, fields: publishedAt}) {
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
      <main className="main-grid">
        <Header />
        <h1 className="page-title">blog</h1>
        <div className="content">
          <BlogList posts={posts} />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
