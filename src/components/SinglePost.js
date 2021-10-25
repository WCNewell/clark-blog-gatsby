import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SinglePost = ({ post }) => {
  const image = getImage(post.mainImage.asset.gatsbyImageData);
  return (
    <>
      <div className="content-items">    
        <GatsbyImage
          className="image"
          image={image}
          alt={post.imageCredit}
        />
        <span aria-label={post.title}>
          <Link to={`/${post.slug.current}`}>
            <h3 className="dark-link">{post.title}</h3>
          </Link>
          {/* <ul>
            <li className="category">{post.categories.map((category) => category.title).join(' ')}</li>
          </ul> */}
        </span>
        <p>{post.tlDr}</p>
      </div>
    </>
  );
}

export default SinglePost;