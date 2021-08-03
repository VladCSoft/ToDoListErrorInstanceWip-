import React from 'react' ;
import {Route, BrowserRouter as Router , Switch , Link  } from "react-router-dom"; 
import './App.css'; 
import Login from './Pages/Login';
import Home from './Pages/Home' ;

function App() {    

  return (
    <Router>
    <div className="App">
      <header className="Top-Bar">
        <ul>
          <li className="Title-Button"> TodoApp </li>
          <Link to="/" className="Home-Button"> Home </Link>
          <div className="Logistics-Block"> 
          <Link to="/login" className="Login-Button"> Login </Link>
          <li className="Language-Button"> English </li>
          <img src="https://i.imgur.com/sC9nZbi.png" height="5" width="10" alt="Down-Arrow" className="Down-Arrow"></img>
          </div>
        </ul>
      </header>
    </div>
    <Switch>
    <Route path="/" exact component={Home}> <Home /> </Route> 
    <Route path="/login" exact component={Login} > <Login /> </Route>
    </Switch>
    </Router>
  );
}

export default App;
