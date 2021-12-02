import React, { useRef } from "react";

export default function ChatRoom(props) {
    const massage = useRef(null)
    return <div>
        <ul></ul>
        <ul></ul>
        <input ref={massage} placeholder='type your massage'></input>
        <button onClick={props.onClick}>send</button>
    </div>
}