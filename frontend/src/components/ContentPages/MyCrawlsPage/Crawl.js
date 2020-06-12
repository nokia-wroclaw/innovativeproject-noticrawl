import React from "react"

function Crawl(props) {
    return (
        <div>
            <hr/>
                <div className="MyCrawlsText">
                    <text>Crawl Name: {props.name}</text>
                    <br />
                    <text><a href={props.link}>{props.link}</a></text>
                </div>
            <hr/>
        </div>
    )
}

export default Crawl