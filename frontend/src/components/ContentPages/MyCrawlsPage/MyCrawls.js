import React from "react"
import Navbar from './MyCrawlsNavbar.js'
import Header from '../../Header'
import Footer from '../../Footer'
import MyCrawlsContent from "./MyCrawlsContent.js"

function MyCrawls() {
    return (
        <div>
        <center>
        <div className='background'>
            <Header />
                <main className="MainContent">
                    <MyCrawlsContent />
                    <Navbar />
                </main>
            <Footer />
        </div>
        </center>
    </div>
    )
}

export default MyCrawls