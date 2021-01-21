import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./todo/Todos";
import About from "./pages/About";
import Header from "./Header";
import React from "react";
import Start from "./pages/Start";

const App = () => {
  return (
    <Router>
      <div className="App fam">
        <div className="container">
          <div className="App-header">
            <Header />
          </div>

          <Route exact path="/" component={Start} />
          <Route path="/about" component={About} />
          <Route path="/todos" component={Todos} />
        </div>
      </div>
    </Router>
  );
}

export default App;
