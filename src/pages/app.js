import React from 'react'
import { Router } from "@reach/router"
import Account from '../components/app/auth/Account'
import Enter from '../components/app/auth/Enter'
import Home from '../components/app/Home'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import Post from '../components/templates/Post'

const App = ({location}) => {
    const redirect = location.pathname.split('/').pop()

    return(
        <Router basepath="/app">
            <Home default/>

            <Account path="/auth"/>
            <Enter path="/auth/enter"/>

            
        </Router>
    )
}

export default App