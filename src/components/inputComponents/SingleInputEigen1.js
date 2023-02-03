import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/inputComponentsStyle/singleInputEigen1.css';


class SingleInputEigen1 extends Component{

  constructor(props){
    super(props);

    this.state = {
      voidKey: 1,
    }
    this.mainParent = React.createRef();

    this.inputFocused = this.inputFocused.bind(this);
    this.inputBlured = this.inputBlured.bind(this);
  }
  inputFocused(e){
    e.target.removeAttribute("readonly");

    e.target.parentElement.parentElement.classList.add('singleInputEigen1-active');
    e.target.parentElement.children[0].classList.add('singleInputEigen1-h4-active');
  }
  inputBlured(e){
    if(e.target.value === ""){
      e.target.parentElement.children[0].classList.remove('singleInputEigen1-h4-active');
    }
    e.target.parentElement.parentElement.classList.remove('singleInputEigen1-active');
  }


  render(){
    var tmpObj = this.props.propObj;
    var prefixElement;
    if(tmpObj.prefix !== ""){
      prefixElement = (<div className="singleInputEigen1-prefix">{tmpObj.prefix}</div>); 
    }
    var suffixElement, inputClass;
    if(tmpObj.suffix !== ""){
      inputClass = "singleInputEigen1-input";
      suffixElement = (<div className="singleInputEigen1-suffix">{tmpObj.suffix}</div>); 
    } else {
      inputClass = "singleInputEigen1-input singleInputEigen1-input-noSuffix";
    }


    var inputValue = "";
    var h4Class = "singleInputEigen1-h4"
    if(tmpObj.hasOwnProperty("value")){
      inputValue = tmpObj.value;
      h4Class = "singleInputEigen1-h4 singleInputEigen1-h4-active";
    }

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
    

    var resArr = [];
    if(typeof tmpObj.elem === "object" && typeof tmpObj.name === "object"){
        //more input  in one container

        //iterate this array
        for(var j = 0; j < tmpObj.elem.length; j++){
          //check suffix, here give attion to give the last input noSuffix class
          if(j === (tmpObj.elem.length-1)){
            resArr.push(<div key={tmpObj.key} className="singleInputEigen1-wrapper">
                         <h4 className={h4Class}>{tmpObj.elem[j]}</h4>
                         <input onChange={tmpObj.fn} defaultValue={inputValue} type={tmpObj.type[j]} name={tmpObj.name[j]} tabindex={tmpObj.reachable ? "null" : "-1"} onFocus={this.inputFocused} onBlur={this.inputBlured} className={inputClass} />
                      </div>);
          } else {
            resArr.push(<div key={tmpObj.key} className="singleInputEigen1-wrapper">
                         <h4 className={h4Class}>{tmpObj.elem[j]}</h4>
                         <input onChange={tmpObj.fn} defaultValue={inputValue} type={tmpObj.type[j]} name={tmpObj.name[j]} tabindex={tmpObj.reachable ? "null" : "-1"} onFocus={this.inputFocused} onBlur={this.inputBlured} className='singleInputEigen1-input' />
                      </div>);
          }
          
        }
      } else {

      
        //single input in one container
        resArr.push(<div key={tmpObj.key} className="singleInputEigen1-wrapper">
                        <h4 className={h4Class}>{tmpObj.elem}</h4>
                        <input onChange={tmpObj.fn}  defaultValue={inputValue} type={tmpObj.type} name={tmpObj.name} tabindex={tmpObj.reachable ? "null" : "-1"} onFocus={this.inputFocused} onBlur={this.inputBlured} className={inputClass} />
                    </div>);



      }





    


    return(
      <div ref={this.mainParent} className="singleInputEigen1">
            <div className="singleInputEigen1-shadow"></div>
            {prefixElement ? prefixElement : null}
            {resArr}
            {suffixElement ? suffixElement : null}

      </div>
    );
  }
}

export default SingleInputEigen1;