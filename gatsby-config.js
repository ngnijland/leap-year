module.exports = {
  siteMetadata: {
    title: `When is the next leap year?`,
    description: `This site shows when the next leap year is and why that year is a leap year.`,
    author: `@nieknijland`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `When is the next leap year?`,
        short_name: `Leap year`,
        start_url: `/`,
        background_color: `#dcedf3`,
        theme_color: `#dcedf3`,
        display: `standalone`,
        icon: `src/images/leapyear-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
  ],
}
