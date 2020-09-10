module.exports = {
    siteMetadata: {
        title: 'The power of Jamstack',
        desciption: 'This website uses Gatsby, GraphQL and Netlify'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-emotion',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',

    {
        resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: /assets/
          }
        }
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'images',
            path: 'images',
        }
    }
    ]
};