import React, { Component } from 'react';



import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { API, Auth, Amplify } from 'aws-amplify';

import './resources/general.css';
import Login from './components/Login.js';
import Interface from './components/Interface.js';
import Profile from './components/Profile.js';

import Load from './Load.js';
import Handler from './Handler.js';

import { AuthContext } from './auth-context.js';




class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      val: {
        jwt: false,
        jsxNavLogin: (<div></div>),
        jsxNavInterface: (<div></div>),
        username: "",
        data: {email: "@", family_name: "", phone_number: "", name: ""},
      },
      valChanged: false,
    } 

    this.newuserFn = this.newuserFn.bind(this);
    this.logoutFn = this.logoutFn.bind(this);

  }

  //der token vomm neuem user
  newuserFn(token, username, attributes){
    this.setState({
      val: {
        jwt: token,
        jsxNavLogin: (<div></div>),
        jsxNavInterface: (<Navigate to="/interface" />),
        username: username,
        data: attributes,
      }
    });
  }
  logoutFn(){
    this.setState({
      val: {
        jwt: false,
        jsxNavLogin: (<Navigate to="/login" />),
        jsxNavInterface: (<div></div>),
        username: "",
        data: {email: "@", family_name: "", phone_number: "", name: ""},
      }
    });
  }

  async init(){
    try {
        const user = await Auth.currentUserInfo();
        if(user === null){
          //der Benutzer ist nicht authentifiziert / nicht angemeldet
          
          const value = {
            jwt: false,
            jsxNavLogin: (<Navigate to="/login" />), // zum login
            jsxNavInterface: (<div></div>),
            username: "",
            data: {},
          }
          this.setState({
            val: value,
            valChanged: true
          });

        } else {
          //der Benutzer ist angemeldet, setze den Token
          const user = await Auth.currentUserInfo();
          const session = await Auth.currentSession();
          const value = {
            jwt: session.accessToken.jwtToken,
            jsxNavInterface: (<Navigate to="/interface" />), // leer
            jsxNavLogin: (<div></div>),
            username: user.username,
            data: user.attributes,
          }
          this.setState({
            val: value,
            valChanged: true
          });

        }

    } catch(error) {
        console.log(error);
    }

  }
     



  render(){

    //nur zweimal rendern -> 1. rendern ohne value 2. mit value
    if(!this.state.valChanged){
      this.init();
    }

    return(
      <AuthContext.Provider value={this.state.val}> 

        <Load/>


        <Routes>

          <Route path="/login" element={<Login propFn={this.newuserFn} />}/>
          <Route path="/" element={<Handler propFn={this.logoutFn} />}/>
          <Route path="/interface" element={<Handler propFn={this.logoutFn} />}/>
          <Route path="/profile" element={<Profile/>}/>
          
          
        </Routes>
      </AuthContext.Provider>  
    );
  }
}

export default App;

