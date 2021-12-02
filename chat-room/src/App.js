import React, { useState } from 'react';
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
  return (
    <Router><div>
      <Routes>
      <Route exact path='/' element={<LogPage />}/>
      <Route exact path='/chat' element={<ChatRoom />} />
      </Routes>
    </div></Router>
  );
}


