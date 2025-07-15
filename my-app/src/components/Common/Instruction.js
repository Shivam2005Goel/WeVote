// InstructionsPage.js
import React from 'react';

export default function InstructionsPage() {
  const instructions = [
    "Ensure you are registered to vote before proceeding.",
    "Carry a valid ID proof to the polling station.",
    "Follow the instructions provided on the voting machine.",
    "Mark your vote carefully and confirm your selection.",
    "For any assistance, ask the presiding officer at the booth.",
    "Check your vote receipt before leaving the booth."
  ];

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4">Voting Instructions</h2>
        <ul className="list-group">
          {instructions.map((instruction, index) => (
            <li key={index} className="list-group-item">
              {index + 1}. {instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
