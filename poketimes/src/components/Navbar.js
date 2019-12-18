import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    // programatically redirects
    // props.history.push('/about')
    // console.log(props);
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to='/'>Home</Link></li>
                    {/* navlink adding active class when on that route */}
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
// add this in order to work the props.history.push 
// adds props to the props object to the navbar component
export default withRouter(Navbar)