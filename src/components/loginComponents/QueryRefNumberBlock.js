import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/formBlock.css';


class QueryRefNumberBlock extends Component{

  constructor(props){
    super(props);

    this.state = {

    }
  }
  render(){
    return(
      <div className="formBlock queryRefNumberBlock">
        <p className="formBlock-p">Setze dich mit uns in Verbindung um deinen Referenznummer herauszufinden. Erreiche uns unter der E-Mail: info@djibinho.de oder 
               über Whatsapp, unter der Nummer: 01786985804. Wir fragen dich ein paar Fragen und schon hast du deine Referenznummer wieder.  
        </p>
        <p className="formBlock-p">Zurück zum Registrierungs-Formular? Klicke <a onClick={() => {this.props.propObj.shifter(4, 2)}} tabindex="-1" href="#">hier</a>.</p>

      </div>
    );
  }
}

export default QueryRefNumberBlock;