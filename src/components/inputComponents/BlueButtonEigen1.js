import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/inputComponentsStyle/blueButtonEigen1.css';


class BlueButtonEigen1 extends Component{

  constructor(props){
    super(props);

    this.state = {

    }
  }


  render(){


    return(
      <div className="blueButtonEigen1">
            <div className="blueButtonEigen1-outline"></div>
      </div>
    );
  }
}

export default BlueButtonEigen1;