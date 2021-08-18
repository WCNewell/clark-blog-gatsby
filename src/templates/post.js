import React from 'react';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
// import Seo from '../components/seo';

export default function Post({ data }) {
  return (
    <>
      
    </>
  )
}

export const query = graphql`
  query {
    post: allSanityPost {
      nodes {
        slug {
          current
        }
        title
        _id
        categories {
          title
        }
        author {
          name
        }
        publishedAt
        mainImage {
          asset {
            gatsbyImageData
          }
        }
        imageCredit
        tlDr
        body {
          style
          children {
            text
          }
        }
      }
    }
  }
`