import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import "../../../css/navbar.css"

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
  Logout = async () => {

    const res = await fetch("/api/v1/logout", {
      method: "POST",
      body: "",
      headers: {
        "Content-Type": "application/json"
      },
    });
    
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
