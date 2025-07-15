// PressReleasePage.js
import React, { useState } from 'react';

 function PressReleasePage() {
  const [pressReleases] = useState([
    { title: "Election Dates Announced", date: "2025-03-30", details: "The election commission has announced the dates for the upcoming elections..." },
    { title: "New Voting Guidelines", date: "2025-03-28", details: "The election commission has released new guidelines for secure voting..." },
    { title: "Election Results Update", date: "2025-03-25", details: "The counting of votes will begin at 8 AM on the day of the results..." }
  ]);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4">Press Releases</h2>
        {pressReleases.map((release, index) => (
          <div key={index} className="mb-3 p-3 border rounded-3">
            <h4>{release.title}</h4>
            <p className="text-muted">{release.date}</p>
            <p>{release.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PressReleasePage;
