import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/inputComponentsStyle/multipleInputEigen1.css';




class MultipleInputEigen1 extends Component{

  constructor(props){
    super(props);

    this.state = {

    }
    this.inputFocused = this.inputFocused.bind(this);
    this.inputBlured = this.inputBlured.bind(this);
  }
  inputFocused(e){
    e.target.removeAttribute("readonly");

    e.target.parentElement.parentElement.parentElement.classList.add('multipleInputEigen1-inputContainer-active');
    e.target.parentElement.children[0].classList.add('multipleInputEigen1-inputContainer-h4-active');
  }
  inputBlured(e){
    if(e.target.value === ""){
      e.target.parentElement.children[0].classList.remove('multipleInputEigen1-inputContainer-h4-active');
    }
    e.target.parentElement.parentElement.parentElement.classList.remove('multipleInputEigen1-inputContainer-active');
  }
  render(){

    var tmpObj = this.props.propObj;
    
    var elemArr = tmpObj.elemArr;
    for(var i = 0, resArr = []; i < elemArr.length; i++){


      // check wheter element has multiple inputs > item is Arr 
      // no suffix? than add class> .multipleInputEigen1-inputContainer-input-noSuffix
      var inputElems = [];

      if(typeof elemArr[i] === "object" && typeof tmpObj.nameArr[i] === "object"){
        //more input  in one container

        //iterate this array
        for(var j = 0; j < elemArr[i].length; j++){
          //check suffix, here give attion to give the last input noSuffix class

          if(tmpObj.suffixArr[i] === "" && j === (elemArr[i].length-1)){

            //last item-built give noSuffix class
            inputElems.push(<div className="multipleInputEigen1-inputContainer-wrapper2">
                              <h4 className="multipleInputEigen1-inputContainer-h4">{elemArr[i][j]}</h4>
                              <input onChange={tmpObj.fn} tabindex={tmpObj.reachable ? "null" : "-1"} name={tmpObj.nameArr[i][j]} readOnly type={tmpObj.typeArr[i]} onFocus={this.inputFocused} onBlur={this.inputBlured} className="multipleInputEigen1-inputContainer-input multipleInputEigen1-inputContainer-input-noSuffix"/>
                            </div>);
          } else {
            //not last item-built
            inputElems.push(<div className="multipleInputEigen1-inputContainer-wrapper2">
                              <h4 className="multipleInputEigen1-inputContainer-h4">{elemArr[i][j]}</h4>
                              <input onChange={tmpObj.fn} tabindex={tmpObj.reachable ? "null" : "-1"} name={tmpObj.nameArr[i][j]} readOnly type={tmpObj.typeArr[i]} onFocus={this.inputFocused} onBlur={this.inputBlured} className="multipleInputEigen1-inputContainer-input"/>
                            </div>);
          }
          
        }
      } else {
        //single input in one container

        //check suffix

          if(tmpObj.suffixArr[i] === "" ){
            inputElems.push(<div className="multipleInputEigen1-inputContainer-wrapper2">
                              <h4 className="multipleInputEigen1-inputContainer-h4">{elemArr[i]}</h4>
                              <input onChange={tmpObj.fn} tabindex={tmpObj.reachable ? "null" : "-1"} name={tmpObj.nameArr[i]} readOnly type={tmpObj.typeArr[i]} onFocus={this.inputFocused} onBlur={this.inputBlured} className="multipleInputEigen1-inputContainer-input multipleInputEigen1-inputContainer-input-noSuffix"/>
                            </div>);
          } else {
            inputElems.push(<div className="multipleInputEigen1-inputContainer-wrapper2">
                              <h4 className="multipleInputEigen1-inputContainer-h4">{elemArr[i]}</h4>
                              <input onChange={tmpObj.fn} tabindex={tmpObj.reachable ? "null" : "-1"} name={tmpObj.nameArr[i]} readOnly type={tmpObj.typeArr[i]} onFocus={this.inputFocused} onBlur={this.inputBlured} className="multipleInputEigen1-inputContainer-input"/>
                            </div>);
          }

      }
      var prefixElement;
      if(tmpObj.prefixArr[i] !== ""){
        prefixElement = (<div className="multipleInputEigen1-inputContainer-prefix">{tmpObj.prefixArr[i]}</div>); 
      }
      var suffixElement;
      if(tmpObj.suffixArr[i] !== ""){
        suffixElement = (<div className="multipleInputEigen1-inputContainer-suffix">{tmpObj.suffixArr[i]}</div>); 
      }


      resArr.push(<div className="multipleInputEigen1-inputContainer">
                    <div className="multipleInputEigen1-inputContainer-shadow"></div>
                    <div className="multipleInputEigen1-inputContainer-wrapper">
                      {prefixElement ? prefixElement : null}
                      {inputElems}
                      {suffixElement ? suffixElement : null}
                    </div>
                  </div>);
      prefixElement = "";
      suffixElement = "";

    } 
    
    return(
      <div className="multipleInputEigen1">
        {resArr}
      </div>
    );
    
  }
}

export default MultipleInputEigen1;