import React from "react"

function LinkInput() {
    return (
        <div>
            <linkinput className="LinkInput">
                <h1>Paste your link below:</h1>
                <input type="text" name="link"></input>
                <button>Send</button>
            </linkinput>
        </div>
    )
}

export default LinkInput