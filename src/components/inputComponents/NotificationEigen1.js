import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/inputComponentsStyle/notificationEigen1.css';

import cross from './../../assets/cross.png';


class NotificationEigen1 extends Component{

  constructor(props){
    super(props);

    this.state = {
      
    }
  }


  render(){

    var tmpObj = this.props.propObj;



    return(
      <div className="notification">
          <div className="notification-popup"></div>
      </div>
    );
  }
}

export default NotificationEigen1;