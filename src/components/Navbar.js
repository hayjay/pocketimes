import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
const Navbar = (props) => {
    console.log(props);
    /* To make this props.history.push work, wrap this component (Navbar) in an HOC component
        Why? Because this component isn't wrapped with the react Router element (<Route></Route>) in app.js
    */
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

//need to wrap the Navbar component in an higher order component (withRouter) so that we can pass some props to the component
//note : higher order component(withRouter) supercharges another component (Navbar) so that it could pass some props and extra features to the component (Navbar)
export default withRouter(Navbar)