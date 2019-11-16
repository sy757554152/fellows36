import React from 'react';
import './App.css';
// import Button from 'antd/es/button';
// import { Button } from 'antd';
// import { Menu, Icon } from 'antd';
import CommonHeader from './components/commonHeader'
import Nav from './components/Nav'
// const { SubMenu } = Menu;
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from "./page/Home"
import StudentAdd from "./page/StudentAdd"
import Student from "./page/Student"
import StudentCord from "./page/StudentCord"
import Teacher from "./page/Teacher"
import TeacherCord from "./page/TeacherCord"
function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-left">
            <Nav></Nav>
        </div>
        <div className="app-right">
            <CommonHeader></CommonHeader>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/student/add" component={StudentAdd}></Route>
            <Route exact path="/student" component={Student}></Route>
            <Route exact path="/student/list2" component={StudentCord}></Route>
            <Route exact path="/teacher/list" component={Teacher}></Route>
            <Route exact path="/teacher/list2" component={TeacherCord}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
