import React from "react"
import Navbar from './MyCrawlsNavbar.js'
import Header from '../../Header'
import Footer from '../../Footer'

function MyCrawlsMainContent() {
    return (
        <div>
        <center>
        <div className='background'>
            <Header />
                <main className="MainContent">
                <Navbar />
                </main>
            <Footer />
        </div>
        </center>
    </div>
    )
}

export default MyCrawlsMainContent