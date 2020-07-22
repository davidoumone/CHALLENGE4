import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import "./App.css";
import PageHome from "./components/PageHome/PageHome";
import PageReact from "./components/PageReact/PageReact";
import PageNode from "./components/PageNode/PageNode";
import PageContact from "./components/PageContact/PageContact";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react">React</Link>
          </li>
          <li>
            <Link to="/node">Node</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

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
