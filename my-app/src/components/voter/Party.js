// PartySelection.js
import React, { useState } from 'react';

function Party() {
  const [parties, setParties] = useState([
    { id: 1, name: "Party A", symbol: "🔴" },
    { id: 2, name: "Party B", symbol: "🔵" },
    { id: 3, name: "Party C", symbol: "🟢" },
  ]);

  const [selectedParty, setSelectedParty] = useState("");

  const handlePartySelect = () => {
    if (selectedParty) {
      alert(`You have selected ${selectedParty}`);
    } else {
      alert("Please select a party.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4">Select Your Party</h2>

        <div className="mb-3">
          <label htmlFor="partySelect" className="form-label">Select Party</label>
          <select
            className="form-select form-select-lg"
            id="partySelect"
            value={selectedParty}
            onChange={(e) => setSelectedParty(e.target.value)}
          >
            <option value="">-- Select Party --</option>
            {parties.map((party) => (
              <option key={party.id} value={party.name}>
                {party.symbol} {party.name}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-success btn-lg w-100" onClick={handlePartySelect}>
          Confirm Selection
        </button>
      </div>
    </div>
  );
}

export default Party;
