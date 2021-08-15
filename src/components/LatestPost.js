// import React from 'react'
// import { Link } from 'gatsby'
// import { StaticQuery, graphql } from 'gatsby'
// import '../styles/global-styles.scss'

// const LATEST_POST_QUERY = graphql`
//     query LatestPostQuery {
//         allWordpressPost(filter:
//             {status: {eq: "publish"},
//             categories: {elemMatch: {name: {eq: "Software Development"}}}},
//             limit: 1, sort: {fields: [date], order: DESC}) {
//             edges {
//                 node {
//                     id
//                     slug
//                     date
//                     title
//                     jetpack_featured_media_url
//                     featured_image_alt
//                     excerpt
//                 }
//             }
//         }
//     }

// `

// const LatestPost = () => (
//     <StaticQuery
//         query={LATEST_POST_QUERY}
//         render={data => {
//             return (
//                 <div>
//                     <h3>Latest Post</h3>
//                     {
//                         data.allWordpressPost.edges.map(edge => (

//                             <div className='recent-posts-card' key={edge.node.id}>
//                                 <small className='post-date'>{ new Date(edge.node.date).toDateString() }</small>
//                                 <Link to={`/posts/${edge.node.slug}`} className='post-title'>{edge.node.title}</Link>
//                                 <img className='post-thumbnail' src={edge.node.jetpack_featured_media_url} alt={edge.node.featured_image_alt} />
//                                 <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
//                             </div>

//                         ))
//                     }
//                 </div>
//             )
//         }} 
//     />
// )

// export default LatestPost