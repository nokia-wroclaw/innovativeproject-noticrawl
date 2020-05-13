import React from "react"
import Navbar from './MyCrawlsNavbar.js'
import Header from '../../Header'
import Footer from '../../Footer'
import MyCrawls from "./MyCrawls.js"

function MyCrawlsContentBox() {
    return (
        <div>
        <center>
        <div className='background'>
            <Header />
                <main className="MainContent">
                    <MyCrawls />
                    <Navbar />
                </main>
            <Footer />
        </div>
        </center>
    </div>
    )
}

export default MyCrawlsContentBox