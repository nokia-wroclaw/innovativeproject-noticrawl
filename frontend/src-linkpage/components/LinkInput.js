import React from "react"

function LinkInput() {
    return (
        <div> 
            <linkinput className="LinkInput">
                {/* eventually: formAction, formMethod inside of input element*/}
                {/* action should call endpoint on backend */}
                <form action="./path" method="GET">
                    <h1>Paste your link below</h1>
                    <input type="text" name="websiteLink"  pattern="https?://.+" required  />
                    <input type="submit" value="Go to website" />
                    <h5>Remember that your link should start with "http://".</h5>  
                </form>
            </linkinput>
        </div>
    )
}

export default LinkInput