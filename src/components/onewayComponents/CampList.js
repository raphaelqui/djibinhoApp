import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/onewayComponentsStyle/campList.css';

import { connect } from 'react-redux';
import { deleteCamp } from '../../actions/index.js';

import DropdownEigen1 from './../inputComponents/DropdownEigen1.js';
import SingleInputEigen1 from './../inputComponents/SingleInputEigen1.js';
import AssignerEigen1 from './../inputComponents/AssignerEigen1.js';
import NoteEigen1 from './../inputComponents/NoteEigen1.js';
import SingleInputSmallEigen1 from './../inputComponents/SingleInputSmallEigen1.js';
import CalendarSmallEigen1 from './../inputComponents/CalendarSmallEigen1.js';
import CalendarEigen1 from './../inputComponents/CalendarEigen1.js';


import pencilIcon from './../../assets/pencil.svg';
import binIcon from './../../assets/bin.svg';

import binHoverIcon from './../../assets/binHover.svg';
import pencilHoverIcon from './../../assets/pencilHover.svg';




import MultipleInputEigen1 from './../inputComponents/MultipleInputEigen1.js';


class CampList extends Component{

  constructor(props){
    super(props);

    this.state = {
      zone: [(function(){var d, tStr1, tStr2;d = new Date();d.setMonth(d.getMonth()-3);if((""+d.getMonth()).length===1){tStr1="0"+d.getMonth();}else{tStr1=""+d.getMonth();}if((""+d.getDate()).length === 1){tStr2="0"+d.getDate();}else{tStr2 = ""+d.getDate();}return parseFloat(d.getFullYear()+tStr1+tStr2);})(), (function(){var d, tStr1, tStr2;d = new Date();d.setMonth(d.getMonth()+3);if((""+d.getMonth()).length===1){tStr1="0"+d.getMonth();}else{tStr1=""+d.getMonth();}if((""+d.getDate()).length === 1){tStr2="0"+d.getDate();}else{tStr2 = ""+d.getDate();}return parseFloat(d.getFullYear()+tStr1+tStr2);})()],
      started: 0, 
      cid: 0
    }
    this.changeZoneBegin = this.changeZoneBegin.bind(this);
    this.changeZoneLimit = this.changeZoneLimit.bind(this);
    this.nextStep = this.nextStep.bind(this);

    this.campList = React.createRef();

  }


  sortCamps(arr){
    var tArr = arr;
    var rArr = [];
    var dArr;
    rArr.push(tArr[0]);
    tArr.shift();
    while(0 < tArr.length){
      for(var j = 0; j < rArr.length; j++){
          if(tArr[0].startDate > rArr[j].startDate){
            dArr = rArr.splice(j);
            rArr.push(tArr[0]);
            rArr = rArr.concat(dArr);
            tArr.shift(); 
            break;      
          } else if(j === rArr.length-1) {
            rArr.push(tArr[0]);
            tArr.shift();
            break;
          }
      }
    }
    return rArr;
  }


  filterZone(arr, begin, limit){
    var rArr = [];
    for(var i = 0; i < arr.length; i++){
      if(begin <= arr[i].startDate  && limit >= arr[i].endDate){
          rArr.push(arr[i]);
      }
    }
    return rArr;
  }



  changeZoneBegin(newPoint){
    console.log(newPoint);
    this.setState({
      zone: [newPoint, this.state.zone[1]],
      started: this.state.started
    });
  }
  changeZoneLimit(newPoint){
    console.log(newPoint);
    this.setState({
      zone: [this.state.zone[0], newPoint],
      started: this.state.started
    });
  }

  /*


  nextStep(e){
    e.target.parentElement.parentElement.children[0].setAttribute('started', '1');
    setTimeout(function(){
        e.target.parentElement.parentElement.children[0].classList.add('loadingbar-completed');
      setTimeout(function(){
        e.target.parentElement.parentElement.children[0].setAttribute('started', '0');
        e.target.parentElement.parentElement.children[0].classList.remove('loadingbar-completed');
      }, 400);
    }, 400);

    e.target.parentElement.parentElement.children[2].setAttribute('surface', '1');
    e.target.parentElement.parentElement.children[1].setAttribute('surface', '0');
  }

  */


  nextStep(e){

    if(e.target.getAttribute('class') === "campList-sidemenu-camplist-unit-status" || e.target.getAttribute('class') === "campList-sidemenu-camplist-unit-status-img2"){
      

      var elemPath = e.target;
      var destClass = "campList-sidemenu-camplist-unit"; // Zielklasse angeben, also die Klasse des angestrebten Elementes
      for(var j = 0; j < 20; j++){
        if(destClass === elemPath.getAttribute("class")){
          break;
        }
        elemPath = elemPath.parentElement;
      }
      

      this.props.propObj.startapprovement("Bist du dir sicher das Camp „ "+elemPath.children[1].innerText+" ” zu löschen?", "Ja, löschen", ["DELETE_CAMP", elemPath.getAttribute("cid")]);

    } else {

      //ausführen bei Auswahl in der Liste
      var elemPath = e.target;
      var destClass = "campList-sidemenu-camplist-unit"; // Zielklasse angeben, also die Klasse des angestrebten Elementes
      for(var j = 0; j < 20; j++){
        if(destClass === elemPath.getAttribute("class")){
          break;
        }
        elemPath = elemPath.parentElement;
      }


      this.setState({
        started: 1,
        cid: elemPath.getAttribute("cid"),
      });


      elemPath = e.target.parentElement;
      destClass = "campList"; // Zielklasse angeben, also die Klasse des angestrebten Elementes
      for(var j = 0; j < 20; j++){
        elemPath = elemPath.parentElement;
        if(destClass === elemPath.getAttribute("class")){
          break;
        }
      }
      elemPath.children[0].setAttribute('started', '1');
      setTimeout(function(){
          elemPath.children[0].classList.add('loadingbar-completed');
        setTimeout(function(){
          elemPath.children[0].setAttribute('started', '0');
          elemPath.children[0].classList.remove('loadingbar-completed');
        }, 400);
      }, 400);
      for(var i = 0; i < 3; i++){
        if(elemPath.children[i].getAttribute('surface') == '1'){

          elemPath.children[i].setAttribute('surface', '0');
          elemPath.children[i+1].setAttribute('surface', '1');

          break;    
        }
      }
    }


  }

















  lastStep(e){
    e.target.parentElement.parentElement.children[0].setAttribute('started', '1');
    setTimeout(function(){
        e.target.parentElement.parentElement.children[0].classList.add('loadingbar-completed');
      setTimeout(function(){
        e.target.parentElement.parentElement.children[0].setAttribute('started', '0');
        e.target.parentElement.parentElement.children[0].classList.remove('loadingbar-completed');
      }, 400);
    }, 400);

    e.target.parentElement.parentElement.children[2].setAttribute('surface', '0');
    e.target.parentElement.parentElement.children[1].setAttribute('surface', '1');
  }




  render(){
    var zoneStart, zoneEnd; 
    
    zoneStart = this.state.zone[0];
    zoneEnd = this.state.zone[1];

    zoneStart = (""+zoneStart).substr(6, 2)+"."+(""+zoneStart).substr(4, 2)+"."+(""+zoneStart).substr(0, 4);
    zoneEnd = (""+zoneEnd).substr(6, 2)+"."+(""+zoneEnd).substr(4, 2)+"."+(""+zoneEnd).substr(0, 4);
  

    var tmpObj = {
      reachable: true,
      elem: zoneStart, 
      name: 'referenceNumber',
      reverse: "0",
      unfoldDirec: "left",
      extraFn1: this.changeZoneBegin,
    }
    var tmpObj2 = {
      reachable: true,
      elem: zoneEnd, 
      name: 'referenceNumber',
      reverse: "1",
      unfoldDirec: "right",
      extraFn1: this.changeZoneLimit,
    }
    var searchInputObj = {
      reachable: true,
      elem: "", 
      placeholder: 'Datum, Camp-Name, Ort',
      type: 'text',
      prefix: '',
      suffix: 'Suche nach Camps',
      name: "d",
    }



    var campArr = this.props.propObj.campArr;


    // definiere ein currentcamp
    var currentCamp = {
      cid: this.state.cid,
      name: campArr[0].name,
      ort: campArr[0].ort,
      startDate: campArr[0].startDate,            
      endDate: campArr[0].startDate,
    }
    var campKey = 0;
    for(var j = 0; j < campArr.length; j++){
      if(campArr[j].id == this.state.cid){
        campKey = j; 
        currentCamp = {
          cid: this.state.cid,
          name: campArr[campKey].name,
          ort: campArr[campKey].ort,
          startDate: campArr[campKey].startDate,            
          endDate: campArr[campKey].endDate,
        }
        break;
      }
    }




    var tmpCampsArr = campArr.slice(0);

    tmpCampsArr = this.sortCamps(tmpCampsArr);
    tmpCampsArr = this.filterZone(tmpCampsArr, this.state.zone[0], this.state.zone[1]);

    var resArr = [];
    for(var i = 0, tStr, startDateStr, endDateStr; i < tmpCampsArr.length; i++){
      startDateStr = ""+tmpCampsArr[i].startDate;
      endDateStr = ""+tmpCampsArr[i].endDate;
      tStr = (startDateStr.substr(6, 2))+"."+(startDateStr.substr(4, 2))+" - "+(endDateStr.substr(6, 2))+"."+(endDateStr.substr(4, 2))+"."+(endDateStr.substr(0, 4));
      resArr.push(<div cid={tmpCampsArr[i].id} onClick={this.nextStep} className="campList-sidemenu-camplist-unit">
                     <div className="campList-sidemenu-camplist-unit-id">#{tmpCampsArr[i].id}</div> 
                     <div className="campList-sidemenu-camplist-unit-name">{tmpCampsArr[i].name}, <p>{tmpCampsArr[i].ort}</p></div> 
                     <div className="campList-sidemenu-camplist-unit-timespace">{tStr}</div>
                     <div num="2" className="campList-sidemenu-camplist-unit-status"><img className="campList-sidemenu-camplist-unit-status-img" src={binIcon}/><img className="campList-sidemenu-camplist-unit-status-img2" src={binHoverIcon}/></div> 
                  </div>);
      if(i < tmpCampsArr.length-1){
        resArr.push(<div className="campList-sidemenu-camplist-seperator"></div>); 
      }
    } 
    


    return(


      <div className="campList">

        <div ref={this.loadref} started={this.state.started} className="campList-loadingbar"></div>

        <div id="1" className="campList-sidemenu" surface="1">

          <h3 className="campList-sidemenu-h3">CampList</h3>

          <div className="campList-stepindicator">
            <div className="campList-stepindicator-unit" active="1"></div>
            <div className="campList-stepindicator-unit" active="0"></div>
          </div>

          <div className="campList-sidemenu-searchcamp">
            <SingleInputSmallEigen1 propObj={searchInputObj}/> 
          </div>
          <div className="campList-sidemenu-startdate">
            <h3 className="campList-sidemenu-startdate-h3">Von</h3>
            <CalendarSmallEigen1 propObj={tmpObj}/>
          </div>
          <div className="campList-sidemenu-enddate">
            <h3 className="campList-sidemenu-enddate-h3">Bis</h3>
            <CalendarSmallEigen1 propObj={tmpObj2}/>
          </div>
          <div onClick={this.props.propObj.lastblockslide} className="campList-sidemenu-btncreatecamp">zurück zur Übersicht</div>
          <div ref={this.refCamplist} className="campList-sidemenu-camplist">
            <div className="campList-sidemenu-camplist-resultnum">{tmpCampsArr.length} Ergebnisse</div>
            {resArr}
          </div> 

        </div>


        <div id="2" className="campList-sidemenu" surface="0">

          <h3 className="campList-sidemenu-h3">CampList</h3>

          <div className="campList-stepindicator">
            <div className="campList-stepindicator-unit" active="0"></div>
            <div className="campList-stepindicator-unit" active="1"></div>
          </div>

          <h4 className="campList-campname">{currentCamp.name}</h4>
          <div className="campList-metadata">
            <div className="campList-metadata-desc">CID: <p className="campList-metadata-desc-info">#{currentCamp.cid}</p></div>
            <div className="campList-metadata-desc">LOCATION: <p className="campList-metadata-desc-info">{currentCamp.ort}</p></div>
            <div className="campList-metadata-desc">DURATION: <p className="campList-metadata-desc-info">{(currentCamp.startDate+"").substr(6, 2)+"."+(currentCamp.startDate+"").substr(4, 2)+"."+(currentCamp.startDate+"").substr(0, 4)} - {(currentCamp.endDate+"").substr(6, 2)+"."+(currentCamp.endDate+"").substr(4, 2)+"."+(currentCamp.endDate+"").substr(0, 4)}</p></div>
          </div>

          <div num="2" onClick={this.lastStep} className="campList-sidemenu-btn2">zurück</div>


        </div>
            
      </div>

    );
    
  }
}


var mapStateToProps = function(state){
  return{
    campArr: state.campArr
  }
}
var mapDispatchToProps = {
  deleteCamp: deleteCamp,
}

var CampListContainer = connect(mapStateToProps, mapDispatchToProps)(CampList);
export default CampListContainer;
