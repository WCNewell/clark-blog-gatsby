import React from 'react'
import SEO from '../components/seo'
import RecentPosts from '../components/recent-posts'
import LatestPost from '../components/latest-post'

const IndexPage = () => (
    <>  
        <SEO title='Home' />
        <LatestPost />
        <RecentPosts />
    </>
)

export default IndexPage


