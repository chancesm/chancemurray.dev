module.exports = {
  siteMetadata: {
    title: `ChanceMurray.dev`,
  },
  plugins: [
    // Pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    // Posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'blog',
      },
    },
    // Projects
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: 'projects',
      },
    },
    // MDX
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        root: __dirname,
        gatsbyRemarkPlugins: [
          `gatsby-remark-embedder`,
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: `Cobalt2`,
              extensions: [`theme-cobalt2`],
            },
          },
        ],
      },
    },
    // Style Stuff
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
