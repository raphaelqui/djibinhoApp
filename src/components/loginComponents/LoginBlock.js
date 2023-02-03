import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/formBlock.css';

import MultipleInputEigen1 from './../inputComponents/MultipleInputEigen1.js';
import SingleInputEigen1 from './../inputComponents/SingleInputEigen1.js';
import CheckboxEigen1 from './../inputComponents/CheckboxEigen1.js';
import DropdownEigen1 from './../inputComponents/DropdownEigen1.js';


class LoginBlock extends Component{

  constructor(props){
    super(props);

    this.state = {

    }
  }







  render(){
    var propObj = this.props.propObj;
    var multipleInputEigen1Obj = {
      reachable: propObj.reachable,
      elemArr: ['Email oder Email-Prefix', 'Passwort'], 
      typeArr: ['text', 'password'],
      prefixArr: ['', ''],
      suffixArr: ['', ''],
      nameArr: ['email', 'password'],
    }
    var checkboxEigen1Obj = {
      html: (<div>Ich will beim Wiederkehren auf diese Seite automatisch angemeldet werden.</div>),
      checked: false,
    }

    



    return(
      <div className="formBlock loginBlock">


        <p className="formBlock-p">Willkommen zurück! Bitte gebe deine Anmeldedaten ein, um dich in dein Djibinho-Konto einzuloggen.</p>
        <MultipleInputEigen1 propObj={multipleInputEigen1Obj}/>
        <CheckboxEigen1 propObj={checkboxEigen1Obj}/>
        
        <div className="generalCss-button1">einloggen</div>
        <div onClick={() => {this.props.propObj.shifter(1, 2)}} className="generalCss-button2">neu registrieren</div>
        
        <p className="formBlock-p">Hast du dein Passwort vergessen, dann klicke <a onClick={() => {this.props.propObj.shifter(1, 0)}} tabindex="-1" href="#">hier</a>.</p>


        <div className="marginExtra"></div>
        
      </div>
    );
  }
}

export default LoginBlock;