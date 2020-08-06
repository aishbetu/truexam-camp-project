import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from "./Main";
import CreateTask from "./pages/CreateTask";
import TaskSubmissions from "./pages/TaskSubmissions";
import About from "./pages/About-us";
import Success from "./pages/Success";


function App() {
  return (
      <Router>

        <Navbar />

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/create-task">
                <CreateTask />
            </Route>

            <Route path="/review-tasks">
                <TaskSubmissions />
            </Route>

            <Route path="/about-us">
                <About />
            </Route>

            <Route path="/success">
                <Success />
            </Route>
        </Switch>

      </Router>
  );
}
export default App;
