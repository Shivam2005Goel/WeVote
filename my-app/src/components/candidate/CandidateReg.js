import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

 function CandidateReg() {
    const navigate = useNavigate();
    const [candidateCredentials,setcandidateCredentials] = useState({
            fname : "",
            lname : "",
            dob : "",
            gender : "",
            city : "",
            state : "",
            aadharNo : "",
            voterId : "",
            email : "",
            phoneNo : "",
            password : "",
            confirmPassword : ""
    });
    
    function handlecandidateChange(e){
        setcandidateCredentials({...candidateCredentials, [e.target.name] : e.target.value});
    }

    function handleSubmit(){
        if(candidateCredentials.password !== candidateCredentials.confirmPassword){
            alert("Password and Confirm Password must match");
            navigate("/register");
        }
        // do some Work
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
                value = {candidateCredentials.fname}
                onChange={handlecandidateChange}
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
                value = {candidateCredentials.lname}
                onChange={handlecandidateChange}
                required
              />
            </div>
          </div>

          <div className="form-row d-flex justify-content-between">
            <div className="col-md-5 mb-1">
              <label for="dob"> Date of Birth: </label>
              <br></br>
              <input type="date" id="dob" name="dob" required />
            </div>
            <div className="col-md-5 mb-1">
              <label for="gender">Gender:</label>
              <br></br>
              <select id="gender" name="gender" required>
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
              <label for="validationDefault03">City</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                placeholder="City"
                name = "city"
                value = {candidateCredentials.city}
                onChange={handlecandidateChange}
                required
              />
            </div>
            <div className="col-md-3 mb-1">
              <label for="validationDefault04">State</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault04"
                placeholder="State"
                name = "state"
                value = {candidateCredentials.state}
                onChange={handlecandidateChange}
                required
              />
            </div>
            <div className="col-md-3 mb-1">
              <label for="validationDefault05">Zip</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                placeholder="Zip"
                name = "zip"
                value = {candidateCredentials.zip}
                onChange={handlecandidateChange}
                required
              />
            </div>
          </div>

          <div className="form-row d-flex justify-content-between">
            <div className="col-md-5 mb-1">
              <label for="validationDefault01">Aadhar No</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Aadhar Number"
                name = "aadharNo"
                value = {candidateCredentials.aadharNo}
                onChange={handlecandidateChange}
                minLength={12}
                maxLength={12}
                required
              />
            </div>
            <div className="col-md-5 mb-1 ">
              <label for="validationDefault02">Voter Id</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Voter Id"
                name = "voterId"
                value = {candidateCredentials.voterId}
                onChange={handlecandidateChange}
                minLength={10}
                maxLength={10}
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
                value = {candidateCredentials.email}
                onChange={handlecandidateChange}
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
                value = {candidateCredentials.phoneNo}
                onChange={handlecandidateChange}
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
                placeholder='Enter the Password'
                value = {candidateCredentials.password}
                onChange={handlecandidateChange}
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
                placeholder='Confirm Your Password'
                value = {candidateCredentials.confirmPassword}
                onChange={handlecandidateChange}
                minLength={6}
                maxLength={6}
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

export default CandidateReg
