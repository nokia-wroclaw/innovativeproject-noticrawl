import React from "react"
import Navbar from './MyAccountNavbar.js'
import Header from '../../Header'
import Footer from '../../Footer'
import MyAccountContent from "./MyAccountContent.js"

function MyAccount() {
    return (
        <div>
        <center>
        <div className='background'>
            <Header />
                <main className="MainContent">
                    <MyAccountContent />
                    <Navbar />
                </main>
            <Footer />
        </div>
        </center>
    </div>
)
}

export default MyAccount