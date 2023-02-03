import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/formBlock.css';


class DatenschutzBlock extends Component{

  constructor(props){
    super(props);

    this.state = {

    }
  }
  render(){
    return(
      <div className="formBlock datenschutzBlock">

        <p className="formBlock-p">Zurück zum Registrierungs-Formular? Klicke <a onClick={() => {this.props.propObj.shifter(3, 2)}} tabindex="-1" href="#">hier</a>.</p>

        <p className="formBlock-p">Unsere Datenschutz-Bestimmungen: 

              <br/><br/><br/>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              <br/><br/>
              Et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              <br/><br/>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        </p>
      </div>
    );
  }
}

export default DatenschutzBlock;