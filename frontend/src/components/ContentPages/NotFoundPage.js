import React from "react"
import Header from '../Header'
import Footer from '../Footer'
import error from '../../media/404-cat.png'

import {BrowserRouter as Router, Switch, Link} from "react-router-dom";

function MyCrawlsMainContent() {
    return (
        <div>
        <center>
        <div className='background'>
            <Header />
                <main className="MainContent">
                <div className="LinkInput">
                    <h2>I'm really sorry, but this page doesn't exist</h2>
                    <img src={error} height="170px" width="150px" alt="how dare you?" />
                    <h4>Go back to the right path by clicking button below...</h4>
                    <Router forceRefresh={true}><Switch><Link to="/"><button>Cats are better than dogs!</button></Link></Switch></Router>
                 </div>
                </main>
            <Footer />
        </div>
        </center>
    </div>
    )
}

export default MyCrawlsMainContent