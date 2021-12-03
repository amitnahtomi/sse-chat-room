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
    return <div>
        <h1>welcome to chat room</h1>
        <input ref={name} placeholder='enter your name'></input>
        <button onClick={logIn}><Link to='/chat'>go to chat</Link></button>
    </div>
}