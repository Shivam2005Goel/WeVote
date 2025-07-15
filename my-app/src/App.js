import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import VoterLogin from "./components/voter/VoterLogin.js";
import CandidateLogin from "./components/candidate/CandidateLogin.js";
import AdminLogin from "./components/admin/AdminLogin.js";
import Register from './components/Register.js';
import Candidate from "./components/candidate/Candidate.js";
import VoterPage from "./components/voter/VoterPage.js";
import Admin from "./components/admin/Admin.js";
import { useEffect, useState } from 'react';
import VoterReg from './components/admin/AdminReg.js';
import Complaints from './components/Common/Complaints.js';
import PressReleasePage from './components/Common/PressReleasePage.js'
import Instruction from './components/Common/Instruction.js'



function App() {
  const [cardStyle,setCardStyle] = useState({
    width: "15rem",
    border: "2px solid black", 
    display: "flex",
    flexDirection: "column", 
    height: "100%",
    backgroundColor : "white"
  })

  const [mode,setMode] = useState("light");
  function toggleMode(){
    if(mode === "light"){
      setMode("dark");
      setCardStyle({
        width: "15rem",
        border: "3px solid purple", 
        display: "flex",
        flexDirection: "column", 
         height: "100%",
         backgroundColor : "black"
      })
      document.body.style.backgroundColor = "black";
    }
    else{
      setMode("light");
      setCardStyle({
        width: "15rem",
        border: "2px solid black", 
        display: "flex",
        flexDirection: "column", 
        height: "100%",
        backgroundColor : "white"
     })
     document.body.style.backgroundColor = "white";
    }
  }

  const [data, setData] = useState(null);

  async function getData() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a1fb847778da4f1d87ff4833051b464c";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setData(json.articles); 
      console.log(json.articles);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);
    

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home mode = {mode} toggleMode = {toggleMode} link_av = "Home" data = {data ? data : []} cardStyle = {cardStyle}/>} />
      <Route path="/voterlogin" element={<VoterLogin mode = {mode} toggleMode = {toggleMode} link_av = "Voter" data = {data ? data : []}/>}/>
      <Route path="/candidatelogin" element={<CandidateLogin mode = {mode} toggleMode = {toggleMode} link_av = "Candidate"/>}/>
      <Route path="/adminlogin" element={<AdminLogin mode = {mode} toggleMode = {toggleMode} link_av = "Admin"/>}/>
      <Route path="/register" element={<Register mode = {mode} toggleMode = {toggleMode} link_av = "Register" data = {data ? data : []}/>}/>
      <Route path="/loginvoter" element={<VoterPage mode = {mode} toggleMode = {toggleMode} link_av = "LoginVoter" data = {data ? data : []}/>}/>
      <Route path="/logincandidate" element={<Candidate mode = {mode} toggleMode = {toggleMode} link_av = "LoginCandidate" data = {data ? data : []} />}/>
      <Route path="/loginadmin" element={<Admin mode = {mode} toggleMode = {toggleMode} link_av = "LoginAdmin" data = {data ? data : []}/>}/>
      <Route path="/loginvoter/dashboard" element={<VoterPage mode = {mode} toggleMode = {toggleMode} link_av = "LoginVoterDashboard" data = {data ? data : []}/>}/>
      <Route path="/loginvoter/candidate" element={<VoterPage mode = {mode} toggleMode = {toggleMode} link_av = "LoginVoterCandidate" data = {data ? data : []}/>}/>
      <Route path="/loginvoter/vote" element={<VoterPage mode = {mode} toggleMode = {toggleMode} link_av = "LoginVoterVote" data = {data ? data : []}/>}/>
      <Route path="/loginvoter/partys" element={<VoterPage mode = {mode} toggleMode = {toggleMode} link_av = "LoginVoterPartys" data = {data ? data : []}/>}/>
      <Route path="/loginvoter/results" element={<VoterPage mode = {mode} toggleMode = {toggleMode} link_av = "LoginVoterResults" data = {data ? data : []}/>}/>
      <Route path="/loginvoter/instructions" element={<VoterPage mode = {mode} toggleMode = {toggleMode} link_av = "LoginVoterInstructions" data = {data ? data : []}/>}/>
      <Route path="/loginvoter/pressrelease" element={<VoterPage mode = {mode} toggleMode = {toggleMode} link_av = "LoginVoterPressRelease" data = {data ? data : []}/>}/>
      <Route path="/loginvoter/complaint" element={<VoterPage mode = {mode} toggleMode = {toggleMode} link_av = "LoginVoterComplaint" data = {data ? data : []}/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
