import React, { useRef } from "react";
import { Link } from "react-router-dom";
const axios = require('axios');

export default function ChatRoom(props) {
    const massage = useRef(null);
    const sendClick = async () => {
            const response = await fetch("http://localhost:8080/massage" ,{
                method: "PUT",
                headers:{
                    Accept: "application/json",
                     "Content-Type": "application/json"
                },
                body: JSON.stringify({"user": props.nickName, "time": new Date().toLocaleString().slice(10, 16) ,"msg": massage.current.value})
            })
        massage.current.value = "";
        }
        const logOutClick = async () => {
            const response = await fetch("http://localhost:8080/connect" ,{
                method: "PUT",
                headers:{
                    Accept: "application/json",
                     "Content-Type": "application/json"
                },
                body: JSON.stringify({"user": props.nickName})
            })
        }
        return <div style={logStyle}>
        <ul style={msgListStyle}>
            {props.massages.map((msg)=>{
                return <li style={msgStyle}><span style={senderStyle}>{msg.user}: </span><br /><span>{msg.msg}</span><label style={timeStyle}>{msg.time}</label></li>
            })}
        </ul>
        <ul style={usersListStyle}>
        {props.participants.map((participant)=>{
                return <li>{participant}</li>
            })}
        </ul>
        <input style={inputStyle} ref={massage} placeholder='type your massage'></input>
        <button style={buttonStyle} onClick={sendClick}>send</button>
        <button style={buttonStyle} onClick={logOutClick}><Link style={linkStyle} to='/'>log out</Link></button>
    </div>
}

const msgListStyle = {
    listStyleType: "none",
    fontSize: "20px",
    width: "200px"
}

const msgStyle = {
    border: "2px solid blue",
    borderRadius: "10px",
    width: "100px",
    paddingLeft: "5px",
    marginTop: "10px",
}

const senderStyle = {
    color: "blue",
    fontSize: "25px"
}

const timeStyle = {
    color: "darkgrey",
    fontSize: "8px"
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
    width: "350px",
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
    fontSize: "15px",
    color: "blue",
    cursor: "pointer",
    marginRight: "25px"
}

const usersListStyle = {
    width: "200px",
    color: "green"
}

const userStyle = {
    color: "black"
}