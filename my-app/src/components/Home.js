import {React,useState} from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <Navbar mode ={props.mode} toggleMode={props.toggleMode} data = {props.data} link_av = {props.link_av}/>
      <div className={`container d-flex justify-content-between my-4`}>

  <Link to = "/voterlogin"> 
    <div className={`card bg-${props.mode}`} style={props.cardStyle}>
      <img className="card-img-top" src="/VoterImg.png" alt="Card image cap"/>
      <div className="card-body">
        <p className="card-text"><h2 style = {{textAlign:"center",color: props.mode === "light" ? "blue" : "white"}}>Voter<br/>Click Here To Vote!!</h2></p>
      </div>
    </div>
  </Link>

  <Link to= "/candidatelogin"> 
  <div className={`card bg-${props.mode}`} style={props.cardStyle}>
    <img className="card-img-top" src="/CandidateImage.jpg" alt="Card image cap"/>
    <div className="card-body">
      <p className="card-text"><h2 style = {{textAlign:"center",color: props.mode === "light" ? "blue" : "white"}}>Candidate<br/>Check Your Status!!</h2></p>
    </div>
  </div>
  </Link>

<Link to = "/adminlogin"> 
  <div className={`card bg-${props.mode}`} style={props.cardStyle}>
      <img className="card-img-top" src="/AdminImage.jpg" alt="Card image cap"/>
      <div className="card-body">
        <p className="card-text"><h2 style = {{textAlign:"center",color: props.mode === "light" ? "blue" : "white"}}>Admin<br/>Plz Manage!!</h2></p>
      </div>
  </div>
</Link>
      </div>

    </div>
  );
}
