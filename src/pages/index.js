import React from 'react'
import Seo from '../components/seo'
import { graphql } from 'gatsby';
import BlogList from '../components/BlogList';

export const RecentPostsQuery = graphql`
  query RecentPostsQuery {
    posts: allSanityPost(limit: 3, sort: {order: DESC, fields: publishedAt}) {
      nodes {
        _id
        title
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
        slug {
          current
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const posts = data.posts.nodes;
  return (
    <>  
      <Seo title='Home' />
      <h1>Latest Blog Posts</h1>
      <BlogList posts={posts}/>
    </>
  );
}

export default IndexPage;


