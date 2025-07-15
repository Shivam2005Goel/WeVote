import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function VoterReg() {
    const navigate = useNavigate();
    const [adminCredentials,setadminCredentials] = useState({
        fname : "",
        lname : "",
        email : "",
        phoneNo : "",
        password : "",
        confirmPassword : ""
    });

    function handleadminChange(e){
        setadminCredentials({...adminCredentials, [e.target.name] : e.target.value});
    }

    function handleSubmit(){
        if(adminCredentials.password !== adminCredentials.confirmPassword){
            alert("Password and Confirm Password must match");
            navigate("/register");
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className="form-row d-flex justify-content-between">
            <div className="col-md-5 mb-1">
              <label for="validationDefault01">First name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="First name"
                name = "fname"
                value = {adminCredentials.fname}
                onChange={handleadminChange}
                required
              />
            </div>
            <div className="col-md-5 mb-1">
              <label for="validationDefault02">Last name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Last name"
                name = "lname"
                value = {adminCredentials.lname}
                onChange={handleadminChange}
                required
              />
            </div>
          </div>

          <div className="form-row d-flex justify-content-between">
            <div className="col-md-5 mb-1">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Email"
                name = "email"
                value = {adminCredentials.email}
                onChange={handleadminChange}
              />
            </div>
            <div className="col-md-5 mb-1">
              <label for="phone_no">Phone Number</label>
              <input
                type="text"
                name="phoneNo"
                data-validation="number"
                data-validation-allowing="negative,number"
                datavalidation-ignore="$"
                required="required"
                class="form-control"
                id="phone_no"
                placeholder="Phone Number"
                value = {adminCredentials.phoneNo}
                onChange={handleadminChange}
                minLength={10}
                maxLength={10}
              />
            </div>
          </div>

          <div className="form-row d-flex justify-content-between">

            <div class="col-md-5 mb-1">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                style={{ width: "50vm" }}
                name = "password"
                value = {adminCredentials.password}
                onChange={handleadminChange}
                placeholder='Enter the Password'
                minLength={6}
              />
            </div>

            <div class="col-md-5 mb-1">
              <label for="exampleInputPassword1" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                style={{ width: "50vm" }}
                name = "confirmPassword"
                value = {adminCredentials.confirmPassword}
                onChange={handleadminChange}
                placeholder='Confirm Your Password'
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
              <label className="form-check-label" for="invalidCheck2">
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
  )
}
