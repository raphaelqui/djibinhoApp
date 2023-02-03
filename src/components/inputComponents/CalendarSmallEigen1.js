import React, { Component } from 'react';

import { connect } from 'react-redux'; 
import { incrementCounter } from '../../actions/index.js';

import PropTypes from 'prop-types';
import '../../resources/inputComponentsStyle/calendarSmallEigen1.css';

import arrowleft from '../../assets/arrowleft.png';
import arrowright from '../../assets/arrowright.png';


class CalendarSmallEigen1 extends Component{

  constructor(props){
    super(props);

    this.state = {
      hoyObj: new Date( parseFloat((""+this.props.propObj.elem).substr(6, 4)), (parseFloat((""+this.props.propObj.elem).substr(3, 2))-1), parseFloat((""+this.props.propObj.elem).substr(0, 2)) ),      
    }



    this.inputFocused = this.inputFocused.bind(this);
    this.switchMonth = this.switchMonth.bind(this);

    this.close = this.close.bind(this);
    this.clickedBackground = this.clickedBackground.bind(this);
    this.chosenDate = this.chosenDate.bind(this);
      

    this.inputRef = React.createRef();
    this.monthArr = ["Januar", "Februar", " März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

    this.propObj = this.props.propObj;

  }


  inputFocused(e){




    this.setState({
      hoyObj: new Date( parseFloat((""+this.props.propObj.elem).substr(6, 4)), (parseFloat((""+this.props.propObj.elem).substr(3, 2))-1), parseFloat((""+this.props.propObj.elem).substr(0, 2)) ),
    });

    for(var i = 0, tmpObj = e.target; true; i++){
      tmpObj = tmpObj['parentElement'];
      if(tmpObj.getAttribute("class") === "interface"){
        break;
      }
    }
    e.target.parentElement.parentElement.classList.add('calendarSmallEigen1-active');
    e.target.parentElement.parentElement.children[3].classList.add('calendarbox-active');

    e.target.parentElement.parentElement.children[2].style.height = (1.6*(tmpObj.offsetHeight)+'px');
    e.target.parentElement.parentElement.children[2].style.width = (1.6*(tmpObj.offsetWidth)+'px');


    setTimeout(function(){
      e.target.parentElement.parentElement.children[3].children[0].classList.add('fadein-active');
    }, 150);

    

  }


  switchMonth(e){
    var tmpDate = this.state.hoyObj; 
    if(e.target.getAttribute("direction") === "left"){
      tmpDate.setDate(0);
      tmpDate.setDate(1);
      tmpDate.setDate(tmpDate.getDate());
      this.setState({
        hoyObj: tmpDate,
      });
    } else {
      tmpDate.setMonth(tmpDate.getMonth()+1);
      this.setState({
        hoyObj: tmpDate,
      });
    }
  }

  chosenDate(e){
    var tmpDate = this.state.hoyObj;
    tmpDate.setDate(parseFloat(e.target.innerText));  
    var dateStr = ""+tmpDate.getDate();
    if(dateStr.length == 1){
      dateStr = "0"+dateStr;
    }
    var monthStr = ""+(tmpDate.getMonth()+1);
    if(monthStr.length == 1){
      monthStr = "0"+monthStr;
    }
    var tmpStr = dateStr+"."+monthStr+"."+tmpDate.getFullYear();

    e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].value = tmpStr;
    this.propObj.elem = tmpStr;

    this.close(e.target.parentElement.parentElement.parentElement.parentElement);


    if(this.propObj.extraFn1){
      this.propObj.extraFn1(parseFloat(tmpDate.getFullYear()+monthStr+dateStr));
    }


  }
  
  clickedBackground(e){
    this.close(e.target.parentElement);


  }

  close(obj){
    obj.children[3].children[0].classList.remove('fadein-active');
    setTimeout(function(){
      obj.classList.remove('calendarSmallEigen1-active');
      obj.children[3].classList.remove('calendarbox-active');
    }, 150);
    obj.children[2].style.height = ('0px');
    obj.children[2].style.width = ('0px');

        


  }

  render(){


    var unitArr = [];
    var weekD = [6, 0, 1, 2, 3, 4, 5];
    var dateObj = this.state.hoyObj;


    dateObj.setDate(1);
    var startD = weekD[dateObj.getDay()];
    dateObj.setDate(0);
    var formerEndD = dateObj.getDate();
    dateObj.setDate(1);
    dateObj.setMonth(dateObj.getMonth()+2);
    dateObj.setDate(0);
    var limitD = dateObj.getDate();
    dateObj.setDate(1);
    for(var i = 0, j = 1,j2 = 1, j3 = formerEndD+1; i < 42; i++){
      if(i >= startD && j <= limitD){
        unitArr.push(<div onClick={this.chosenDate} thismonth="true" className="calendarSmallEigen1-calendarbox-wrapper-unit">{j}</div>);
        j++;
      } else if(i <= startD) {
        unitArr.push(<div thismonth="false" className="calendarSmallEigen1-calendarbox-wrapper-unit">{j3-startD}</div>);
        j3++;
      } else {
        unitArr.push(<div thismonth="false" className="calendarSmallEigen1-calendarbox-wrapper-unit">{j2}</div>);
        j2++;
      }
    }





    


    return(
      <div reverse={this.propObj.reverse} className="calendarSmallEigen1">



            <div reverse={this.propObj.reverse} className="calendarSmallEigen1-shadow"></div>
            
            <div onClick={this.open} className="calendarSmallEigen1-wrapper">
                <input onFocus={this.inputFocused} ref={this.inputRef} type={this.propObj.type} name={this.propObj.name} value={this.propObj.elem} tabindex={this.propObj.reachable ? "null" : "-1"} readOnly className="calendarSmallEigen1-input"/>
            </div>



            <div onClick={this.clickedBackground} className="calendarSmallEigen1-windowbackground"></div>


            <div  unfoldDirec={this.propObj.unfoldDirec} className="calendarSmallEigen1-calendarbox">
              <div className="calendarSmallEigen1-calendarbox-fadeinwrapper">

                <h3 className="calendarSmallEigen1-calendarbox-h3">{this.monthArr[dateObj.getMonth()]}, <p className="calendarSmallEigen1-calendarbox-h3-p">{dateObj.getFullYear()}</p></h3>

                <div onClick={this.switchMonth} direction="left" className="calendarSmallEigen1-calendarbox-arrow">
                  <img direction="left" className="calendarSmallEigen1-calendarbox-arrowimg" src={arrowleft}/>
                </div>

                <div onClick={this.switchMonth} direction="right" className="calendarSmallEigen1-calendarbox-arrow">
                  <img direction="right" className="calendarSmallEigen1-calendarbox-arrowimg" src={arrowright}/>
                </div>

                <div className="calendarSmallEigen1-calenderbox-weekdaynamewrapper">
                  <div className="calendarSmallEigen1-calendarbox-weekdaynamewrapper-unit">Mon</div>
                  <div className="calendarSmallEigen1-calendarbox-weekdaynamewrapper-unit">Din</div>
                  <div className="calendarSmallEigen1-calendarbox-weekdaynamewrapper-unit">Mit</div>
                  <div className="calendarSmallEigen1-calendarbox-weekdaynamewrapper-unit">Don</div>
                  <div className="calendarSmallEigen1-calendarbox-weekdaynamewrapper-unit">Fre</div>
                  <div className="calendarSmallEigen1-calendarbox-weekdaynamewrapper-unit">Sam</div>
                  <div className="calendarSmallEigen1-calendarbox-weekdaynamewrapper-unit">Son</div>
                </div>

                <div className="calendarSmallEigen1-calendarbox-wrapper">
                  {unitArr}
                </div>
              </div> 
            </div>



      </div>
    );
  }
}

//------------------------------------------------------------------------------



var mapStateToProps = function(state){
  return{
    arr: state.pwArr
  }
}
var mapDispatchToProps = {
  fn: incrementCounter
}


var CalendarSmallEigen1Container = connect(mapStateToProps, mapDispatchToProps)(CalendarSmallEigen1);


export default CalendarSmallEigen1Container;