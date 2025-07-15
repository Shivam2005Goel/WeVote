import React from "react";
import VoterReg from "./voter/VoterReg";
import CandidateReg from "./candidate/CandidateReg"
import AdminReg from "./admin/AdminReg";

export default function RegInfo(props) {

  return (
    <div>
      {/* Voter Registration */}
      {props.userType === "Voter" && <VoterReg/>}
      {props.userType === "Candidate" && <CandidateReg/>}
      {props.userType === "Admin" && <AdminReg/>}

      {/* Candidate Registration */}
    </div>
  );
}
