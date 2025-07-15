import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VoterReg() {
  const navigate = useNavigate();
  const [voterCredentials, setvoterCredentials] = useState({
    fname: "",
    lname: "",
    dob: "",
    gender: "",
    city: "",
    state: "",
    aadharNo: "",
    voterId: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });

  function handlevoterChange(e) {
    setvoterCredentials({
      ...voterCredentials,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (voterCredentials.password !== voterCredentials.confirmPassword) {
      alert("Password and Confirm Password must match");
      navigate("/register");
    }

    //REGISTER REQUEST
    const response = await fetch(
      "http://localhost:5000/api/auth/voter/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(voterCredentials),
      }
    );
    const data = await response.json();
    console.log(data);
    navigate("/voterlogin");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row d-flex justify-content-between">
          <div className="col-md-5 mb-1">
            <label htmlFor="validationDefault01">First name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="First name"
              name="fname"
              value={voterCredentials.fname}
              onChange={handlevoterChange}
              required
            />
          </div>
          <div className="col-md-5 mb-1">
            <label htmlFor="validationDefault02">Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Last name"
              name="lname"
              value={voterCredentials.lname}
              onChange={handlevoterChange}
              required
            />
          </div>
        </div>

        <div className="form-row d-flex justify-content-between">
          <div className="col-md-5 mb-1">
            <label htmlFor="dob"> Date of Birth: </label>
            <br></br>
            <input
              type="date"
              id="dob"
              name="dob"
              value={voterCredentials.dob}
              onChange={handlevoterChange}
              required
            />
          </div>

          <div className="col-md-5 mb-1">
            <label htmlFor="gender">Gender:</label>
            <br></br>
            <select
              id="gender"
              name="gender"
              value={voterCredentials.gender}
              onChange={handlevoterChange}
              required
            >
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-row d-flex justify-content-between">
          <div className="col-md-3 mb-1">
            <label htmlFor="validationDefault03">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
              name="city"
              value={voterCredentials.city}
              onChange={handlevoterChange}
              required
            />
          </div>
          <div className="col-md-3 mb-1">
            <label htmlFor="validationDefault04">State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="State"
              name="state"
              value={voterCredentials.state}
              onChange={handlevoterChange}
              required
            />
          </div>
          <div className="col-md-3 mb-1">
            <label htmlFor="validationDefault05">Zip</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault05"
              placeholder="Zip"
              name="zip"
              value={voterCredentials.zip}
              onChange={handlevoterChange}
              required
            />
          </div>
        </div>

        <div className="form-row d-flex justify-content-between">
          <div className="col-md-5 mb-1">
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
          <div className="col-md-5 mb-1 ">
            <label htmlFor="validationDefault02">Voter Id</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Voter Id"
              name="voterId"
              value={voterCredentials.voterId}
              onChange={handlevoterChange}
              minLength={10}
              maxLength={10}
              required
            />
          </div>
        </div>

        <div className="form-row d-flex justify-content-between">
          <div className="col-md-5 mb-1">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email"
              name="email"
              value={voterCredentials.email}
              onChange={handlevoterChange}
            />
          </div>
          <div className="col-md-5 mb-1">
            <label htmlFor="phone_no">Phone Number</label>
            <input
              type="text"
              name="phoneNo"
              data-validation="number"
              data-validation-allowing="negative,number"
              datavalidation-ignore="$"
              required="required"
              className="form-control"
              id="phone_no"
              placeholder="Phone Number"
              value={voterCredentials.phoneNo}
              onChange={handlevoterChange}
              minLength={10}
              maxLength={10}
            />
          </div>
        </div>

        <div className="form-row d-flex justify-content-between">
          <div className="col-md-5 mb-1">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              style={{ width: "50vm" }}
              name="password"
              value={voterCredentials.password}
              onChange={handlevoterChange}
              placeholder="Enter the Password"
              minLength={6}
            />
          </div>

          <div className="col-md-5 mb-1">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              style={{ width: "50vm" }}
              name="confirmPassword"
              value={voterCredentials.confirmPassword}
              placeholder="Confirm Your Password"
              onChange={handlevoterChange}
              minLength={6}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
