import React from 'react'
import { Router } from "@reach/router"
import Account from '../components/app/auth/Account'
import Enter from '../components/app/auth/Enter'
import Home from '../components/app/Home'
import Post from '../components/templates/Post'

const App = () => {

    return(
        <Router basepath="/">
            <Home default/>

            <Account path="/auth"/>
            <Enter path="/auth/enter"/>

            
        </Router>
    )
}

export default App