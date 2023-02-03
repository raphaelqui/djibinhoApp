import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/formBlock.css';

import MultipleInputEigen1 from './../inputComponents/MultipleInputEigen1.js';
import SingleInputEigen1 from './../inputComponents/SingleInputEigen1.js';
import CheckboxEigen1 from './../inputComponents/CheckboxEigen1.js';
import DropdownEigen1 from './../inputComponents/DropdownEigen1.js';


class RegisterBlock extends Component{

  constructor(props){
    super(props);

    this.state = {
    }
  }
  render(){
    var propObj = this.props.propObj;
    var multipleInputEigen1Obj = {
      reachable: propObj.reachable,
      elemArr: [['Vorname', 'Nachname'], 'Email-Adresse', ["Neues Passwort", "Passwort wiederholen"], 'Telefon- / Mobilfunknummer'], 
      typeArr: ['text', 'text', 'password', 'text', 'text'],
      prefixArr: ['', '', '', ''],
      suffixArr: ['', '', '', ''],
      nameArr: [['vorname', 'nachname'], 'email', ['password1', 'password2'], 'telephone'],
    }

    // singleInputEigen1Obj = { ... }
    // in the case elem is an array name has to be also an array with the same length
    var singleInputEigen1Obj = {
      reachable: propObj.reachable,
      elem: 'Referenznummer', 
      type: 'text',
      prefix: '#',
      suffix: '',
      name: 'referenceNumber',
    }

    var checkboxEigen1Obj_Datenschutz = {
      html: (<div>Ich stimme den Datenschutz-Bestimmungen der Djibinho GmbH zu. Folgende Datenschutz-Bestimmungen finden sie <a onClick={() => {this.props.propObj.shifter(2, 3)}} tabindex="-1" href="#">hier</a>.</div>),
      checked: false,
    }
    var checkboxEigen1Obj_Benachrichtigung = {
      html: (<div>Ja, ich will regelmäßig über Neuigkeiten und Angebote über meine Email-Adresse informiert werden.</div>),
      checked: false,
    }

    var dropdownEigen1Obj = {
      reachable: propObj.reachable,
      initialStr: "Wähle deine Kategorie",
      optionArr: ["Coach", "Trainer", "Spieler"],
      name: 'optionInput',
    }

    return(
      <div className="formBlock registerBlock">
        <p className="formBlock-p">Werde ein Teil von Djibinho - registriere dich hier entweder als Coch, Trainer oder 
          Spieler. Für die Registrierung benötigst du eine 
               Referenznummer, hast du keine Referenznummer oder hast du sie nicht mehr zur Verfügung kannst du diese neu-/beantragen, klicke hier
        </p>
        <MultipleInputEigen1 propObj={multipleInputEigen1Obj}/>
        <DropdownEigen1 propObj={dropdownEigen1Obj}/>
        <SingleInputEigen1 propObj={singleInputEigen1Obj}/>
        <p className="formBlock-p">Hast du deine Referenznummer nicht vorliegen? Dann klicke <a onClick={() => {this.props.propObj.shifter(2, 4)}} tabindex="-1" href="#">hier</a>, um deine Referenznummer neu zu beantragen.</p>
        <CheckboxEigen1 propObj={checkboxEigen1Obj_Datenschutz}/>
        <CheckboxEigen1 propObj={checkboxEigen1Obj_Benachrichtigung}/>

        <div className="generalCss-button1">registrieren</div>

        <p className="formBlock-p">Schon ein Account? Zum Login klicke <a onClick={() => {this.props.propObj.shifter(2, 1)}} tabindex="-1" href="#">hier</a>.</p>


      </div>
    );
  }

}
export default RegisterBlock;