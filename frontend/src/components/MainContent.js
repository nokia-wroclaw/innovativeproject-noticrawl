import React from "react"
import LinkInput from './LinkInput'
import Navbar from './Navbar'

function MainContent() {
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

export default MainContent