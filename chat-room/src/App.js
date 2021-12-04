import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LogPage from './logPage';
import ChatRoom from './chatRoom';

export default function App() {
  const [nickName, setNickname] = useState("");
  const [massages, setMassages] = useState([]);
  const [participants, setParticipans] = useState([]);

  useEffect(() => {
    let msgSource = new EventSource("http://localhost:8080/messages")
    msgSource.onmessage = e => updateMsg(JSON.parse(e.data));
    let usersSource = new EventSource("http://localhost:8080/users", {username: nickName})
    usersSource.onmessage = e => updateParticipants(JSON.parse(e.data))
  }, [])

  const updateParticipants = (users) => {
    setParticipans(users);
  }

  const updateMsg = (msg) => {
    setMassages(msg);
  }

  const updateNickName = (name) => {
    setNickname(name);
  }
  return (
    <Router><div>
      <Routes>
      <Route exact path='/' element={<LogPage btnClick={updateNickName}/>}/>
      <Route exact path='/chat' element={<ChatRoom nickName={nickName} participants={participants} massages={massages}/>} />
      </Routes>
    </div></Router>
  );
}


