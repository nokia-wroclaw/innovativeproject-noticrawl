import React from "react"

function Crawl(props) {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Link: {props.link}</h3>
            <hr/>
        </div>
    )
}

export default Crawl