import React, { useRef } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function LogPage(props) {
    const name = useRef(null)
    return <div>
        <h1>welcome to chat room</h1>
        <input ref={name} placeholder='enter your name'></input>
        <button onClick={props.onClick}><Link to='/chat'>submit</Link></button>
    </div>
}