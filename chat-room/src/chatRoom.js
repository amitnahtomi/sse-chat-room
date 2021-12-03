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
        return <div>
        <ul style={msgListStyle}>
            {props.massages.map((msg)=>{
                return <li style={msgStyle}><span style={senderStyle}>{msg.user}: </span><br /><span>{msg.msg}</span><label style={timeStyle}>{msg.time}</label></li>
            })}
        </ul>
        <ul>
        {props.participants.map((participant)=>{
                return <li>{participant}</li>
            })}
        </ul>
        <input ref={massage} placeholder='type your massage'></input>
        <button onClick={sendClick}>send</button>
        <button onClick={logOutClick}><Link to='/'>log out</Link></button>
    </div>
}

const msgListStyle = {
    listStyleType: "none",
    fontSize: "20px"
}

const msgStyle = {
    border: "2px solid blue",
    borderRadius: "10px",
    width: "100px",
    paddingLeft: "5px",
    marginTop: "10px"

}

const senderStyle = {
    color: "blue",
    fontSize: "25px"
}

const timeStyle = {
    color: "darkgrey",
    fontSize: "8px"
}