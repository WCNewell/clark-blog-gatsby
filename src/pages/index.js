import React from 'react'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import BlogList from '../components/BlogList';

export const RecentPostsQuery = graphql`
  query RecentPostsQuery {
    posts: allSanityPost(limit: 10, sort: {order: DESC, fields: publishedAt}) {
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
      <Seo title="Home" />
      <div className="main-grid">
        <Header />
        <h1 className="page-title">recent posts</h1>
        <div className="content">
          <BlogList posts={posts}/>
            <Link to="/blog" >
              <h3 aria-label="see more posts">See more posts...</h3>
            </Link>
        </div>
      </div>
    </>
  );
}

export default IndexPage;


