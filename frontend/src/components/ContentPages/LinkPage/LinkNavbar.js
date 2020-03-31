import React from "react"

import {
  Link
} from "react-router-dom";

class LinkNavbar extends React.Component{
    render() {
        return (
            <div>
              <center>
              <ul className="nav">
                <li><Link to='/my-crawls'>My Crawls</Link></li>
                <li><Link to='/new-crawl'><u>New Crawl</u></Link></li>
                <li><Link to='/my-account'>My Account</Link></li>
                <li><a href="/">Logout</a></li>
              </ul>
              </center>
            </div>
        );
    }
}

export default LinkNavbar