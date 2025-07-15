import React, { useState } from 'react'
import Navbar from './Navbar'
import RegInfo from './RegInfo';

export default function Register(props) {
    let myStyle = {
        height: "100vh",
        width : "100vw",
        backgroundImage: `url("/vote-india-image.webp")`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "repeat",
        backgroundColor: "red",
        alignItems : "start", /* Centers vertically */
        display: "flex",
        justifyContent: "center", /* Centers horizontally */
   }
    const [userType,changeUser] = useState('Voter');
    const [b_color1,change_b_Color1] = useState("black");
    const [b_color2,change_b_Color2] = useState("black");
    const [b_color3,change_b_Color3] = useState("black");

    const changeToVoter=()=>{changeUser('Voter');}
    const changeToCandidate=()=>{changeUser('Candidate');}
    const changeToAdmin=()=>{changeUser('Admin');};

    const hoverMouse1=()=>{
        change_b_Color1("rgb(82, 13, 77)");
    }

    const retaincolor1=()=>{
        change_b_Color1("black");
    }
    const hoverMouse2=()=>{
        change_b_Color2("rgb(82, 13, 77)");
    }

    const retaincolor2=()=>{
        change_b_Color2("black");
    }
    const hoverMouse3=()=>{
        change_b_Color3("rgb(82, 13, 77)");
    }

    const retaincolor3=()=>{
        change_b_Color3("black");
    }
  return (
    <div>
        <Navbar mode ={props.mode} toggleMode={props.toggleMode} data = {props.data} link_av = {props.link_av}/>
    <div style = {myStyle}>
        <div style = {{backgroundColor: "rgba(0, 0, 0, 0.7)", width : "60vw", padding : "15px", paddingTop: "10px", color : "white", marginBlockStart : "20px"}}>
        <div class="btn-group d-flex justify-content-around" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" onMouseOut = {retaincolor1} onMouseOver={hoverMouse1} onClick={changeToVoter} style={{borderRight:"3px solid black", backgroundColor : b_color1}}>Voter</button>
        <button type="button" class="btn btn-primary" onMouseOut = {retaincolor2} onMouseOver={hoverMouse2} onClick={changeToCandidate} style={{borderRight:"2px solid black", backgroundColor : b_color2}}>Candidate</button>
        <button type="button" class="btn btn-primary" onMouseOut = {retaincolor3} onMouseOver={hoverMouse3} onClick={changeToAdmin} style ={{backgroundColor : b_color3}}>Admin</button>
        </div>
        <RegInfo userType = {userType}/>
        </div>
    </div>
    </div>
  )
}
