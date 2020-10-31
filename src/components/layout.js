/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	document.getElementsByTagName('body')[0].style.background = '#ecf0f1'

	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<main>{children}</main>
			<footer style={{
				marginTop: `2rem`
			}}>
				© {new Date().getFullYear()}, Built with {` `}
				<a href="https://www.gatsbyjs.com">Gatsby</a>
			</footer>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
