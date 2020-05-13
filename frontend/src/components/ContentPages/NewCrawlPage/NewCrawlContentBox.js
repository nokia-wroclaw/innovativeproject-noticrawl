import React from "react"
import NewCrawl from './NewCrawl'
import Navbar from './NewCrawlNavbar'
import Header from '../../Header'
import Footer from '../../Footer'



function NewCrawlContentBox() {
    return (
        <div>
            <center>
            <div className='background'>
                <Header />
                    <main className="MainContent">
                    <NewCrawl/>
                    <Navbar />
                    </main>
                <Footer />
            </div>
            </center>
        </div>
    )
}

export default NewCrawlContentBox