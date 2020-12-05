import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import fontAwesome from '@fortawesome/fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from "./nav"

const Header = ({ siteTitle }) => {

	fontAwesome.library.add(faUser)

	return (
		<Nav />
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
