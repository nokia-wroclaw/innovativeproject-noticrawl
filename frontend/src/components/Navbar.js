import React from "react"

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="/">My Crawls</a></li>
                <li><a href="/">New Crawl</a></li>
                <li><a href="/">My Account</a></li>
                <li><a href="/">Logout</a></li>
              </ul>
            </div>
        );
    }
}

export default Navbar