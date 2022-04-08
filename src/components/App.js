import React from "react";
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Help from "../views/Help";
import NotFound from "../views/NotFound";
import Container from "./Context/Container";

function App() {
  return (
    <Container>
      <Router>
        <div className="app">
          <Navigation></Navigation>
          
            <Route exact path="/">
              <ToDosContainer></ToDosContainer>
              <ToDonesContainer></ToDonesContainer>
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route>
              <NotFound />
            </Route>
          
        </div>
      </Router>
    </Container>
  );
}

export default App;
