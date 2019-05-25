import React from 'react';
import Header from './components/header'
import Api from "./containers/api"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from "./components/dashboard"

function App() {
  const sections = ["finances"]
  return (
    <div className="wrapper">
      <Header
        menuItems={sections} />
      <div id="contents">
        <Api>
          <Router>
            <Switch>
              <Route
                exact path="/" render={sections => <Dashboard sections={sections} />}></Route>
            </Switch>
          </Router>
        </Api>
      </div>
    </div >
  );
}

export default App;
