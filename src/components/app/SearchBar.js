import React, { Component, useState } from 'react';
import fontAwesome from '@fortawesome/fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, useStaticQuery } from 'gatsby';

const SearchBar = () => {

    const data = useStaticQuery(graphql`
        query {
            allStrapiLocation(sort: {fields: name}, filter: {enabled: {eq: true}}) {
            nodes {
                id
                name
            }
            }
        }
    `)

    const [search, setSearch] = useState('')
    const [type, setType] = useState(0)
    const [locations, setLocations] = useState(data.allStrapiLocation.nodes)

    fontAwesome.library.add(faSearch)


    return (
        <div className="input-group input-group-lg mb-3">
            <input type="text" className="form-control" value={search} onChange={e => setSearch(e.target.value)} placeholder="Buty trampki..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <select className="custom-select col-3" defaultValue="">
                <option>Cała Polska</option>
                {locations.map((node) => {
                    return <option value={node.id} key={node.id}>{node.name}</option>
                })}
            </select>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><FontAwesomeIcon icon="search" /></button>
                <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split bg-dark d-none d-sm-inline-block" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                    <a className={ (type == 0) ? "dropdown-item active" : "dropdown-item" } onClick={() => setType(0)} href="#">Szukaj w tytule</a>
                    <a className={ (type == 1) ? "dropdown-item active" : "dropdown-item" } onClick={() => setType(1)} href="#">Szukaj w tytule i opisie</a>
                    <div role="separator" className="dropdown-divider"></div>
                    <a className="dropdown-item disabled" href="#">Szukaj użytkownika</a>
                </div>
            </div>
        </div>
    );
}

export default SearchBar