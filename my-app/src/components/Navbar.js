import React from 'react';
import { Link } from "react-router-dom"; // Fixed incorrect import

function Navbar(props) {
    let myStyle = {
        height: "60px",
    };

  return (
    <div style ={{backgroundColor : "black"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white" style={myStyle}>
        <div className="d-flex justify-content-start">
          <Link className="navbar-brand fs-5 mx-3" to="/" style={{ color: "pink", textDecoration : props.link_av === "Home" ? "underline" : null}}>
            <u>Home</u>
          </Link>
          <Link className="navbar-brand fs-5 mx-3" to="/results" style={{ color: "pink", textDecoration : props.link_av === "Results" ? "underline" : null }}>
            <u>Results</u>
          </Link>
          <Link className="navbar-brand fs-5 mx-3" to="/updates" style={{ color: "pink", textDecoration : props.link_av === "Updates" ? "underline" : null }}>
            <u>Updates</u>
          </Link>
          <Link className="navbar-brand fs-5 mx-3" to="#" style={{ color: "pink", textDecoration : props.link_av === "Help" ? "underline" : null }}>
            <u>Help</u>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="d-flex ms-auto align-items-center">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="form-inline ml-auto my-2 my-lg-0">
              <Link to="/">
                <button type="button" className="btn btn-primary btn-sm">Login</button>
              </Link>
            </div>
            <div className="form-inline ml-auto my-2 my-lg-0 mx-3">
              <Link to="/register">
                <button type="button" className="btn btn-primary btn-sm">Register</button>
              </Link>
            </div>
          </div>
          <div className="form-check form-switch mx-3">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === "light" ? "Dark" : "Light" } Mode`}</label>
          </div>
        </div>
      </nav>
      <marquee class = "marq" bgcolor = "black" direction = "left" style = {{color:"yellow"}}>
      {props.data && Array.isArray(props.data) ? (
    props.data.map((element, index) => (
      <a href = {element.url} style = {{textDecoration : "none", color : "yellow"}}><span key={element.url}>{element.title} &nbsp;|&nbsp; </span></a>
    ))
  ) : (
    <span>Loading news...</span>
  )}

      </marquee>
    </div>
  );
}

export default Navbar;
