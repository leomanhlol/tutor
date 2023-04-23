import Header from './components/Header'
import Footer from './components/Footer'
import News from './components/News'
import Login from './components/screen/Login'
import Home from './components/screen/Home'
import Chat from './components/screen/Chat'
import RegisterUser from './components/screen/RegisterUser'
import RegisterTutor from './components/screen/RegisterTutor'
import ScheTutor from './components/screen/RegisterTutor'
import ScheStudent from './components/screen/ScheStudent'
import Tutor from './components/Tutor'
import User from './components/User'
import './App.css';
// import Container from 'react-bootstrap/Container';

import React from 'react';
// import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  <div>
    <Header />
    <BrowserRouter>
      <Routes>
          <Route path="tutor_list" element={<Tutor />}/>
          <Route path="schedule" element={<ScheStudent />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="news" element={<News />} />
          <Route path="register_user" element={<RegisterUser />} />
          <Route path="register_tutor" element={<RegisterTutor />} />
          <Route path="sche_tutor" element={<ScheTutor />} />
          {/* <Route path="chat" element={<Chat />} /> */}

        
      </Routes>
    </BrowserRouter>
    <h2>Doi ngu giang vien</h2>
    <Tutor />
    <h2>Tin tuc</h2>
    <News />
    <h2>Dang ky hoc va day hoc</h2>
    <ScheStudent />
    <Footer />
  </div>
  );
}

export default App;
