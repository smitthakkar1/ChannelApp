import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
// import {Route, Router} from 'react-router';
import {HashRouter, Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home'; 
import Login from './components/Login';
import Register from './components/Register';
import Setting from './components/Settings';

ReactDOM.render((
    <Provider store = {store}>
    <BrowserRouter>
            <div>
            <Route path="/" component= {App}/>
            <Route exact path="/" component= {Home}/>
            <Route path="/login" component={Login}/>
            <Route path = "/register" component={Register} />
            <Route path = "/settings" component={Setting} />
            </div>
    </BrowserRouter>
    </Provider>

), document.getElementById('root'));
registerServiceWorker();
