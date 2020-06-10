import React from "react"
import Header from '../Header'
import Footer from '../Footer'
import Button from '@material-ui/core/Button';
import error from '../../media/404-cat.png'

import {BrowserRouter as Router, Switch, Link} from "react-router-dom";

function NotFoundPage() {
    return (
        <div>
        <center>
        <div className='background'>
            <Header />
                <main className="MainContent">
                <div className="PageContent">
                    <h2>I'm really sorry, but this page doesn't exist</h2>
                    <img src={error} height="170px" width="150px" alt="how dare you?" />
                    <h4>Go back to the right path by clicking button below...</h4>
                    <Router forceRefresh={true}><Switch><Link to="/"><Button variant="contained" color="primary">Cats are better than dogs!</Button></Link></Switch></Router>
                 </div>
                </main>
            <Footer />
        </div>
        </center>
    </div>
    )
}

export default NotFoundPage