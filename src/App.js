import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import PropTypes from 'prop-types';
import agent from './agent';

const mapStatetoProps = state => ({
    appName : state.common.appName,
    currentUser : state.common.currentUser,
    redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
    onRedirect: () => dispatch({type: 'REDIRECT'}),
    onLoad: (payload, token) => dispatch({type: 'APP_LOAD', payload, token})
});

class App extends Component {
    componentWillMount(){
        const token = window.localStorage.getItem('jwt');
        if(token){
            agent.setToken(token);
        }

        this.props.onLoad(token ? agent.Auth.current():null,token)
    }

    componentWillReceiveProps(newProps){
        if(newProps.redirectTo){
            this.context.router.history.push(newProps.redirectTo);
            this.props.onRedirect();
        }
    }

  render() {
      return (
          <div>
              <Header appName = {this.props.appName} currentUser = {this.props.currentUser} />
              {this.props.children}
          </div>
    );
  }
}
// console.log(PropTypes.object);

App.contextTypes = {
    router : PropTypes.object.isRequired,
};

export default connect(mapStatetoProps,mapDispatchToProps)(App);