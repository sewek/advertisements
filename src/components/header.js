import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import fontAwesome from '@fortawesome/fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ siteTitle }) => {

	fontAwesome.library.add(faUser)

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-none d-lg-flex">
			
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<Link className="navbar-brand ml-5" to="/app">JD</Link>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/app/auth/enter"><FontAwesomeIcon icon="user" /> Moje konto</Link>
					</li>
					<li className="nav-item">
						<Link to="/app/post/add">
							<button className="btn btn-warning">Dodaj ogłoszenie</button>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
