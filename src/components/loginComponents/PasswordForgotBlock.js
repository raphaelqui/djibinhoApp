import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/formBlock.css';

import SingleInputEigen1 from './../inputComponents/SingleInputEigen1.js';


class PasswordForgotBlock extends Component{

  constructor(props){
    super(props);

    this.state = {

    }
  }
  render(){
    var propObj = this.props.propObj;
    var singleInputEigen1Obj = {
      reachable: propObj.reachable,
      elem: 'Email oder Email-Prefix', 
      type: 'text',
      prefix: '',
      suffix: '',
      name: 'email',
    }

    return(
      <div className="formBlock passwordForgotBlock">
        <p className="formBlock-p">Mach dir keine Sorgen! Wir schicken deiner E-Mail-Adresse einen Link der dir das Erstellen eines neuen Passwortes ermöglicht.</p>

        <SingleInputEigen1 propObj={singleInputEigen1Obj}/>
        <div className="generalCss-button1">Herstellungs-Link an E-Mail senden</div>
        <p className="formBlock-p">Kehre zurück zum Login, klicke <a onClick={() => {this.props.propObj.shifter(0, 1)}} tabindex="-1" href="#">hier</a>.</p>

      </div>
    );
  }
}

export default PasswordForgotBlock;