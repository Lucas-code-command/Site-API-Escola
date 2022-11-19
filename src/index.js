import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/Users/lukemoliterno/Desktop/React/tentativa/src/App.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Btc from './btc_api/Btc';
import Webfront from './Web_scraping/Webfront';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <div>
          <Switch>
              <Route exact path="/">
                  <App />
              </Route>
              <Route path="/btc">
                <Btc />
              </Route>
              <Route>
                 <Webfront path="/webfront"/>
              </Route>
          </Switch>
    </div>
  </Router>
);

