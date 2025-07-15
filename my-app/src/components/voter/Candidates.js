// CandidateSelection.js
import React, { useState, useEffect } from 'react';

function Candidates() {
  const [states, setStates] = useState([
    { name: "State A", constituencies: ["Constituency A1", "Constituency A2"] },
    { name: "State B", constituencies: ["Constituency B1", "Constituency B2"] },
    { name: "State C", constituencies: ["Constituency C1", "Constituency C2"] },
  ]);

  const [selectedState, setSelectedState] = useState("");
  const [constituencies, setConstituencies] = useState([]);

  // Update constituencies based on selected state
  useEffect(() => {
    if (selectedState) {
      const stateData = states.find((state) => state.name === selectedState);
      setConstituencies(stateData?.constituencies || []);
    } else {
      setConstituencies([]);
    }
  }, [selectedState]);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4">Select Your Constituency</h2>

        <div className="mb-3">
          <label htmlFor="stateSelect" className="form-label">Select State</label>
          <select
            className="form-select form-select-lg"
            id="stateSelect"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">-- Select State --</option>
            {states.map((state, index) => (
              <option key={index} value={state.name}>{state.name}</option>
            ))}
          </select>
        </div>

        {constituencies.length > 0 && (
          <div className="mb-3">
            <label htmlFor="constituencySelect" className="form-label">Select Constituency</label>
            <select
              className="form-select form-select-lg"
              id="constituencySelect"
            >
              <option value="">-- Select Constituency --</option>
              {constituencies.map((constituency, index) => (
                <option key={index} value={constituency}>{constituency}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default Candidates;