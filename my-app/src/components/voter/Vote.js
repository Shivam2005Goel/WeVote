// VotingPage.js
import React, { useState } from 'react';

export default function VotingPage() {
  const [states, setStates] = useState(["State A", "State B", "State C"]);
  const [constituencies, setConstituencies] = useState(["Constituency 1", "Constituency 2", "Constituency 3"]);
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Candidate A" },
    { id: 2, name: "Candidate B" },
    { id: 3, name: "Candidate C" },
  ]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedConstituency, setSelectedConstituency] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState("");

  const handleVote = () => {
    if (selectedState && selectedConstituency && selectedCandidate) {
      alert(`You have successfully voted for ${selectedCandidate} in ${selectedConstituency}, ${selectedState}`);
    } else {
      alert("Please complete all selections before voting.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4">Cast Your Vote</h2>

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
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="constituencySelect" className="form-label">Select Constituency</label>
          <select
            className="form-select form-select-lg"
            id="constituencySelect"
            value={selectedConstituency}
            onChange={(e) => setSelectedConstituency(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">-- Select Constituency --</option>
            {constituencies.map((constituency, index) => (
              <option key={index} value={constituency}>
                {constituency}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="candidateSelect" className="form-label">Select Candidate</label>
          <select
            className="form-select form-select-lg"
            id="candidateSelect"
            value={selectedCandidate}
            onChange={(e) => setSelectedCandidate(e.target.value)}
            disabled={!selectedConstituency}
          >
            <option value="">-- Select Candidate --</option>
            {candidates.map((candidate) => (
              <option key={candidate.id} value={candidate.name}>
                {candidate.name}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary btn-lg w-100" onClick={handleVote}>
          Vote Now
        </button>
      </div>
    </div>
  );
}
