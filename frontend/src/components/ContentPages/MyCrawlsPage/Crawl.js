import React from "react"
import deleteIcon from "../../../media/delete-icon.png"
import editIcon from "../../../media/edit-icon-new.png"


function Crawl(props) {
    return (
        <div>
            <hr className="crawlBorder" />
            <div className="MyCrawlsElements">
                <div className="MyCrawlsText">
                    <text>Name: {props.name}</text>
                    <br />
                    <text><a href={props.link}>{props.link}</a></text>
                </div>
                <div className="MyCrawlsIcons">
                    <img src={editIcon} alt="Edit" height="28" width="28"/>
                    <span></span><span></span>
                    <img src={deleteIcon} alt="Delete" height="28" width="28" />
                </div>
            </div>
        </div>
    )
}

export default Crawl