import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SinglePost = ({ post }) => {
  const image = getImage(post.mainImage.asset.gatsbyImageData);
  return (
    <>
      <li className="content-item">    
        <GatsbyImage
          className="image"
          image={image}
          alt={post.imageCredit}
        />
        <span aria-label={post.title}>
          <Link to={`/${post.slug.current}`}>
            <h3 className="dark-link">{post.title}</h3>
          </Link>
          <p>{post.categories.map((category) => category.title).join(' ')}</p>
        </span>
        <p>{post.tlDr}</p>
      </li>
    </>
  );
}

export default SinglePost;