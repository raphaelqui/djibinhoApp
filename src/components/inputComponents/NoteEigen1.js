import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/inputComponentsStyle/noteEigen1.css';


class NoteEigen1 extends Component{

  constructor(props){
    super(props);

    this.state = {

    }
    this.inputFocused = this.inputFocused.bind(this);
    this.inputBlured = this.inputBlured.bind(this);
  }
  inputFocused(e){
    e.target.removeAttribute("readonly");

    e.target.parentElement.parentElement.classList.add('noteEigen1-active');
  }
  inputBlured(e){
    e.target.parentElement.parentElement.classList.remove('noteEigen1-active');
  }


  render(){
    
    var tmpObj = this.props.propObj;

    var prefixElement;
    if(tmpObj.prefix !== ""){
      prefixElement = (<div className="noteEigen1-prefix">{tmpObj.prefix}</div>); 
    }
    var suffixElement, inputClass;
    if(tmpObj.suffix !== ""){
      inputClass = "noteEigen1-input";
      suffixElement = (<div className="noteEigen1-suffix">{tmpObj.suffix}</div>); 
    } else {
      inputClass = "noteEigen1-input noteEigen1-input-noSuffix";
    }

    var resArr = [];
    if(tmpObj.void && this.state.voidKey == 1){
      this.setState({
        voidKey: 2,
      });
      tmpObj.key = 1;
    } else if(tmpObj.void && this.state.voidKey == 2){
      this.setState({
        voidKey: 1,
      });
      tmpObj.key = 2;
    }

    //single input in one container
    resArr.push(<div key={tmpObj.key} className="noteEigen1-wrapper">
                    <textarea type={tmpObj.type} name={tmpObj.name} tabindex={tmpObj.reachable ? "null" : "-1"} onFocus={this.inputFocused} onBlur={this.inputBlured} className={inputClass}/>
                </div>);

    return(
      <div className="noteEigen1">
            <div className="noteEigen1-shadow"></div>
            {resArr}

      </div>
    );
  }
}

export default NoteEigen1;