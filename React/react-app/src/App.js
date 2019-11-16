import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import First from './components/First';
import Second from './components/Second';
import Home from './components/Home';
import Fourth from './components/Fourth';
import Jump from "./components/Jump";
import {BrowserRouter as Router,
  Link,
  Route,
  // Switch,
  Redirect,
  Prompt
} from 'react-router-dom';//Route 每个组件下都有自己的路由
function App() {
  return (
    <div className="App">
      <hr></hr>
        <Router>
          <Header></Header>
          {/* 方法一 运用exact 严格匹配*/}
          <Link to="/">首页首页</Link> |
          <Link to="/first">First</Link> |
          <Link to="/second">Second</Link> |
          <Link to="/third">Third</Link> |
          <Link to="/children">Children</Link> |
          <Jump to="/fourth">jump-Fourth</Jump> |
          <Jump to="/fiveth">jump-Fiveth</Jump> |
          <Jump to="/sixth">jump-Sixth</Jump> 
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/first" component={First}></Route>
          <Route exact path="/second" component={Second}></Route>
          <Route exact path="/third" render={()=>{
            return <Redirect to="/"></Redirect>
          }}></Route>
          <Route exact path="/children" children={()=>{
            return <h2>Children</h2>
          }}></Route>
          <Route exact path="/fourth" component={Fourth}></Route>
          <Prompt when={false} message="确定要离开当前界面?"></Prompt>
          {/* 方法二 运用Swich只找到第一个进行渲染 */}
          {/* <Link to="/">首页首页</Link>
          <Link to="/first">First</Link>
          <Link to="/second">Second</Link>
          <Switch>
            <Route path="/first" component={First}></Route>
            <Route path="/second" component={Second}></Route>
            <Route path="/" component={Home}></Route>
          </Switch> */}
          <Footer></Footer>
        </Router>
      <hr></hr>
    </div>
  );
}

export default App;
