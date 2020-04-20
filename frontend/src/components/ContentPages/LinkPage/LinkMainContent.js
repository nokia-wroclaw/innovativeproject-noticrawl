import React from "react"
import LinkInput from './LinkInput'
import Navbar from './LinkNavbar'
import Header from '../../Header'
import Footer from '../../Footer'



function LinkContent() {
    return (
        <div>
            <center>
            <div className='background'>
                <Header />
                    <main className="MainContent">
                    <LinkInput />
                    <Navbar />
                    </main>
                <Footer />
            </div>
            </center>
        </div>
    )
}

export default LinkContent