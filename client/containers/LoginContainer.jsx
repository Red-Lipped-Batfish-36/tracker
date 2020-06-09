import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../actions/actions';
import { useDispatch } from 'react-redux';
// import { Router } from 'express';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';




// redirect tag 

const LoginContainer = () => {
  // hook in place of mapDispatchToProps
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  // useState hook to hold form data
  // const [isFetch, setIsFetch] = useState(false);
  const [fields, setFields] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;
    setFields({
      ...fields,
      [targetName]: value
    })
  }

  // **************need real data, need to uncomment line 41 and delete 44-49 *************
  const fetchLogin = () => {
    console.log('fetchlogin clicked!')
    const reqData = {
      username: fields.username,
      password: fields.password
    }
    fetch('/api/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(reqData)
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('data returned from fetch', data)
        const payload = {};
        payload.user = data.user;
        payload.projects = data.projects;
        payload.categories = data.categories;
        payload.timerActivity = data.timerHistory;

        dispatch(login(payload));
        console.log('dispatch finished')
      })
      .then(() => setRedirect(true))
      .catch(err => console.log('there was an error fetching data: ', err))

    // send fetch request, post, sending usernamse and pw
    // get response and dispatch data to set state
    // then redirect to /user

  }
  // setIsFetch(true)
  // useEffect(() => {
  //   // object to send in fetch request
  //   const reqData = { 
  //     username: fields.username,
  //     password: fields.password
  //   }
  //   if(isFetch === true){
  //   fetch('/api/', {
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(reqData)})
  //     .then((res) => {
  //       // return res.json();
  //     // })
  //     // .then((data) => {
  //         const payload = {};
  //         payload.user = data.user;
  //         payload.projects = data.projects;
  //         payload.categories = data.categories;
  //         payload.timerActivity = data.timerHistory;
  //         return payload;

  //     })
  //     .then((payload)=> dispatch(login(payload))
  //        setIsFetch(false)
  //     )
  //     .catch((err) => console.log('Login get login: ERROR: ', err));
  //   }
  // })
  // if (redirect) {
  //   return (

  //     )
  // }
  if (redirect) return <Redirect to="/user" />

  return (
    <div id="mainDiv">
      <div id='nav'>
        <div id='logo'>Tracker</div>
        <a>
          <button type="button" id="log-out" className="button">
            Log Out
            </button>
        </a>
      </div>
      <div id="form">
        <h1 className="site-name" id="site-name-log">
          Login
          </h1>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          className="info"
          value={fields.username}
          onChange={handleChange}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={fields.password}
          onChange={handleChange}
        />
        {/* when back end is working an rediresting to user page this nav link need to be deleted */}
        {/* <NavLink to="/user"> */}
        <button type="button" id="log-in" className="button" onClick={fetchLogin}>
          Log In
            </button>
        {/* </NavLink> */}
        <p>Login with <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" height="20px" /> <img src="https://image.flaticon.com/icons/svg/25/25231.svg" width="25px" height="25px" /></p>
      </div>
      <div id="no-log-in">
        <div id="forgot" >Don't have an account?</div>
        <NavLink to="signup">
          <button type="button" id="sign-up" className="button">
            Sign Up
            </button>
        </NavLink>
      </div>
    </div>
  );
}

export default LoginContainer;
