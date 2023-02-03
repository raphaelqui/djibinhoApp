import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/inputComponentsStyle/checkboxEigen1.css';



class CheckboxEigen1 extends Component{

  constructor(props){
    super(props);

    this.state = {
      checked: this.props.propObj.checked,
    }
    this.boxClicked = this.boxClicked.bind(this);
    this.inputRef = React.createRef();
  }
  boxClicked(e){
    if(this.state.checked){
      this.inputRef.current.value = "false";
    } else {
      this.inputRef.current.value = "true";
    }

    this.setState({
      checked: !this.state.checked || false,
    });
    

    
  }
  render(){

    var tmpObj = this.props.propObj;
    // die reachable prop ist bei der Checkbox immer auf false
    var hookClass;
    if(this.state.checked){
      hookClass = 'checkboxEigen1-box-hook checkboxEigen1-box-hook-active';
    } else {
      hookClass = 'checkboxEigen1-box-hook'
    }

    return(
      <div className="checkboxEigen1">
          <input tabindex="-1" ref={this.inputRef} className="checkboxEigen1-input"/>
          <div onClick={this.boxClicked} className="checkboxEigen1-box">
            <div className={hookClass}></div>
          </div>
          <div className="checkboxEigen1-html">{tmpObj.html}</div>
        
      </div>
    );
  }
}

export default CheckboxEigen1;