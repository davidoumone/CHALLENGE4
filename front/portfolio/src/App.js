import React from "react";
import {Switch, Route} from 'react-router-dom';
import "./App.css";
import PageHome from "./components/PageHome/PageHome";
import PageReact from "./components/PageReact/PageReact";
import PageNode from "./components/PageNode/PageNode";
import PageContact from "./components/PageContact/PageContact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="/react" component={PageReact} />
        <Route path="/node" component={PageNode} />
        <Route path="/contact" component={PageContact} />
      </Switch>
    </div>
  );
}

export default App;
