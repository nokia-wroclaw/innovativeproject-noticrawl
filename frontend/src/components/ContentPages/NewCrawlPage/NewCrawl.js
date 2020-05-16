import React from "react"
import NewCrawlContent from './NewCrawlContent'
import Navbar from './NewCrawlNavbar'
import Header from '../../Header'
import Footer from '../../Footer'

function NewCrawl() {
    return (
        <div>
            <center>
            <div className='background'>
                <Header />
                    <main className="MainContent">
                    <NewCrawlContent />
                    <Navbar />
                    </main>
                <Footer />
            </div>
            </center>
        </div>
    )
}

export default NewCrawl