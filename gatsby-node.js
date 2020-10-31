const path = require('path');

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions
	// page.matchPath is a special key that's used for matching pages
	// only on the client.
	if (page.path.match(/^\/app/)) {
		page.matchPath = "/app/*"
		// Update the page.
		createPage(page)
	}
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const queryResults = await graphql(`
    query {
      allStrapiPost(filter: {verified: {eq: true}, enabled: {eq: true}}) {
        nodes {
          id
        }
      }
    }
  `);
	const productTemplate = path.resolve(`src/components/templates/Post.js`);
	queryResults.data.allStrapiPost.nodes.forEach(node => {
		createPage({
			path: `/offer/${node.id}`,
			component: productTemplate,
			context: {
				id: node.id
			}
		});
	});
};