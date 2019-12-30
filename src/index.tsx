import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeContainer from './pages/Home/Home.container';
import SearchContainer from './pages/Search/Search.container';

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={HomeContainer} />
        <Route path="/search" component={SearchContainer} />
    </Switch>
</ BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
