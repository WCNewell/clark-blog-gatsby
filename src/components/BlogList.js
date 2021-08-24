import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SinglePost = ({ post }) => {
  const image = getImage(post.mainImage.asset);
  return (
    <>
      <GatsbyImage image={image} alt={post.imageCredit} />
      <span>
        <Link to={`/${post.slug.current}`}>
          <h2>{post.title}</h2>
        </Link>
        <p>{post.categories.map((category) => category.title).join(' ')}</p>
      </span>
    </>
  );
}

const BlogList = ({ posts }) => {
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <SinglePost key={post._id} post={post} />
      ))}
    </>
  );
}

export default BlogList