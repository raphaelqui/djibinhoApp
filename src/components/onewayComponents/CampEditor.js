import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/onewayComponentsStyle/campEditor.css';

import DropdownEigen1 from './../inputComponents/DropdownEigen1.js';
import SingleInputEigen1 from './../inputComponents/SingleInputEigen1.js';
import AssignerEigen1 from './../inputComponents/AssignerEigen1.js';
import NoteEigen1 from './../inputComponents/NoteEigen1.js';
import SingleInputSmallEigen1 from './../inputComponents/SingleInputSmallEigen1.js';
import CalendarSmallEigen1 from './../inputComponents/CalendarSmallEigen1.js';
import CalendarEigen1 from './../inputComponents/CalendarEigen1.js';

import MultipleInputEigen1 from './../inputComponents/MultipleInputEigen1.js';


class CampEditor extends Component{

  constructor(props){
    super(props);

    this.state = {
      zone: [(function(){var d, tStr1, tStr2;d = new Date();d.setMonth(d.getMonth()-3);if((""+d.getMonth()).length===1){tStr1="0"+d.getMonth();}else{tStr1=""+d.getMonth();}if((""+d.getDate()).length === 1){tStr2="0"+d.getDate();}else{tStr2 = ""+d.getDate();}return parseFloat(d.getFullYear()+tStr1+tStr2);})(), (function(){var d, tStr1, tStr2;d = new Date();d.setMonth(d.getMonth()+3);if((""+d.getMonth()).length===1){tStr1="0"+d.getMonth();}else{tStr1=""+d.getMonth();}if((""+d.getDate()).length === 1){tStr2="0"+d.getDate();}else{tStr2 = ""+d.getDate();}return parseFloat(d.getFullYear()+tStr1+tStr2);})()],
      started: 0, 
    }

    this.changeZoneBegin = this.changeZoneBegin.bind(this);
    this.changeZoneLimit = this.changeZoneLimit.bind(this);
    this.createCampContainer = this.createCampContainer.bind(this);

    this.startloadbar = this.startloadbar.bind(this); 

    this.mainParent = React.createRef();
    this.loadref = React.createRef();

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

  createCampContainer(e){

    /*
    var elemPath = this.mainParent.current.children[1];
    var destClass = "cardCreator-form-inputwrapper"; // Zielklasse angeben, also die Klasse des angestrebten Elementes

    var profileDataObj = { 
                           vorname: 1, 
                           nachname: 2, 
                           timeDribbling: 3, 
                           timeKoordination: 4, 
                           valSchusskraft: 5,
                           profileNote: 6,
                         };
    var profileDataArr = ["vorname", "nachname", "timeDribbling", "timeKoordination", "valSchusskraft", "profileNote"];

    for (var i = 1, outerElemPath; i < 7; i++){
      outerElemPath = elemPath.children[i].children[0];
      for(var j = 1, innerElemPath; j < 7; j++){
        innerElemPath = outerElemPath.children[j];
        if(innerElemPath.className == "singleInputEigen1-wrapper"){
          innerElemPath = innerElemPath.children[1];  
          profileDataObj[profileDataArr[i-1]] = innerElemPath.value;
          j = 1;
          break;
        } else if(innerElemPath.className == "noteEigen1-wrapper"){
          innerElemPath = innerElemPath.children[0];  
          profileDataObj[profileDataArr[i-1]] = innerElemPath.value;  
          j = 1;
          break;
        }
      }
    }  
    */
    var newCampArr = [];

    for(var i = 1, elemPath; i < 3; i++){
      elemPath = this.mainParent.current.children[0].children[i]
      for(var j = 0; j < elemPath.children.length; j++){


        if(elemPath.children[j].getAttribute("class") == "campEditor-editpage-form-inputwrapper"){
          
          //input-Component Formular wurde ausgemacht
          for(var k = 1; k < elemPath.children[j].children[0].children.length; k++){
            if(elemPath.children[j].children[0].children[k].getAttribute("class") == "singleInputEigen1-wrapper"){
              newCampArr.push(elemPath.children[j].children[0].children[k].children[1].value);
            }
          }

        } else if(elemPath.children[j].getAttribute("class") == "campEditor-editpage-form-calendarwrapper"){

          //calendar-Component Formular wurde ausgemacht
          newCampArr.push(elemPath.children[j].children[0].children[1].children[0].value);

        } else if(elemPath.children[j].getAttribute("class") == "campEditor-editpage-form-contactperson"){

          //contactperson-Component Formular wurde ausgemacht
          for (var u = 0; u < 2; u++) {

            for(var p = 0; p < elemPath.children[j].children[u].children[1].children.length; p++){
              
              for(var p2 = 1; p2 < 10; p2++){
                if(elemPath.children[j].children[u].children[1].children[p].children[p2].getAttribute("class") == "multipleInputEigen1-inputContainer-wrapper"){

                  newCampArr.push(elemPath.children[j].children[u].children[1].children[p].children[1].children[0].children[1].value);
                  p2 = 2;
                  break;
                }
              }                          

            }

          }

        } else if(elemPath.children[j].getAttribute("class") == "campEditor-editpage-form-noteswrapper"){

          //note-Component Formular wurde ausgemacht
          newCampArr.push(elemPath.children[j].children[0].children[1].children[0].value);                     

        } else if(elemPath.children[j].getAttribute("class") == "campEditor-editpage-form-assignerwrapper") {

          //assigner-Component Formular wurde ausgemacht
          
          for(var p3 = 0; p3 < elemPath.children[j].children[0].children[4].children.length; p3++){
            newCampArr.push(elemPath.children[j].children[0].children[4].children[p3].innerText);
          }

        }
      }
      j = 0;
    }
    var resObj = {
      camp: "",
      vereinsname: "",
      ort: "",
      adresse: "",
      startDate: 0,
      endDate: 0,
      ansprechpartner1: [],
      ansprechpartner2: [],
      campNotes: "",
      assignedTrainer: []
    }
    var suppArr = ["camp", "vereinsname", "startDate", "endDate", "ort", "adresse", "ansprechpartner1", "ansprechpartner2", "campNotes", "assignedTrainer"];
    for(var p4 = 0; p4 < newCampArr.length; p4++){
      if(p4 < 6){
        resObj[suppArr[p4]] = newCampArr[p4];  
      } else if(p4 < 9){
        //Ansprechpartner 1
        resObj.ansprechpartner1.push(newCampArr[p4]);  
      } else if(p4 < 12){
        //Ansprechpartner 2
        resObj.ansprechpartner2.push(newCampArr[p4]);  
      } else if(p4 == 12){
        // Notizen zum Camp
        resObj.campNotes = newCampArr[12];  
      } else {
        // zugewiesene Trainer
        resObj.assignedTrainer.push(newCampArr[p4]);  
      }
    }
    // das datum noch in zahlen machen!
    resObj.startDate = parseInt(""+(resObj.startDate.substr(6, 4))+(resObj.startDate.substr(3, 2))+(resObj.startDate.substr(0, 2)));
    resObj.endDate = parseInt(""+(resObj.endDate.substr(6, 4))+(resObj.endDate.substr(3, 2))+(resObj.endDate.substr(0, 2)));

    this.props.propObj.createCamp({}, "ADD_CAMP", resObj);

    var elemPath = e.target.parentElement;
    var destClass = "campEditor-editpage"; // Zielklasse angeben, also die Klasse des angestrebten Elementes
    for(var j = 0; j < 20; j++){
      elemPath = elemPath.parentElement;
      if(destClass === elemPath.getAttribute("class")){
        break;
      }
    }


    for(var i = 1; i < 3; i++){
      elemPath.children[i].setAttribute('surface', '0');
    }
    elemPath.children[1].setAttribute('surface', '1');


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

  startloadbar(obj){
    obj.setState({
      zone: this.state.zone,
      started: 1
    });
    setTimeout(function(){
      obj.loadref.current.classList.add('loadingbar-completed');  
      setTimeout(function(){
        obj.loadref.current.setAttribute('started', '0');  
        obj.loadref.current.classList.remove('loadingbar-completed');  
      }, 400);
    }, 400);
  }



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



    var singleInputObj1 = {
        reachable: true,
        elem: "Campname", 
        type: 'text',
        prefix: '',
        suffix: '',
        name: "d",
    }
    var singleInputObj2 = {
       reachable: true,
        elem: "Vereinsname", 
        type: 'text',
        prefix: '',
        suffix: '',
        name: "d",
    }
    var calendarObj1 = {
      reachable: true,
      elem: zoneStart, 
      name: 'referenceNumber',
      reverse: "0",
      unfoldDirec: "left",
      extraFn1: function(){},
    }
    var calendarObj2 = {
      reachable: true,
      elem: zoneEnd, 
      name: 'referenceNumber',
      reverse: "1",
      unfoldDirec: "right",
      extraFn1: function(){},
    }

    var singleInputObj3 = {
        reachable: true,
        elem: "Ort", 
        type: 'text',
        prefix: '',
        suffix: '',
        name: "ort",
    }
    var singleInputObj4 = {
        reachable: true,
        elem: "Adresse des Camps", 
        type: 'text',
        prefix: '',
        suffix: '',
        name: "adresse",
    }




    var multipleInputObj1 = {
      reachable: true,
      elemArr: ['Vorname und Nachname', 'Email-Adresse', 'Telefon- / Mobilfunknummer'], 
      typeArr: ['text', 'text', 'text'],
      prefixArr: ['', '', '', ''],
      suffixArr: ['', '', '', ''],
      nameArr: [['vorname', 'nachname'], 'email', ['password1', 'password2'], 'telephone'],
    }




    
    


    

    if(this.state.started === 0){

      setTimeout(this.startloadbar(this), 1);

    }

    return(


      <div ref={this.mainParent} className="campEditor">

        <div className="campEditor-editpage">
            <div ref={this.loadref} started={this.state.started} className="campEditor-editpage-loadingbar"></div> 


            <div className="campEditor-editpage-createform">

              <h1 className="campEditor-editpage-form-headline">Camp erstellen</h1>

              <div className="campEditor-editpage-form-stepindicator">
                <div className="campEditor-editpage-form-stepindicator-unit" active="1"></div>
                <div className="campEditor-editpage-form-stepindicator-unit" active="0"></div>
              </div>


              <div num="1" className="campEditor-editpage-form-inputwrapper">
                <SingleInputEigen1 propObj={singleInputObj1}/>
              </div>
              <div num="2" className="campEditor-editpage-form-inputwrapper">
                <SingleInputEigen1 propObj={singleInputObj2}/>
              </div>
              <div num="1" className="campEditor-editpage-form-calendarwrapper">
                <CalendarEigen1 propObj={calendarObj1}/>
                <div className="campEditor-editpage-form-calendarwrapper-title">Campstart</div>
              </div>
              <div num="2" className="campEditor-editpage-form-calendarwrapper">
                <CalendarEigen1 propObj={calendarObj2}/>
                <div className="campEditor-editpage-form-calendarwrapper-title">Campende</div>
              </div>
              <div num="3" className="campEditor-editpage-form-inputwrapper">
                <SingleInputEigen1 propObj={singleInputObj3}/>
              </div> 
              <div num="4" className="campEditor-editpage-form-inputwrapper">
                <SingleInputEigen1 propObj={singleInputObj4}/>
              </div>  
              <div className="campEditor-editpage-form-contactperson">
                  <div className="campEditor-editpage-form-contactperson-inputwrapper">
                    <div className="campEditor-editpage-form-contactperson-title">Ansprechpartner 1</div>
                    <MultipleInputEigen1 propObj={multipleInputObj1}/>
                  </div>
                  <div className="campEditor-editpage-form-contactperson-inputwrapper">
                    <div className="campEditor-editpage-form-contactperson-title">Ansprechpartner 2</div>
                    <MultipleInputEigen1 propObj={multipleInputObj1}/>
                  </div>
              </div>
              <div num="1" onClick={this.props.propObj.lastblockslide} className="campEditor-editpage-form-btn2">zurück zur Übersicht</div>
              <div onClick={this.nextStep} className="campEditor-editpage-form-btn">nächster Schritt</div>

            </div>
            <div className="campEditor-editpage-createform2">

              <h1 className="campEditor-editpage-form-headline">Camp erstellen</h1>

              <div className="campEditor-editpage-form-stepindicator">
                <div className="campEditor-editpage-form-stepindicator-unit" active="0"></div>
                <div className="campEditor-editpage-form-stepindicator-unit" active="1"></div>
              </div>

              
              <div className="campEditor-editpage-form-noteswrapper">
                <NoteEigen1 propObj={singleInputObj1}/>
                <div className="campEditor-editpage-form-noteswrapper-title">Mögliche Notizen zum Camp</div>
              </div>

              <div className="campEditor-editpage-form-assignerwrapper">
                 <AssignerEigen1 propObj={tmpObj}/>
                 <div className="campEditor-editpage-form-noteswrapper-title">Weise diesem Camp bestimmte Trainer hinzu</div>
              </div>

              <div num="2" onClick={this.createCampContainer} className="campEditor-editpage-form-btn">camp erstellen</div>
              <div onClick={this.lastStep} className="campEditor-editpage-form-btn2">zurück</div>

            </div>

            <div className="campEditor-editpage-editform"></div>

        </div>
            
      </div>

    );
    
  }
}

export default CampEditor;