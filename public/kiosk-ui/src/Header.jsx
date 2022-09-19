import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className="navbar is-fixed-top is-transparent is-dark is-size-3 has-text-weight-semibold">
        <div className="navbar-menu navbar-start is-active">
            <div className="navbar-item"><Link to='/' className="has-text-white  px-5">ASSETS</Link></div>
            <div className="navbar-item"><Link to='/hide'  className="has-text-grey  px-5">BACK</Link></div>
        </div>
    </nav>
)

export default Header