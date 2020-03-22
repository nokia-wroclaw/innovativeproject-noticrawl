import React from "react"

function LinkInput() {
    return (
        <div>
            <linkinput className="LinkInput">
                <h1>Wklej swój link poniżej</h1>
                <input type="text" name="link"></input>
                <button>Prześlij</button>
            </linkinput>
        </div>
    )
}

export default LinkInput