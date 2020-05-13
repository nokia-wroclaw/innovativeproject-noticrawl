import React from "react"
import LoginRegisterPanel from "./LoginRegisterPanel"
import Header from '../Header'
import Footer from '../Footer'

function LoginContentBox() {
    return (
        <div>
            <center>
            <div className='background'>
                <Header />
                    <main className="MainContent">
                    <LoginRegisterPanel />
                    </main>
                <Footer />
            </div>
            </center>
        </div>
    )
}

export default LoginContentBox