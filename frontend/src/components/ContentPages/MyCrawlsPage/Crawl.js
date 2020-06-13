import React from "react"
import deleteIcon from "../../../media/bin-icon.png"
import editIcon from "../../../media/edit-icon.png"


function Crawl(props) {
    return (
        <div>
            <hr/>
            <div className="MyCrawlsElements">
                <div className="MyCrawlsText">
                    <text>Name: {props.name}</text>
                    <br />
                    <text><a href={props.link}>{props.link}</a></text>
                </div>
                <div className="MyCrawlsIcons">
                    <img src={editIcon} alt="Edit" height="34" width="34"/>
                    <img src={deleteIcon} alt="Delete" height="35" width="35" />
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Crawl