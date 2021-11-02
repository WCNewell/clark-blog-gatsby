require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `Clark Newell`,
        description: `portfolio and tech blog`,
        keywords: `gatsby sanity react clark newell web development tech blog`,
        author: `@gatsbyjs and @WCNewell`,
        siteUrl: 'https://www.clarknewell.tech'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
        resolve: `gatsby-source-sanity`,
          options: {
            projectId: 'ry5jtz8e',
            dataset: 'production',
            watchMode: true,
            token: process.env.SANITY_TOKEN,  
          },
        },
        {
        resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
        },
        {
        resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`
            },
        },  
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,   
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-use-dark-mode`,
        {
        resolve: `gatsby-plugin-react-svg`,
          options: {
            rule: {
              include: /assets/
            }
          }
        },
        {
        resolve: `gatsby-plugin-manifest`,
          options: {
            name: `clark-newell-blog`,
            short_name: `blog`,
            start_url: `/`,
            background_color: `#FFFFFF`,
            theme_color: `#FFFFFF`,
            display: `minimal-ui`,
            icon: `src/images/clark-logo-white.png`, // This path is relative to the root of the site.
          },
        },
    // this (optional) plugin enables Progressive Web App + Offline functionality with a ServiceWorker
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    ],
}
