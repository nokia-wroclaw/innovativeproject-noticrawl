import React from "react"
import LinkInput from './LinkInput'
import Navbar from './LinkNavbar'

function LinkContent() {
    return (
        <div>
            <center>
                <main className="MainContent">
                    <LinkInput />
                    <Navbar />
                </main>
            </center>
        </div>
    )
}

export default LinkContent