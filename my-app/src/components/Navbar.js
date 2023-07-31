import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about_title}</Link>
              </li>

            </ul>
            {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button> 
 
  </form>*/}
            <div className={`form-check form-switch mx-2  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Night Mode</label>
            </div>
            <div className={`form-check form-switch mx-2 text-${props.mode ==='light'? 'red':'light'}`}>
              <input className="form-check-input" onClick={props.togglered}  type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Mode</label>
            </div>

          </div>
        </div>
      </nav></div>
  )
}

//we use this proptypes property to specify the type of input u are giving for future reference
//first we need to import the proptypes
Navbar.protoTypes = {
  title: PropTypes.string.isRequired,// here we can use another prop which is isRequired,this make that u need top put the tittle otherwise it throws error
  about_title: String
}
//Inorder to use isrequired we need to cmmnt out defaultprops bcoz isrequired gets the defaultprops argument

Navbar.defaultProps = {
  title: "title is required",
  about_title: "About"
}
