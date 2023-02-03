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

    /*
    */
    // multipleInputEigen1Obj = { ... }
    // hat elemArr ein Array am index x muss nameArr am index x ebenfalls ein Array mit der gleichen länge haben!
    // prerequisite is all Props have the same Array lenght!
    var multipleInputEigen1Obj = {
      reachable: true,
      elemArr: ['Email oder Email-Prefix', ["Pw neu", "Pw wiederholen"], 'Referenznummer'], 
      typeArr: ['text', 'password', 'text'],
      prefixArr: ['', '', '#'],
      suffixArr: ['@gmail.com', '', ''],
      nameArr: ['email', ['password1', 'password2'], 'refnumber'],
    }

    // singleInputEigen1Obj = { ... }
    // in the case elem is an array name has to be also an array with the same length
    var singleInputEigen1Obj = {
      reachable: true,
      elem: 'Webseite', 
      type: 'text',
      prefix: 'https://www.',
      suffix: '.com',
      name: 'website-address',
    }
    var checkboxEigen1Obj = {
      html: (<div>Ich stimme den Datenschutz-Bestimmungen zu. Ich stimme den Datenschutz-Bestimmungen zu. Ich stimme den Datenschutz-Bestimmungen zu.</div>),
      checked: false,
    }
    var dropdownEigen1Obj = {
      reachable: true,
      initialStr: "Wähle deine Kategorie",
      optionArr: ["Coach", "Trainer", "Spieler"],
      name: 'optionInput',
    }

    



    return(
      <div className="formBlock loginBlock">


        <p className="formBlock-p">Willkommen zurück! Bitte gebe deine Anmeldedaten ein, um dich in dein Djibinho-Konto einzuloggen.</p>
        <MultipleInputEigen1 propObj={multipleInputEigen1Obj}/>
        <SingleInputEigen1 propObj={singleInputEigen1Obj}/>
        <CheckboxEigen1 propObj={checkboxEigen1Obj}/>
        <DropdownEigen1 propObj={dropdownEigen1Obj}/>
        
        <div className="generalCss-button1">einloggen</div>
        <div onClick={() => {this.props.propObj.shifter(1, 2)}} className="generalCss-button2">neu registrieren</div>

        <p className="formBlock-p">Hast du dein Passwort vergessen, dann klicke <a tabindex="-1" href="#">hier</a>.</p>

        <div className="marginExtra"></div>
        
      </div>
    );
  }
}

export default LoginBlock;