import React, { Component } from 'react';
import firebaseConfig from '../firebase';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase';
import 'firebaseui/dist/firebaseui.css';
import LoginPage from './login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class OtpScreen extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInOptions: [{
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          type: 'image',
          size: 'normal',
          badge: 'bottomleft'
        },
        defaultCountry: 'Pk'
      }],
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl){
            console.log(authResult);
          alert('successful');
          return true;
        }
      },
      signInSuccessUrl : '/signup'
    //   signInSuccessUrl : window.location('/Registration-Page')
    };

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);

  };
  render() {
    return (
      <div style={{backgroundImage:`url("https://cdn.hipwallpaper.com/i/79/74/Fa5vMG.jpg")`, justifyContent:'center',display:'flex',height:'100vh',alignItems:'center',}} id='firebaseui-auth-container'>
      </div>
    );
  }
}
export default OtpScreen;