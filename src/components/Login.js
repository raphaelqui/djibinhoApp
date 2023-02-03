  import React, { Component } from 'react';
import { incrementCounter } from '../actions/index.js';
import { connect } from 'react-redux'; 
import '../resources/formBlock.css';
import logo from './../assets/logo.png';
import illuLogin from './../assets/illuLoginVer2.jpg';
import illuPwforgot from './../assets/illuPwforgot.jpg';
import load from './../assets/load.gif';

import { Navigate, useNavigate } from "react-router-dom";

import '../resources/login.css';


//load components:
import MultipleInputEigen1 from './inputComponents/MultipleInputEigen1.js';
import SingleInputEigen1 from './inputComponents/SingleInputEigen1.js';
import CheckboxEigen1 from './inputComponents/CheckboxEigen1.js';
import DropdownEigen1 from './inputComponents/DropdownEigen1.js';

import { AuthContext } from '../auth-context.js';

import SliderElem from './subComponents/SliderElem.js';


import '@aws-amplify/ui-react/styles.css';

import { API, Auth, Amplify, Hub } from 'aws-amplify';



class Login extends Component{



    constructor(props){
      super(props);
      this.state = {
            // loginForm
            inputLoUsername: "",
            inputLoPassword: "",
            checkLoKeepdata: false,
            // registerForm
            inputReVorname: "",
            inputReNachname: "",
            inputReEmail: "",
            inputRePhonenumber: "",
            inputReUsername: "",
            inputRePassword: "",
            inputReConfirmedPassword: "",
            checkReDatenschutz: false,
            checkReNotificationAd: false,
            //confirmationForm
            inputConCode: "", 
            //currentRe
            currentReUsername: "",
            //passwordforgotForm
            inputPfEmail: "",
            //jsx-elem für die etwaige Direktweiterleitung
      }
      this.shifter = this.shifter.bind(this);
      this.onChange = this.onChange.bind(this);
      this.signIn = this.signIn.bind(this);
      this.signUp = this.signUp.bind(this);
      this.confirmSignUp = this.confirmSignUp.bind(this);
      this.resendConfirmationCode = this.resendConfirmationCode.bind(this);

    }
    onChange(e){
      this.setState({
        [e.target.name]: e.target.value,
      }, function(){console.log(this.state)});
    } 



    shifter(e){
      var refnum = (e.target.getAttribute('refnum'));
      var num = (e.target.parentElement.parentElement.parentElement.getAttribute('num'));

      var disappearElem = (e.target.parentElement.parentElement.parentElement);
      var appearElem = (e.target.parentElement.parentElement.parentElement.parentElement.children[refnum]);

      if(disappearElem.getAttribute('num') < appearElem.getAttribute('num')){
          //forwards
          appearElem.setAttribute('place', '1');
          disappearElem.setAttribute('place', '0');
      } else {
          //backwards
          appearElem.setAttribute('place', '1');
          disappearElem.setAttribute('place', '2');
      }
    } 
    // Registrierung
    async signUp(e) {
        e.target.children[0].setAttribute("pending", "true");
        try {
            const { user } = await Auth.signUp({
                username: this.state.inputReUsername,
                password: this.state.inputRePassword,
                attributes: {
                    email: this.state.inputReEmail,          
                    phone_number: "+49"+this.state.inputRePhonenumber,
                    family_name: this.state.inputReNachname,
                    name: this.state.inputReVorname,
                },
                autoSignIn: { 
                    enabled: true,
                }
            });
            this.setState({
              currentReUsername: user.username,
            })
            //shifte zum confirmation field
            this.shifter(e);
            e.target.children[0].setAttribute("pending", "false");
        } catch (error) {
            console.log('error signing up:', error);
            e.target.children[0].setAttribute("pending", "false");
        }
    }
    // Wiederhole das Senden eines Codes
    async resendConfirmationCode() {
        try {
            await Auth.resendSignUp(this.state.currentReUsername);
            console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }
    // Registrierung bestätigen
    async confirmSignUp(e) {
        e.target.children[0].setAttribute("pending", "true");
        try {
          const { confirmation } = await Auth.confirmSignUp(this.state.currentReUsername, this.state.inputConCode);
          this.signIn(e, this.state.currentReUsername, this.state.inputRePassword);
          console.log("confirmation promise (user-object) is above me otherwise there is a mistake");
          e.target.children[0].setAttribute("pending", "false");

        } catch (error) {
            console.log('error confirming sign up', error);
            e.target.children[0].setAttribute("pending", "false");

        }
    }



    async signIn(e, username = this.state.inputLoUsername, password = this.state.inputLoPassword) {
        e.target.children[0].setAttribute("pending", "true");
        try {
            const user = await Auth.signIn(username, password);
            console.log(user);
            //user ist eingeloggt und leite ihn weiter aufs interface weiter
            this.props.propFn(user.signInUserSession.accessToken, user.username, user.attributes);
            e.target.children[0].setAttribute("pending", "false");
        } catch (error) {
            //anmeldedaten sind falsch
            console.log('error signing in', error);
            e.target.children[0].setAttribute("pending", "false");
        }
    }
    








    render(){

      //Password forgot Input Components
      var singleLoginEmailForNewPwObj = {
        reachable: false,
        elem: 'Email-Adresse', 
        type: 'text',
        prefix: '',
        suffix: '',
        name: 'inputPfEmail',
        fn: this.onChange,
      } 
      //Login Input Components
      var singleLoginNameObj = {
        reachable: false,
        elem: 'Username', 
        type: 'text',
        prefix: '',
        suffix: '',
        name: 'inputLoUsername',
        fn: this.onChange,
      } 
      var singleLoginPasswordObj = {
        reachable: false,
        elem: 'Passwort', 
        type: 'password',
        prefix: '',
        suffix: '',
        name: 'inputLoPassword',
        fn: this.onChange,
      }
      var checkboxLoginStaylogged = {
        html: (<div>Ich will beim Wiederkehren auf diese Seite automatisch angemeldet werden.</div>),
        checked: false,
        name: 'checkLoKeepdata',
        fn: this.onChange
      }
      //Register Input Components
      var multipleInputRegisterObj = {
        reachable: true,
        elemArr: [['Vorname', 'Nachname'], 'Email-Adresse', 'Telefon- / Mobilfunknummer'], 
        typeArr: ['text', 'text', 'text'],
        prefixArr: ['', '', '+49'],
        suffixArr: ['', '', ''],
        nameArr: [['inputReVorname', 'inputReNachname'], 'inputReEmail', 'inputRePhonenumber'],
        fn: this.onChange,
      }
      var singleLoginReferencenumObj = {
        reachable: true,
        elem: 'Username', 
        type: 'text',
        prefix: '',
        suffix: '',
        name: 'inputReUsername',
        fn: this.onChange,
      }
      var dropdownEigenObj = {
        reachable: true,
        initialStr: "Wähle deine Kategorie",
        optionArr: ["Coach", "Trainer", "Spieler"],
        name: 'optionInput',
        fn: this.onChange,
      }
      var multipleInputRegisterNewPasswordObj = {
        reachable: true,
        elemArr: ['Passwort', 'Passwort wiederholen'], 
        typeArr: ['password', 'password'],
        prefixArr: ['', ''],
        suffixArr: ['', ''],
        nameArr: ['inputRePassword', 'inputReConfirmedPassword'],
        fn: this.onChange,
      }
      var checkboxLoginAcceptAGB = {
        html: (<div>Ich stimme den Datenschutz-Bestimmungen der Djibinho GmbH zu. Folgende Datenschutz-Bestimmungen finden sie hier.</div>),
        checked: false,
        name: 'checkReDatenschutz',
      }
      var checkboxLoginAcceptNewsletter = {
        html: (<div>Ja, ich will regelmäßig über Neuigkeiten und Angebote über meine Email-Adresse informiert werden.</div>),
        checked: false, 
        name: 'checkReNotificationAd',
      }
      var singleConfirmationCodeObj = {
        reachable: true,
        elem: 'Registrierungs-Code', 
        type: 'text',
        prefix: '',
        suffix: '',
        name: 'inputConCode',
        fn: this.onChange,
      }



      return( 
        <div className="login">

          
          <AuthContext.Consumer>
              {function(value){
                  return(value.jsxNavInterface);  
              }}
          </AuthContext.Consumer> 


          <div className="login-sliderBottomBar">
            <div  className="login-sliderBottomBar-dropdown">Sprache</div>
            <p className="login-sliderBottomBar-p">Nutzungsbedingungen</p>
            <p className="login-sliderBottomBar-p">Datenschutz</p>
            <p className="login-sliderBottomBar-p">Hilfe</p>
          </div>
          <div className="login-slider">


          <div num="0" place="0" className="login-slider-block">
              <div className="login-slider-block-column1">
                  <h1 className="login-slider-block-headline">Passwort vergessen?</h1>
                  <p className="login-slider-block-desc">Wir senden deiner Email-Adresse einen Wiederherstellungs-Link, mit dem du dein Passwort ändern kannst.</p>
                  <SingleInputEigen1 propObj={singleLoginEmailForNewPwObj}/>

                  <div className="login-slider-block-btnBar">
                    <div className="login-slider-block-btnLogin">Link senden</div>
                    <div  refnum="1" onClick={this.shifter} className="login-slider-block-btnRegister">anmelden</div>
                  </div>

              </div>
              <div className="login-slider-block-column2">
                <img class="login-slider-block-column-img" src={illuPwforgot}/>
              </div> 
          </div>


          {/* abgeschlossen - login */}

          <div num="1" place="1" className="login-slider-block">
              <div className="login-slider-block-column1">
                <h1 className="login-slider-block-headline">Anmeldung</h1>
                <p className="login-slider-block-desc">Mit Djibinho-Konto anmelden</p>
                <SingleInputEigen1 propObj={singleLoginNameObj}/>
                <SingleInputEigen1 propObj={singleLoginPasswordObj}/>
                <div>
                  <p refnum="0" onClick={this.shifter} className="login-slider-block-infolink">Passwort vergessen?</p>
                </div>
                <CheckboxEigen1 propObj={checkboxLoginStaylogged}/>
                <div className="login-slider-block-btnBar">
                  <div onClick={this.signIn} className="login-slider-block-btnLogin">anmelden<div pending="false" className="login-slider-block-btn-dotload"><div className="dot dot-1"></div><div className="dot dot-2"></div><div className="dot dot-3"></div></div></div>
                  <div refnum="2" onClick={this.shifter} className="login-slider-block-btnRegister">Konto erstellen</div>

                </div>

              </div>
              <div className="login-slider-block-column2">
                
                <img class="login-slider-block-column-img" src={illuLogin}/>

              </div>
          </div>

          {/* abgeschlossen - register */}
          <div num="2" place="2" className="login-slider-block">
              <div className="login-slider-block-column1">
                <h1 className="login-slider-block-headline">Djibinho-Konto erstellen</h1>
                <p className="login-slider-block-desc">Nutzen Sie alle Features der Djbinho App</p>
                <MultipleInputEigen1 propObj={multipleInputRegisterObj}/>
                <SingleInputEigen1 propObj={singleLoginReferencenumObj}/>

                <div className="login-slider-block-btnBar">
                  <div refnum="3" onClick={this.signUp} className="login-slider-block-btnLogin">registrieren<div pending="false" className="login-slider-block-btn-dotload"><div className="dot dot-1"></div><div className="dot dot-2"></div><div className="dot dot-3"></div></div></div>
                  <div refnum="1" onClick={this.shifter} className="login-slider-block-btnRegister">anmelden</div>
                </div>

              </div>               

              <div className="login-slider-block-column2">
                <DropdownEigen1 propObj={dropdownEigenObj}/>
                <MultipleInputEigen1 propObj={multipleInputRegisterNewPasswordObj}/>
                <CheckboxEigen1 propObj={checkboxLoginAcceptAGB}/>
                <CheckboxEigen1 propObj={checkboxLoginAcceptNewsletter}/>
              </div>               
          </div>

          {/* abgeschlossen - register - Code confirmation */}
          <div num="3" place="2" className="login-slider-block">
              <div className="login-slider-block-column1">
                <h1 className="login-slider-block-headline">Registrierung abschließen</h1>
                <p className="login-slider-block-desc">Wir haben Ihnen einen Bestätigungs-Code zugesandt, bitte geben Sie diesen ein um die Registrierung abzuschließen.</p>
                <SingleInputEigen1 propObj={singleConfirmationCodeObj}/>

                <div>
                  <p onClick={this.resendConfirmationCode} className="login-slider-block-infolink">Code nicht erhalten? Klicke hier um dir einen neuen Code zu schicken.</p>
                </div>

                <div className="login-slider-block-btnBar">
                  <div onClick={this.confirmSignUp} className="login-slider-block-btnLogin">Code bestätigen<div pending="false" className="login-slider-block-btn-dotload"><div className="dot dot-1"></div><div className="dot dot-2"></div><div className="dot dot-3"></div></div></div>
                  <div refnum="2" onClick={this.shifter} className="login-slider-block-btnRegister">abbrechen</div>
                </div>

              </div>               

          </div>




          </div>

        </div>
      );
    }
}





export default Login;
