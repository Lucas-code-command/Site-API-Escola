import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/Users/lukemoliterno/Desktop/React/tentativa/src/App.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import New from './NewPage/New';
import Btc from './btc_api/Btc';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <div>
          <Switch>
              <Route exact path="/">
                  <App />
              </Route>
              <Route path="/wiki">
                  <New />
              </Route>
              <Route path="/btc">
                <Btc />
              </Route>
          </Switch>
    </div>
  </Router>
);

