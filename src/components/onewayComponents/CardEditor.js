import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProfile } from '../../actions/index.js';
import { updateProfile } from '../../actions/index.js';


import PropTypes from 'prop-types';
import '../../resources/onewayComponentsStyle/cardEditor.css';

import DropdownSmallEigen1 from './../inputComponents/DropdownSmallEigen1.js';
import SingleInputEigen1 from './../inputComponents/SingleInputEigen1.js';
import AssignerEigen1 from './../inputComponents/AssignerEigen1.js';
import NoteEigen1 from './../inputComponents/NoteEigen1.js';
import SingleInputSmallEigen1 from './../inputComponents/SingleInputSmallEigen1.js';
import CalendarSmallEigen1 from './../inputComponents/CalendarSmallEigen1.js';
import CalendarEigen1 from './../inputComponents/CalendarEigen1.js';

import MultipleInputEigen1 from './../inputComponents/MultipleInputEigen1.js';
import ValueListEigen1 from './../inputComponents/ValueListEigen1.js';

import binIcon from './../../assets/bin.svg';
import binHoverIcon from './../../assets/binHover.svg';


class CardEditor extends Component{

  constructor(props){
    super(props);

    this.state = {
      started: 0, 
      pid: "undefined",
      void: false, 
    }


    this.loadref = React.createRef();
    this.mainParent = React.createRef();

    this.nextStep = this.nextStep.bind(this);
    this.changeProfileContainer = this.changeProfileContainer.bind(this);
    this.getCurrProObj = this.getCurrProObj.bind(this);

    this.clearForm = this.clearForm.bind(this);

    this.lastStep = this.lastStep.bind(this);

    this.navigate = this.navigate.bind(this);

  }





  nextStep(e){





    if(e.target.getAttribute('class') === "cardEditor-profilelist-unit-deleteunit" || e.target.getAttribute('class') === "cardEditor-profilelist-unit-deleteunit-img2"){

      var elemPath = e.target;
      var destClass = "cardEditor-profilelist-unit"; // Zielklasse angeben, also die Klasse des angestrebten Elementes
      for(var j = 0; j < 20; j++){
        if(destClass === elemPath.getAttribute("class")){
          break;
        }
        elemPath = elemPath.parentElement;
      }
      var pid = e.target.getAttribute("pid");
      var graphId;
      for(var i = 0; i < this.props.profileArr.length; i++){
        if(this.props.profileArr[i].id == pid){
          graphId = this.props.profileArr[i].graphId;
        }
      }


      this.props.propObj.startapprovement("Bist du dir sicher das Spielerprofil von "+elemPath.children[1].children[0].innerText+" zu löschen?", "Ja, löschen", ["DELETE_PLAYERPROFILE", pid, graphId]);




    } else {

      //nur ausführen bei der Liste
      if(e.target.getAttribute("class") != "cardEditor-form-btn"){


        var elemPath = e.target;
        var destClass = "cardEditor-profilelist-unit"; // Zielklasse angeben, also die Klasse des angestrebten Elementes
        for(var j = 0; j < 20; j++){
          if(destClass === elemPath.getAttribute("class")){
            break;
          }
          elemPath = elemPath.parentElement;
        }

        /* 
        this.mainParent.current.children[2].children[2].children[0].children[1].children[1].value = elemPath.getAttribute("pid");
        this.mainParent.current.children[2].children[3].children[0].children[1].children[1].value = elemPath.getAttribute("pid");
        */

        this.setState({
          started: 1,
          pid: elemPath.getAttribute("pid"),
        });


      }  

      elemPath = e.target.parentElement;
      destClass = "CardEditor"; // Zielklasse angeben, also die Klasse des angestrebten Elementes
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
      for(var i = 0; i < 4; i++){
        if(elemPath.children[i].getAttribute('surface') == '1'){

          elemPath.children[i].setAttribute('surface', '0');
          elemPath.children[i+1].setAttribute('surface', '1');

          break;    
        }
      }
    }


  }

  
  changeProfileContainer(e){





    var upProDataArr = [];                    

    for(var pageNum = 0, elemPath, destClass; pageNum < 3; pageNum++){
      //drei mal wird eine die variable elemPath gesetzt 
      elemPath = this.mainParent.current.children[2+pageNum];
      destClass = "cardEditor-form-inputwrapper"; // Zielklasse angeben, also die Klasse des angestrebten Elementes

      for(var i = 0, innerElemPath; i < elemPath.children.length; i++){

        // die J-Variable wird nicht zurück auf den Anfangswert gesetzt, denn diese inkrementiert sich jedes Mal um 1 in den if-statement    

        if(destClass == elemPath.children[i].getAttribute("class")){
          //inputwrapper wurde ausgemacht
          innerElemPath = elemPath.children[i].children[0]
          if(innerElemPath.getAttribute("class") == "singleInputEigen1"){
            
            //input-Component formular wurde ausgemacht
            for(var k = 1; k < innerElemPath.children.length; k++){
              if(innerElemPath.children[k].getAttribute("class") == "singleInputEigen1-wrapper"){
                upProDataArr.push(innerElemPath.children[k].children[1].value);
                k = 1;
                break;
              }
            }
          } else if(innerElemPath.getAttribute("class") == "calendarEigen1") {
            
            //calendar-Component formular wurde ausgemacht
            upProDataArr.push(innerElemPath.children[1].children[0].value);

          }
        }
      }
      i = 0;
    }

    this.clearForm();
    this.props.propObj.updateProfile({}, "UPDATE_PROFILE", { 
                                         pid: this.state.pid,
                                         vorname: upProDataArr[0], 
                                         nachname: upProDataArr[1], 
                                         timeDribbling: [parseFloat(upProDataArr[2]), upProDataArr[3]], 
                                         timeKoordination: [parseFloat(upProDataArr[4]), upProDataArr[5]], 
                                         valSchusskraft: [parseFloat(upProDataArr[6]), upProDataArr[7]],
                                      });


    var elemPath = e.target.parentElement;
    var destClass = "CardEditor"; // Zielklasse angeben, also die Klasse des angestrebten Elementes
    for(var j = 0; j < 20; j++){
      elemPath = elemPath.parentElement;
      if(destClass === elemPath.getAttribute("class")){
        break;
      }
    }


    for(var i = 2; i < 5; i++){
      elemPath.children[i].setAttribute('surface', '0');
    }
    elemPath.children[1].setAttribute('surface', '1');

      
  }
  navigate(){
      window.document.location.href = "profile/?id="+this.state.pid;
  }

  lastStep(e){

    var elemPath = e.target.parentElement;
    var destClass = "CardEditor"; // Zielklasse angeben, also die Klasse des angestrebten Elementes
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

    if(e.target.parentElement.getAttribute("num") == "2"){
      this.clearForm();
    }
    for(var i = 0; i < 5; i++){
      if(elemPath.children[i].getAttribute('surface') == '1'){

        elemPath.children[i].setAttribute('surface', '0');
        elemPath.children[i-1].setAttribute('surface', '1');

        break;    
      }
    }


  }
  clearForm(){
    
    this.setState({
      void: true,
    }, function(){
      this.setState({
        void: false,
      });
    });
  }



  getCurrProObj(pid){


    var profileArr = this.props.profileArr;
    for(var j = 0; j < profileArr.length+1; j++){
      //schaue ob diese pid überhaupt existiert
      if(j == profileArr.length){
        return {
          pid: pid,
          vorname: "platzhalter",
          nachname: "platzhalter",
          timeDribbling: [88, "12.12.2022"],            
          timeKoordination: [98, "12.12.2022"],            
          valSchusskraft: [78, "12.12.2022"],            
        };        
        break;
      }
      if(profileArr[j].id == pid){ 
        return {
          pid: pid,
          vorname: profileArr[j].vorname,
          nachname: profileArr[j].nachname,
          timeDribbling: profileArr[j].timeDribbling,            
          timeKoordination: profileArr[j].timeKoordination,            
          valSchusskraft: profileArr[j].valSchusskraft,            
        };        
        break;
      }
    }
    
  }


  render(){

    

    var profileArr = this.props.propObj.profileArr;
    var profileKey = 0;
    for(var j = 0; j < profileArr.length; j++){
      if(profileArr[j].id == this.state.pid){
        profileKey = j; 
      }
    }



    var dropdownObj = {
      reachable: true,
      initialStr: "Filter",
      optionArr: ["Alphabetisch", "Neuste", "Älteste", 'Aktivität'],
      name: 'optionInput',
      void: this.state.void,
    }
    var inputObj = {
      reachable: true,
      elem: "", 
      placeholder: 'Spielername',
      type: 'text',
      prefix: '',
      suffix: 'Suchen',
      name: "d",
      void: this.state.void,
    }




    var inputDribblingneuObj = {
      reachable: true,
      elem: "Sekunde", 
      type: 'text',
      prefix: '',
      suffix: 'sek.',
      name: "d",
      void: this.state.void, 
    }
    var inputKoordinationneuObj = {
      reachable: true,
      elem: "Sekunde", 
      type: 'text',
      prefix: '',
      suffix: 'sek.',
      name: "d",
      void: this.state.void, 
    }
    var inputSchusskraftneuObj = {
      reachable: true,
      elem: "Schusskraft-Wert", 
      type: 'text',
      prefix: '',
      suffix: '',
      name: "d",
      void: this.state.void, 
    }


    var actualDate = new Date();
    var dateStr = actualDate.getDate();
    if((dateStr+"").length == 1){
      dateStr = "0"+dateStr;
    }
    var monthStr = (actualDate.getMonth()+1);
    if((monthStr+"").length == 1){
      monthStr = "0"+monthStr;
    }

    var actualDateStr = dateStr+"."+monthStr+"."+actualDate.getFullYear(); 

    var calendarObj1 = {
      reachable: true,
      elem: actualDateStr, 
      name: 'referenceNumber',
      reverse: "0",
      unfoldDirec: "lefttop",
      extraFn1: function(){},
    }
    var calendarObj2 = {
      reachable: true,
      elem: actualDateStr, 
      name: 'referenceNumber',
      reverse: "0",
      unfoldDirec: "left",
      extraFn1: function(){},
    }
    var calendarObj3 = {
      reachable: true,
      elem: actualDateStr, 
      name: 'referenceNumber',
      reverse: "0",
      unfoldDirec: "left",
      extraFn1: function(){},
    }







    var resArr = [];
    for(var i = 0; i < profileArr.length; i++){
      resArr.push(<div pid={profileArr[i].id} onClick={this.nextStep} className="cardEditor-profilelist-unit">
                     <div className="cardEditor-profilelist-unit-id">{"#"+profileArr[i].id}</div> 
                     <div className="cardEditor-profilelist-unit-name">{profileArr[i].nachname}, <p>{profileArr[i].vorname}</p></div> 
                     <div className="cardEditor-profilelist-unit-lastattended">letzte Aktivität: <a>{profileArr[i].lastCamps[0]}</a></div> 
                     <div pid={profileArr[i].id+""} className="cardEditor-profilelist-unit-deleteunit"><img className="cardEditor-profilelist-unit-deleteunit-img" src={binIcon}/><img pid={profileArr[i].id+""} className="cardEditor-profilelist-unit-deleteunit-img2" src={binHoverIcon}/></div>
                  </div>);
      if(i < profileArr.length-1){
        resArr.push(<div className="cardEditor-profilelist-seperator"></div>); 
      }
    } 



    return(


      <div ref={this.mainParent} className="CardEditor">

        <div ref={this.loadref} started={this.state.started} className="cardEditor-loadingbar"></div> 

        <div num="1" className="cardEditor-form" surface="1">
          
          <div className="cardEditor-form-stepindicator">
            <div className="cardEditor-form-stepindicator-unit" active="1"></div>
            <div className="cardEditor-form-stepindicator-unit" active="0"></div>
            <div className="cardEditor-form-stepindicator-unit" active="0"></div>
            <div className="cardEditor-form-stepindicator-unit" active="0"></div>
          </div>


          <h1 className="cardEditor-form-headline">Spielerprofil bearbeiten</h1>  


          <div num="1" className="cardEditor-form-inputwrapper">
            <SingleInputSmallEigen1 propObj={inputObj}/>
          </div>

          <div num="2" className="cardEditor-form-inputwrapper">
            <DropdownSmallEigen1 propObj={dropdownObj}/>
          </div>

          <div num="1" onClick={this.props.propObj.lastblockslide} className="cardEditor-form-btn2">zurück zur Übersicht</div>

          <div className="cardEditor-profilelist">
            <div className="cardEditor-profilelist-resultnum">{this.props.profileArr.length} Ergebnisse</div>
            {resArr}
          </div> 

        </div>





        <div num="2" className="cardEditor-form" surface="0">


          <h1 className="cardEditor-form-headline">Spielerprofil bearbeiten</h1>

          <div className="cardEditor-form-stepindicator">
            <div className="cardEditor-form-stepindicator-unit" active="0"></div>
            <div className="cardEditor-form-stepindicator-unit" active="1"></div>
            <div className="cardEditor-form-stepindicator-unit" active="0"></div>
            <div className="cardEditor-form-stepindicator-unit" active="0"></div>
          </div> 


          <div num="3" className="cardEditor-form-inputwrapper">
            <SingleInputEigen1 propObj={{
              reachable: true,
              elem: "Vorname", 
              type: 'text',
              prefix: '',
              suffix: '',
              name: "d",
              value: this.getCurrProObj(this.state.pid).vorname,
              key: this.state.pid,
            }}/>
          </div>

          <div num="4" className="cardEditor-form-inputwrapper">
            <SingleInputEigen1 propObj={{
              reachable: true,
              elem: "Nachname", 
              type: 'text',
              prefix: '',
              suffix: '',
              name: "d",
              value: this.getCurrProObj(this.state.pid).nachname,
              key: this.state.pid,
            }}/>
          </div>


          <div className="cardEditor-form-presentlink">
            
            <div className="cardEditor-form-title">Spielerkarte ansehen / Qr-Code vergrößern und screenshooten</div>

            <a onClick={this.navigate} className="cardEditor-form-presentlink-qrlink">Klicke hier, um die Spielerkarte zu öffnen</a>

            
            
          </div>


          <div num="5" className="cardEditor-form-inputwrapper">
            <SingleInputEigen1 propObj={inputDribblingneuObj}/>
            <div className="cardEditor-form-title">Dauer des Dribblingtest / Update</div>
          </div>

          <div num="6" className="cardEditor-form-inputwrapper">
            <CalendarEigen1 propObj={calendarObj1}/>  
            <div className="cardEditor-form-title">Zeitpunkt der Aufnahme des neuen Wertes</div>
          </div>          

          <div num="7" className="cardEditor-form-inputwrapper">
            <ValueListEigen1 propObj={{arr: this.getCurrProObj(this.state.pid).timeDribbling, key: "Dribbling", pid: this.state.pid, func: this.props.propObj.startapprovement, surname: this.getCurrProObj(this.state.pid).vorname, name: this.getCurrProObj(this.state.pid).nachname}}/>  
            <div className="cardEditor-form-title">Werteverlauf / Dribbling</div>
          </div>




          <div num="2" onClick={this.lastStep} className="cardEditor-form-btn2">zurück</div>
          <div onClick={this.nextStep} className="cardEditor-form-btn">nächster Schritt</div>


        </div>





        <div num="3" className="cardEditor-form" surface="0">

          <h1 className="cardEditor-form-headline">Spielerprofil bearbeiten</h1>

          <div className="cardEditor-form-stepindicator">
            <div className="cardEditor-form-stepindicator-unit" active="0"></div>
            <div className="cardEditor-form-stepindicator-unit" active="0"></div>
            <div className="cardEditor-form-stepindicator-unit" active="1"></div>
            <div className="cardEditor-form-stepindicator-unit" active="0"></div>
          </div> 



          <div num="8" className="cardEditor-form-inputwrapper">
            <SingleInputEigen1 propObj={inputKoordinationneuObj}/>
            <div className="cardEditor-form-title">Dauer des Koordinationstest / Update</div>
          </div>

          <div num="9" className="cardEditor-form-inputwrapper">
            <CalendarEigen1 propObj={calendarObj2}/>  
            <div className="cardEditor-form-title">Zeitpunkt der Aufnahme des neuen Wertes</div>
          </div>          

          <div num="10" className="cardEditor-form-inputwrapper">
            <ValueListEigen1 propObj={{arr: this.getCurrProObj(this.state.pid).timeKoordination, key: "Koordination", pid: this.state.pid, func: this.props.propObj.startapprovement, surname: this.getCurrProObj(this.state.pid).vorname, name: this.getCurrProObj(this.state.pid).nachname}}/>  
            <div className="cardEditor-form-title">Werteverlauf / Koordination</div>
          </div>





          <div num="2" onClick={this.lastStep} className="cardEditor-form-btn2">zurück</div>
          <div onClick={this.nextStep} className="cardEditor-form-btn">nächster Schritt</div>

        </div>












        <div num="4" className="cardEditor-form" surface="0">

          <h1 className="cardEditor-form-headline">Spielerprofil bearbeiten</h1>

          <div className="cardEditor-form-stepindicator">
            <div className="cardEditor-form-stepindicator-unit" active="0"></div>
            <div className="cardEditor-form-stepindicator-unit" active="0"></div>
            <div className="cardEditor-form-stepindicator-unit" active="0"></div>
            <div className="cardEditor-form-stepindicator-unit" active="1"></div>
          </div> 


          <div num="11" className="cardEditor-form-inputwrapper">
            <SingleInputEigen1 propObj={inputSchusskraftneuObj}/>
            <div className="cardEditor-form-title">Schusskraftwert / Update</div>
          </div>

          <div num="12" className="cardEditor-form-inputwrapper">
            <CalendarEigen1 propObj={calendarObj3}/>  
            <div className="cardEditor-form-title">Zeitpunkt der Aufnahme des neuen Wertes</div>
          </div>          

          <div num="13" className="cardEditor-form-inputwrapper">
            <ValueListEigen1 propObj={{arr: this.getCurrProObj(this.state.pid).valSchusskraft, key: "Schusskraft", pid: this.state.pid, func: this.props.propObj.startapprovement, surname: this.getCurrProObj(this.state.pid).vorname, name: this.getCurrProObj(this.state.pid).nachname}}/>  
            <div className="cardEditor-form-title">Werteverlauf / Schusskraft</div>
          </div>




          <div num="3" onClick={this.lastStep} className="cardEditor-form-btn2">zurück</div>
          <div onClick={this.changeProfileContainer} className="cardEditor-form-btn">Werte speichern</div>

        </div>


      </div>

    );
    
  }
}



//------------------------------------------------------------------------------



var mapStateToProps = function(state){
  return{
    profileArr: state.profileArr
  }
}
var mapDispatchToProps = {
  deleteProfile: deleteProfile,
  updateProfile: updateProfile,
}


var CardEditorContainer = connect(mapStateToProps, mapDispatchToProps)(CardEditor);
export default CardEditorContainer;
