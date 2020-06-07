import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';
// import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer.jsx';
// import SignUpContainer from './containers/SignUpContainer';
import MainContainer from './containers/MainContainer';

import './stylesheets/styles.css';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/:filter?" component={LoginContainer} />
          {/* <Route exact path="/signup" component={SignUpContainer} /> */}
          {/* real user <Route exact path="/:user" component={MainContainer} /> */}
          <Route exact path="/:user" component={MainContainer} />
        </Switch>
      </Router>
    </Provider>
  );
};

// App.propTypes = {
//   store: PropTypes.object.isRequired,
// };

export default App;
