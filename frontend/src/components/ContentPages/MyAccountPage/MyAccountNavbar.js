import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import "../navbar.css"

const colors = [
  'blue',
]
class ExampleMenu extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  state = { activeItem: 'My Account' }

  moveToMyAccount() {
    window.location.assign("./my-account")
  }
  moveToNewCrawl() {
    window.location.assign("./new-crawl")
  }
  moveToMyCrawls() {
    window.location.assign("./my-crawls")
  }
  Logout() {
    window.location.assign("./")
  }

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <div className="navbar">
      <Menu color={color} widths={4} size="small">
        <Menu.Item
          name='New Crawl'
          active={activeItem === 'New Crawl'}
          onClick={this.moveToNewCrawl}
        />
        <Menu.Item
          name='My Crawls'
          active={activeItem === 'My Crawls'}
          onClick={this.moveToMyCrawls}
        />
        <Menu.Item
          name='My Account'
          active={activeItem === 'My Account'}
          onClick={this.moveToMyAccount}
        />
        <Menu.Item
          name='Logout'
          active={activeItem === 'Logout'}
          onClick={this.Logout}
        />
      </Menu>
      </div>
    )
  }
}

const MenuExampleColoredMenus = () => {
  const menus = colors.map((color) => <ExampleMenu color={color} key={color} />)

  return <div>{menus}</div>
}

export default MenuExampleColoredMenus

/*
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
*/