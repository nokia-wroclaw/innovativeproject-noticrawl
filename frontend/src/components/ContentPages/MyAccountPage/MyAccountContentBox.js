import React from "react"
import Navbar from './MyAccountNavbar.js'
import Header from '../../Header'
import Footer from '../../Footer'
import MyAccount from "./MyAccount.js"

function MyAccountContentBox() {
    return (
        <div>
        <center>
        <div className='background'>
            <Header />
                <main className="MainContent">
                    <MyAccount />
                    <Navbar />
                </main>
            <Footer />
        </div>
        </center>
    </div>
)
}

export default MyAccountContentBox