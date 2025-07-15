// ComplaintPage.js
import React, { useState } from 'react';

 function Complaints() {
  const [complaint, setComplaint] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = () => {
    if (complaint) {
      alert(`Complaint submitted successfully with priority: ${priority}`);
      setComplaint("");
      setPriority("Low");
    } else {
      alert("Please enter your complaint.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4">Register a Complaint</h2>

        <div className="mb-3">
          <label htmlFor="complaintText" className="form-label">Describe Your Issue</label>
          <textarea
            className="form-control"
            id="complaintText"
            rows="4"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="prioritySelect" className="form-label">Select Priority</label>
          <select
            className="form-select"
            id="prioritySelect"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button className="btn btn-primary btn-lg w-100" onClick={handleSubmit}>
          Submit Complaint
        </button>
      </div>
    </div>
  );
}

export default Complaints;
