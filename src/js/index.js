/**
 * Created by liaopeng on 2017/8/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Index from "./pages/index"
export  default class Root extends React.Component{
    render()
    {
        return(
            <Router history={hashHistory}>
        <Route component={Index} path="/"></Route>
        </Router>
    )
    }
}
ReactDOM.render(<Root/>, document.getElementById('root'));