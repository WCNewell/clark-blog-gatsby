import React from 'react'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';

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
      <main className="main-grid">
        <Header />
        <h1 className="page-title">recent posts</h1>
        <div className="content">
          <BlogList posts={posts}/>
            <Link to="/blog" >
              <h1 className="blog-link" aria-label="see more posts">See more posts...</h1>
            </Link>
        </div>
      </main>
      <div>
        <Footer className="footer" />
      </div>
    </>
  );
}

export default IndexPage;


