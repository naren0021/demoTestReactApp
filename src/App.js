import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/index";
import Home from "./Component/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddData from "./Component/AddData";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add-data" component={AddData} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
