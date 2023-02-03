import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/onewayComponentsStyle/cardCreator.css';

import DropdownEigen1 from './../inputComponents/DropdownEigen1.js';
import SingleInputEigen1 from './../inputComponents/SingleInputEigen1.js';
import AssignerEigen1 from './../inputComponents/AssignerEigen1.js';
import NoteEigen1 from './../inputComponents/NoteEigen1.js';
import SingleInputSmallEigen1 from './../inputComponents/SingleInputSmallEigen1.js';
import CalendarSmallEigen1 from './../inputComponents/CalendarSmallEigen1.js';
import CalendarEigen1 from './../inputComponents/CalendarEigen1.js';

import MultipleInputEigen1 from './../inputComponents/MultipleInputEigen1.js';

import imgIcon from './../../assets/imgIcon.svg';
import imgHoverIcon from './../../assets/imgHoverIcon.svg';


class CardCreator extends Component{

  constructor(props){
    super(props);

    this.state = {
      started: 0, 
      file: "",
      void: false, 
    }

    this.createProfileContainer = this.createProfileContainer.bind(this);


    this.loadref = React.createRef();
    this.mainParent = React.createRef();
    this.clearForm = this.clearForm.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.lastblockslideContainer = this.lastblockslideContainer.bind(this);

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

  uploadFile(e){
    var file = e.target.files[0];
    this.setState({
      file: file.name
    });
    this.props.propObj.uploadFile(file);
  }

  lastblockslideContainer(){
    this.clearForm();
    this.props.propObj.lastblockslide();
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

  createProfileContainer(e){

    var elemPath = this.mainParent.current.children[1];
    var destClass = "cardCreator-form-inputwrapper"; // Zielklasse angeben, also die Klasse des angestrebten Elementes

    var profileDataObj = { 
                           vorname: 1, 
                           nachname: 2, 
                           timeDribbling: 3, 
                           timeKoordination: 4, 
                           valSchusskraft: 5,
                           ageCat: 6,
                           profileNote: 7,
                           imageUrl: "",
                           image: this.state.file,
                         };
    var profileDataArr = ["vorname", "nachname", "timeDribbling", "timeKoordination", "valSchusskraft", "ageCat", "profileNote"];
    var fieldVoid = false;
    for (var i = 1, outerElemPath; i < 7; i++){
      outerElemPath = elemPath.children[i].children[0];
      for(var j = 1, innerElemPath; j < 7; j++){
        innerElemPath = outerElemPath.children[j];
        if(innerElemPath.className == "singleInputEigen1-wrapper"){
          innerElemPath = innerElemPath.children[1];  
          profileDataObj[profileDataArr[i-1]] = innerElemPath.value;
          if(innerElemPath.value == ""){
            fieldVoid = true;
          }
          j = 1;
          break;
        } else if(innerElemPath.className == "noteEigen1-wrapper"){
          innerElemPath = innerElemPath.children[0];  
          profileDataObj[profileDataArr[i-1]] = innerElemPath.value;  
          j = 1;
          break;
        } else if(innerElemPath.className == "dropdownEigen1-input"){
          profileDataObj[profileDataArr[i-1]] = innerElemPath.value[innerElemPath.value.length-1];  
          j = 1;
          break;
        }
      }
    }  
    console.log("----------------");
    console.log(profileDataObj);


    if(!fieldVoid){
      // etwas ist leer
      this.props.propObj.createProfile({}, "ADD_PROFILE", profileDataObj);
    } else {
      this.props.propObj.createProfile({}, "ERROR_ADD_PROFILE", "Bitte fülle alle Felder aus!");
    }

    this.clearForm();
    var elemPath = e.target.parentElement;
    var destClass = "CardCreator"; // Zielklasse angeben, also die Klasse des angestrebten Elementes
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


  render(){

    var inputObj1 = {
      reachable: true,
      elem: "Vorname", 
      type: 'text',
      prefix: '',
      suffix: '',
      name: "d",
      void: this.state.void,
    }
    var inputObj2 = {
      reachable: true,
      elem: "Nachname", 
      type: 'text',
      prefix: '',
      suffix: '',
      name: "d",
      void: this.state.void,
    }
    var inputObj3 = {
      reachable: true,
      elem: "Sekunde", 
      type: 'text',
      prefix: '',
      suffix: 'sek.',
      name: "d",
      void: this.state.void,
    }
    var inputObj4 = {
      reachable: true,
      elem: "Sekunde", 
      type: 'text',
      prefix: '',
      suffix: 'sek.',
      name: "d",
      void: this.state.void,
    }
    var inputObj5 = {
      reachable: true,
      elem: "Schusskraft",
      type: 'text',
      prefix: '',
      suffix: '',
      name: "d",
      void: this.state.void,
    }
    var inputObj6 = {
      reachable: true,
      initialStr: "Alter des Spielers",
      optionArr: ["11-13 Jahre / CatA", "8-10 Jahre / CatB", "unter 8 Jahre / CatC"],
      name: 'optionAge',
      fn: this.onChange,
    }

    return(


      <div ref={this.mainParent} className="CardCreator">
        <div ref={this.loadref} started={this.state.started} className="cardCreator-loadingbar"></div> 

        <div className="cardCreator-form" surface="1">
          
          <div className="cardCreator-form-stepindicator">
            <div className="cardCreator-form-stepindicator-unit" active="1"></div>
            <div className="cardCreator-form-stepindicator-unit" active="0"></div>
          </div>


          <div num="1" className="cardCreator-form-inputwrapper">
            <SingleInputEigen1 propObj={inputObj1}/>
          </div>

          <div num="2" className="cardCreator-form-inputwrapper">
            <SingleInputEigen1 propObj={inputObj2}/>
          </div>


          <div num="3" className="cardCreator-form-inputwrapper">
            <SingleInputEigen1 propObj={inputObj3}/>
            <div className="cardCreator-form-title">Dauer des Dribblingstest</div>
          </div>

          <div num="4" className="cardCreator-form-inputwrapper">
            <SingleInputEigen1 propObj={inputObj4}/>
            <div className="cardCreator-form-title">Dauer des Koordinationstest</div>
          </div>

          <div num="5" className="cardCreator-form-inputwrapper">
            <SingleInputEigen1 propObj={inputObj5}/>
          </div>

          <div num="6" className="cardCreator-form-inputwrapper">
            <DropdownEigen1 propObj={inputObj6}/>
          </div>

          <div num="7" className="cardCreator-form-inputwrapper">
            <NoteEigen1 propObj={inputObj5}/>
            <div className="cardCreator-form-title">Weitere Informationen zum Spieler / Notizen</div>
          </div>


          <h1 className="cardCreator-form-headline">Spielerprofil erstellen</h1>      

          <div num="1" onClick={this.lastblockslideContainer} className="cardCreator-form-btn2">zurück zur Übersicht</div>
          <div onClick={this.nextStep} className="cardCreator-form-btn">nächster Schritt</div>


        </div>


        <div className="cardCreator-form2" surface="0">

          <h1 className="cardCreator-form-headline">Spielerprofil erstellen</h1>

          <div className="cardCreator-form-stepindicator">
            <div className="cardCreator-form-stepindicator-unit" active="0"></div>
            <div className="cardCreator-form-stepindicator-unit" active="1"></div>
          </div>

          <div className="cardCreator-form-contentwrapper">
            <div className="cardCreator-form-title">Foto für die Spielerkarte hochladen</div>
            <div className="cardCreator-form-uploadframe">
              <img className="cardCreator-form-uploadframe-img" src={imgIcon}/>
              <img className="cardCreator-form-uploadframe-img2" src={imgHoverIcon}/>
              <h4 className="cardCreator-form-h4">Lade ein passendes Profilbild hoch</h4>
              <h5 className="cardCreator-form-h5">Ein passendes Format ( 900x780 ) hochladen</h5>
              <p className="cardCreator-form-uploadframe-p">{this.state.file}</p>
              <input onChange={this.uploadFile} type="file" className="cardCreator-uploadframe-input"/>
            </div>
          </div>

          <div num="2" onClick={this.lastStep} className="cardCreator-form-btn2">zurück</div>
          <div onClick={this.createProfileContainer} className="cardCreator-form-btn">spielerprofil erstellen</div>



        </div>


      </div>

    );
    
  }
}

export default CardCreator;