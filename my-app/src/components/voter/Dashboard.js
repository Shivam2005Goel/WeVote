// VoterDashboard.js
import React from 'react';
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4" style={{color : "white"}}>Voter Dashboard</h1>
      <div className="row">

        {/* Candidates Card */}
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Candidates</div>
            <div className="card-body">
              <h5 className="card-title">View All Candidates</h5>
              <p className="card-text">Check details of all contesting candidates.</p>
              <Link to="/loginvoter/candidate" className="btn btn-light">View Candidates</Link>
            </div>
          </div>
        </div>

        {/* Vote Card */}
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Vote</div>
            <div className="card-body">
              <h5 className="card-title">Cast Your Vote</h5>
              <p className="card-text">Exercise your right to vote securely.</p>
              <Link to="/loginvoter/vote" className="btn btn-light">Cast Vote</Link>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="col-md-4">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Results</div>
            <div className="card-body">
              <h5 className="card-title">View Election Results</h5>
              <p className="card-text">See the latest election results.</p>
              <Link to="/loginvoter/results" className="btn btn-light">View Results</Link>
            </div>
          </div>
        </div>

      </div>

      <div className="row">
        
        {/* Party's Card */}
        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-header">Party's</div>
            <div className="card-body">
              <h5 className="card-title">View Party's Details</h5>
              <p className="card-text">Get insights on contesting parties.</p>
              <Link to="/loginvoter/partys" className="btn btn-light">View Party's</Link>
            </div>
          </div>
        </div>

        {/* Complaint Card */}
        <div className="col-md-4">
          <div className="card text-white bg-info mb-3">
            <div className="card-header">Complaint</div>
            <div className="card-body">
              <h5 className="card-title">Register a Complaint</h5>
              <p className="card-text">Report any issues or concerns.</p>
              <Link to="/loginvoter/complaint" className="btn btn-light">File Complaint</Link>
            </div>
          </div>
        </div>

        {/* Instructions Card */}
        <div className="col-md-4">
          <div className="card text-white bg-secondary mb-3">
            <div className="card-header">Instructions</div>
            <div className="card-body">
              <h5 className="card-title">Voting Instructions</h5>
              <p className="card-text">Learn how to cast your vote.</p>
              <Link to="/loginvoter/instructions" className="btn btn-light">View Instructions</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
