import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Post extends Component {
    render() {
        const {data} = this.props
        return (
            <div>
                <h1>{data.wordpressPost.title}</h1>
                <img className="post-featured-photo" src={data.wordpressPost.jetpack_featured_media_url} alt={data.wordpressPost.featured_image_alt} />
                <small className="featured-photo-description">{data.wordpressPost.featured_image_alt}</small>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.wordpressPost.content
                    }}
                />
            </div>
        )
    }
}

export const postQuery = graphql`
    query {}
`
          
Post.propTypes = {
    data: PropTypes.object.isRequired
}