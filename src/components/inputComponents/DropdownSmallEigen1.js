import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/inputComponentsStyle/dropdownSmallEigen1.css';
import arrowup from '../../assets/arrowup.png';

class DropdownSmallEigen1 extends Component{

  constructor(props){
    super(props);

    this.state = {
      dropdown: false,
      inputValue: "",
    }

    this.inputFocused = this.inputFocused.bind(this);
    this.inputBlured = this.inputBlured.bind(this);
    this.optionClicked = this.optionClicked.bind(this);
  }
  
  inputFocused(e){
    this.setState({
      dropdown: true,
      inputValue: this.state.inputValue,
    });
    e.target.classList.add("dropdownSmallEigen1-input-displayNone");
  }
  inputBlured(e){
    this.setState({
      dropdown: false,
      inputValue: this.state.inputValue,
    });
    e.target.classList.remove("dropdownSmallEigen1-input-displayNone");
  }
  optionClicked(e){
    var tmpStr = e.target.innerText;
    e.target.parentElement.parentElement.children[0].innerText = tmpStr;
    this.setState({
      dropdown: this.state.dropdown,
      inputValue: tmpStr,
    });
  }
  render(){
    var tmpObj = this.props.propObj;
    var heightNum = (27.7*tmpObj.optionArr.length)+3.5;
    var heightStyle, dropdownClass; 
    if(this.state.dropdown){
      heightStyle = {
        height: heightNum+"px",
        opacity: "1",
        top: "113%",
      }
      dropdownClass = "dropdownSmallEigen1 dropdownSmallEigen1-active";
    } else {
      dropdownClass = "dropdownSmallEigen1";
    }

    for(var i = 0, resArr = []; i < tmpObj.optionArr.length; i++){
      resArr.push(<div onClick={this.optionClicked} className="dropdownSmallEigen1-dropdownList-item">{tmpObj.optionArr[i]}</div>);
    }



    return(
      <div className={dropdownClass}>
        <h4 className="dropdownSmallEigen1-h4">{tmpObj.initialStr}</h4>
        <img className="dropdownSmallEigen1-img" src={arrowup}/>
        <div className="dropdownSmallEigen1-shadow"></div>
        <input tabindex={tmpObj.reachable ? "null" : "-1"} readOnly name={tmpObj.name} value={this.state.inputValue} onFocus={this.inputFocused} onBlur={this.inputBlured}  className="dropdownSmallEigen1-input"/>

        <div style={heightStyle ? heightStyle : null} className="dropdownSmallEigen1-dropdownList">

          {resArr}
          
        </div>
      </div>
    );
  }
}

export default DropdownSmallEigen1;