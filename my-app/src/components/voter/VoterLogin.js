import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

export default function VoterLogin(props) {
  const navigate = useNavigate();
  const [voterCredentials, setvoterCredentials] = useState({
    aadharNo: "",
    voterId: "",
    password: "",
  });

  function handlevoterChange(e) {
    setvoterCredentials({
      ...voterCredentials,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    // LOGIN AUTH REQUEST
    try {
      const response = await fetch("http://localhost:5000/api/auth/voter/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(voterCredentials),
      });
   
      if (!response.ok) {
        throw new Error("Login failed");
      }
   
      const data = await response.json();
      localStorage.setItem("authToken", data.authToken);
   
      navigate('/loginvoter');
   } catch (error) {
      console.error("Error:", error);
   }


  }

  let myStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url("/vote-india-image.webp")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "red",
    alignItems: "start" /* Centers vertically */,
    display: "flex",
    justifyContent: "center" /* Centers horizontally */,
  };
  let checkop = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div>
      <Navbar
        mode={props.mode}
        toggleMode={props.toggleMode}
        data={props.data}
        link_av={props.link_av}
      />
      <div style={myStyle}>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            width: "40vw",
            padding: "20px",
            paddingTop: "5px",
            color: "white",
            marginBlockStart: "40px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="col-md-12 mb-1">
              <label htmlFor="validationDefault01">Aadhar No</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Aadhar Number"
                name="aadharNo"
                value={voterCredentials.aadharNo}
                onChange={handlevoterChange}
                minLength={12}
                maxLength={12}
                required
              />
            </div>

            <div className="col-md-12 mb-1 ">
              <label htmlFor="validationDefault02">Voter Id</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Enter Your Voter Id"
                name="voterId"
                value={voterCredentials.voterId}
                onChange={handlevoterChange}
                minLength={10}
                maxLength={10}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                style={{ width: "50vm" }}
                name="password"
                value={voterCredentials.password}
                onChange={handlevoterChange}
                minLength={6}
              
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={checkop}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
