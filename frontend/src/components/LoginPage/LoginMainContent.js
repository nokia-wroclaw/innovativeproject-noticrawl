import React from "react"
import LoginPanel from "./LoginPanel"
import Header from '../Header'
import Footer from '../Footer'

function LoginMainContent() {
    return (
        <div>
            <center>
            <div className='background'>
                <Header />
                    <main className="MainContent">
                    <LoginPanel />
                    </main>
                <Footer />
            </div>
            </center>
        </div>
    )
}

export default LoginMainContent