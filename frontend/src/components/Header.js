import React from "react"

import logo from '../media/logo.png';

function Header() {
    return (
        <header className="AppHeader">
            <img src={logo} className="AppLogo" alt="logo" />
        </header>
    )
}

export default Header