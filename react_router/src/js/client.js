import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './pages/layout'
import Featured from './pages/featured';
import Settings from './pages/settings';
import Archives from './pages/archives';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const app = document.getElementById("app");

ReactDOM.render(
    <Router>
        <Layout>
            <Route exact path="/" component={Featured}></Route>
            <Route path="/archives" component={Archives}></Route>
            <Route path="/settings" component={Settings}></Route>
        </Layout>
    </Router>,
    app
);