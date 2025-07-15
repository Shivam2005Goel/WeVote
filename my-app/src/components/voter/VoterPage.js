import React from 'react';
import { Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Candidates from './Candidates';
import Party from './Party'
import Vote from './Vote'
import PressReleasePage from '../Common/PressReleasePage';
import Complaints from '../Common/Complaints';
import Instruction from '../Common/Instruction';

export default function VoterNav(props) {
  let myStyle = {
    height: "60px",
    borderRight: "1px solid black"
};

  return (
    <div style={{backgroundColor : "black"}}>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100" style={myStyle}>
              
              {/* Menu Heading */}
              <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </Link>

              {/* Navigation Links */}
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li>
                  <Link to="/loginvoter/dashboard" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-speedometer2"></i> 
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/loginvoter/candidate" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i> 
                    <span className="ms-1 d-none d-sm-inline">Candidate</span>
                  </Link>
                </li>
                <li>
                  <Link to="/loginvoter/vote" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i> 
                    <span className="ms-1 d-none d-sm-inline">Vote</span>
                  </Link>
                </li>
                <li>
                  <Link to="/loginvoter/partys" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i> 
                    <span className="ms-1 d-none d-sm-inline">Party's</span>
                  </Link>
                </li>
                <li>
                  <Link to="/loginvoter/results" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i> 
                    <span className="ms-1 d-none d-sm-inline">Results</span>
                  </Link>
                </li>
                <li>
                  <Link to="/loginvoter/complaint" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i> 
                    <span className="ms-1 d-none d-sm-inline">Complaint</span>
                  </Link>
                </li>
                <li>
                  <Link to="/loginvoter/instructions" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i> 
                    <span className="ms-1 d-none d-sm-inline">Instructions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/loginvoter/pressrelease" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i> 
                    <span className="ms-1 d-none d-sm-inline">Press Releases</span>
                  </Link>
                </li>
              </ul>

              <hr />

              {/* Profile Dropdown */}
              <div className="dropdown pb-4">
                <button className="btn btn-dark dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="Profile" width="30" height="30" className="rounded-circle"/>
                  <span className="d-none d-sm-inline mx-1">Profile</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li><Link className="dropdown-item" to="/loginvoter/profile">Profile</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/loginvoter/signout">Sign out</Link></li>
                </ul>
              </div>

            </div>
          </div>

          {/* Content Area */}
          <div className="col py-3">
            {props.link_av === "LoginVoterDashboard" && <Dashboard/>}
            {props.link_av === "LoginVoterCandidate" && <Candidates/>}
            {props.link_av === "LoginVoterVote" && <Vote/>}
            {props.link_av === "LoginVoterPartys" && <Party/>}
            {props.link_av === "LoginVoterInstructions" && <Instruction/>}
            {props.link_av === "LoginVoterPressRelease" && <PressReleasePage/>}
            {props.link_av === "LoginVoterComplaint" && <Complaints/>}
            {props.link_av === "LoginVoter" && <Dashboard/>}
            {/* {props.link_av === "LoginVoterResults" && <Results/>} */}

          </div>
        </div>
      </div>
    </div>
  );
}
