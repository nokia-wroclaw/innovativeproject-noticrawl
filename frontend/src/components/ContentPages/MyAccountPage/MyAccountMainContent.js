import React from "react"
import Navbar from './MyAccountNavbar.js'
import Header from '../../Header'
import Footer from '../../Footer'

function LinkMainContent() {
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

export default LinkMainContent