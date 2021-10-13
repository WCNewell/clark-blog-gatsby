import React from 'react'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby';
import BlogList from '../components/BlogList';

export const RecentPostsQuery = graphql`
  query RecentPostsQuery {
    posts: allSanityPost(limit: 6, sort: {order: DESC, fields: publishedAt}) {
      nodes {
        _id
        title
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
      <h1>recent posts</h1>
      <BlogList posts={posts}/>
      <Link to="/posts" >
        <h3 aria-label="see more posts">See more posts...</h3>
      </Link>
      
    </>
  );
}

export default IndexPage;


