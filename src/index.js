import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import {HashRouter, BrowserRouter, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import {Router} from 'react-router';
import Home from './components/Home'; 
import Login from './components/Login';
import Register from './components/Register';
import Setting from './components/Settings';
import Article from './Article/index';
import Profile from './components/Profile';
import ProfileFavorites from './components/ProfileFavorites';


ReactDOM.render((
    <Provider store = {store}>
    <BrowserRouter>
        <div>
            <Route path="/" component= {App} />
            <Route exact path="/" component= {Home}/>
            <Route path="/login" component={Login}/>
            <Route path = "/register" component={Register} />
            <Route path = "/settings" component={Setting} />
            <Route path = "/article/:id" component={Article} />
            <Route exact path="/@:username" component={Profile} />
            <Route path="/@:username/favorites" component={ProfileFavorites} />
        </div>
    </BrowserRouter>

        {/* <BrowserRouter>
            <div>
            <Route component={App} />
                <Switch>
                    <Route exact path="/" component= {Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path = "/register" component={Register} />
                    <Route path = "/settings" component={Setting} />
                    <Route path = "/article/:id" component={Article} />
                    <Route path="/@:username" component={Profile} />
                </Switch>
            </div>
    </BrowserRouter> */}

    </Provider>

), document.getElementById('root'));
registerServiceWorker();
