import React from "react"

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <center>
              <ul id="nav">
                <li><a href="/">My Crawls</a></li>
                <li><a href="/">New Crawl</a></li>
                <li><a href="/">My Account</a></li>
                <li><a href="/">Logout</a></li>
              </ul>
              </center>
            </div>
        );
    }
}

export default Navbar