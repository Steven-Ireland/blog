/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const { NODE_ENV } = process.env;

const baseProtocol = NODE_ENV === 'production' ? 'https' : 'http';

const baseUrl = NODE_ENV === 'production' ? 'stevenire.land' : 'localhost:8000';

module.exports = {
  siteMetadata: {
    title: "Steven Ireland's Blog",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              urlOverrides: [
                {
                  id: 'twitch',
                  embedURL: (videoId) => `${baseProtocol}://${baseUrl}/${videoId}.mp4`,
                }
              ] 
            }
          },
          "gatsby-remark-prismjs",
        ]
      }
    },
  ],
};
