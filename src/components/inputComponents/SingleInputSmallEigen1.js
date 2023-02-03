import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/inputComponentsStyle/singleInputSmallEigen1.css';


class SingleInputSmallEigen1 extends Component{

  constructor(props){
    super(props);

    this.state = {

    }
    this.inputFocused = this.inputFocused.bind(this);
    this.inputBlured = this.inputBlured.bind(this);
  }
  inputFocused(e){
    e.target.removeAttribute("readonly");

    e.target.parentElement.parentElement.classList.add('singleInputSmallEigen1-active');
    e.target.parentElement.children[0].classList.add('singleInputSmallEigen1-h4-active');
  }
  inputBlured(e){
    if(e.target.value === ""){
      e.target.parentElement.children[0].classList.remove('singleInputSmallEigen1-h4-active');
    }
    e.target.parentElement.parentElement.classList.remove('singleInputSmallEigen1-active');
  }


  render(){
    var tmpObj = this.props.propObj;

    var prefixElement;
    if(tmpObj.prefix !== ""){
      prefixElement = (<div className="singleInputSmallEigen1-prefix">{tmpObj.prefix}</div>); 
    }
    var suffixElement, inputClass;
    if(tmpObj.suffix !== ""){
      inputClass = "singleInputSmallEigen1-input";
      suffixElement = (<div className="singleInputSmallEigen1-suffix">{tmpObj.suffix}</div>); 
    } else {
      inputClass = "singleInputSmallEigen1-input singleInputSmallEigen1-input-noSuffix";
    }


    var resArr = [];
    var placeholderClass


    if(tmpObj.placeholder.length != 0){
      placeholderClass = "singleInputSmallEigen1-wrapper inputHasPlaceholder";
      resArr.push(<div className={placeholderClass}>
                          <h4 className="singleInputSmallEigen1-h4"></h4>
                          <input type={tmpObj.type} placeholder={tmpObj.placeholder} name={tmpObj.name} tabindex={tmpObj.reachable ? "null" : "-1"} readOnly onFocus={this.inputFocused} onBlur={this.inputBlured} className={inputClass}/>
                      </div>);
    } else {
      if(typeof tmpObj.elem === "object" && typeof tmpObj.name === "object"){
          //more input  in one container
          //iterate this array
          for(var j = 0; j < tmpObj.elem.length; j++){
            //check suffix, here give attion to give the last input noSuffix class
            if(j === (tmpObj.elem.length-1)){
              resArr.push(<div className="singleInputSmallEigen1-wrapper">
                           <h4 className="singleInputSmallEigen1-h4">{tmpObj.elem[j]}</h4>
                           <input type={tmpObj.type[j]} name={tmpObj.name[j]} tabindex={tmpObj.reachable ? "null" : "-1"} readOnly onFocus={this.inputFocused} onBlur={this.inputBlured} className={inputClass}/>
                        </div>);
            } else {
              resArr.push(<div className="singleInputSmallEigen1-wrapper">
                           <h4 className="singleInputSmallEigen1-h4">{tmpObj.elem[j]}</h4>
                           <input type={tmpObj.type[j]} name={tmpObj.name[j]} tabindex={tmpObj.reachable ? "null" : "-1"} readOnly onFocus={this.inputFocused} onBlur={this.inputBlured} className='singleInputSmallEigen1-input'/>
                        </div>);
            }
            
          }
        } else {
          //single input in one container
          resArr.push(<div className="singleInputSmallEigen1-wrapper">
                          <h4 className="singleInputSmallEigen1-h4">{tmpObj.elem}</h4>
                          <input type={tmpObj.type} name={tmpObj.name} tabindex={tmpObj.reachable ? "null" : "-1"} readOnly onFocus={this.inputFocused} onBlur={this.inputBlured} className={inputClass}/>
                      </div>);
        }
    }
    return(
      <div className="singleInputSmallEigen1">
            <div className="singleInputSmallEigen1-shadow"></div>
            {prefixElement ? prefixElement : null}
            {resArr}
            {suffixElement ? suffixElement : null}

      </div>
    );
  }
}

export default SingleInputSmallEigen1;