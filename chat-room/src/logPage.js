import React, { useRef } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function LogPage(props) {
    const name = useRef(null);
    const logIn = async () => {
        props.btnClick(name.current.value);
        const response = await fetch("http://localhost:8080/connect" ,{
                method: "POST",
                headers:{
                    Accept: "application/json",
                     "Content-Type": "application/json"
                },
                body: JSON.stringify({"user": name.current.value})
            })
    }
    return <div style={logStyle}>
        <h1>chat room</h1>
        <input style={inputStyle} ref={name} placeholder='user name'></input>
        <button style={buttonStyle} onClick={logIn}><Link style={linkStyle} to='/chat'>start chating</Link></button>
    </div>
}

const linkStyle = {
    textDecoration: "none",
    color: "blue"
}

const logStyle = {
    textAlign: "center",
    paddingTop: "50px",
    fontSize: "45px",
    color: "LightSkyBlue"
}

const inputStyle = {
    height: "30px",
    width: "200px",
    border: "6px outset LightGray",
    borderRadius: "100px",
    fontSize: "25px",
    marginRight: "25px",
    color: "MediumSlateBlue"
}

const buttonStyle = {
    height: "35px",
    width: "100px",
    border: "3px groove LightSkyBlue",
    backgroundColor: "LightSkyBlue",
    borderRadius: "10px",
    fontSize: "15px"
}