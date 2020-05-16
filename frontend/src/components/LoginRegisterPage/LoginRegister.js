import React from "react"
import LoginRegisterContent from "./LoginRegisterContent"
import Header from '../Header'
import Footer from '../Footer'

function LoginRegister() {
    return (
        <div>
            <center>
            <div className='background'>
                <Header />
                    <main className="MainContent">
                        <LoginRegisterContent />
                    </main>
                <Footer />
            </div>
            </center>
        </div>
    )
}

export default LoginRegister