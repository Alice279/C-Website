exports.createPages = ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: `/developers/assets`,
    component: require.resolve(`./src/pages/developers/resources.js`),
  })
}
