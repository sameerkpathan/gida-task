import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Statistic from './Statistic';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/statistic">
    <Statistic/>
  </Route>
  <Route path="/" >
    <App />
    </Route>
    </Switch>
  </BrowserRouter>
 , document.getElementById('root')
);


