import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SinglePost = ({ post }) => {
  const image = getImage(post.mainImage.asset.gatsbyImageData);
  return (
    <>
      <GatsbyImage
        className="image"
        image={image}
        alt={post.imageCredit}
      />
      <span aria-label={post.title}>
        <Link to={`/${post.slug.current}`}>
          <h3>{post.title}</h3>
        </Link>
        <p>{post.categories.map((category) => category.title).join(' ')}</p>
      </span>
      <p>{post.tlDr}</p>
    </>
  );
}

export default SinglePost;