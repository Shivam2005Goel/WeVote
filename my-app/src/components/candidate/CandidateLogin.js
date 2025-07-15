import React,{useState} from "react";
import Navbar from "../Navbar";


export default function CandidateLogin(props) {
  const [candidateCredentials,setcandidateCredentials] = useState({
          aadharNo : "",
          voterId : "",
          password : "",
  }); 

  function handlecandidateChange(e){
    setcandidateCredentials({...candidateCredentials, [e.target.name] : e.target.value});
}

function handleSubmit(){
    // do some Work
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

          <div className="col-md-12 mb-1 ">
              <label for="validationDefault02">Voter Id</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Enter Your Voter Id"
                name = "voterId"
                value = {candidateCredentials.voterId}
                onChange={handlecandidateChange}
                minLength={10}
                maxLength={10}
                required
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                name = "password"
                style={{ width: "50vm" }}
                value = {candidateCredentials.password}
                onChange={handlecandidateChange}
                minLength={6}
                maxLength={6}
                required
              />
            </div>

            <button type="submit" class="btn btn-primary" style={checkop}>
              Submit
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
