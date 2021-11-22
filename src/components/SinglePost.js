import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SinglePost = ({ post }) => {
  const image = getImage(post.mainImage.asset.gatsbyImageData);
  return (
    <>
      <div>
        <span aria-label={post.title}>
          <Link to={`/${post.slug.current}`}>
            <h3 className="dark-link">{post.title}</h3>
              <GatsbyImage
                image={image}
                className="post-image"
                alt={post.imageCredit}
              />
            {/* <ul>
              <li className="category">{post.categories.map((category) => category.title).join(' ')}</li>
            </ul> */}
            <p>{post.tlDr}</p>
          </Link>
        </span>
      </div>
    </>
  );
}

export default SinglePost;