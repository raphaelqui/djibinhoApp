import React, { Component } from 'react';
import { deleteProfile } from '../actions/index.js';
import { deleteValue } from '../actions/index.js';
import { deleteCamp } from '../actions/index.js';
import { addCamp } from '../actions/index.js';
import { addProfile } from '../actions/index.js';
import { updateProfile } from '../actions/index.js';

import { Navigate } from "react-router-dom";

import { connect } from 'react-redux'; 
import background from './../assets/background.jpg';
import image1 from './../assets/munichimg.jpg';
import logo1 from './../assets/djlogo.png';
import arrow from './../assets/arrowup.png';
import arrowright from './../assets/arrowright.png';
import arrowleft from './../assets/arrowleft.png';

import createicon from './../assets/createicon.png';
import editicon from './../assets/editicon.png';

import iconHome from './../assets/iconHome.svg';
import iconSpielerprofile from './../assets/iconSpielerprofile.svg';
import iconAnalysen from './../assets/iconAnalyse.svg';
import iconLogout from './../assets/iconLogout.svg';
import iconHook from './../assets/hook.svg';

import defaultUser from './../assets/defaultUser.JPG';

import grafik1 from './../assets/grafik1.png'
import grafik2 from './../assets/grafik2.png';
import grafik3 from './../assets/grafik3.png';

import '../resources/interface.css';
import { AuthContext } from '../auth-context.js';

import { API, Auth, Amplify, Hub } from 'aws-amplify';


//load components:
import LoadRndCards from './subComponents/LoadRndCards.js';
import CampEditor from './onewayComponents/CampEditor.js'; 
import CardEditor from './onewayComponents/CardEditor.js'; 
import CardCreator from './onewayComponents/CardCreator.js'; 
import CampList from './onewayComponents/CampList.js'; 











class Interface extends Component{

    constructor(props){
      super(props);

      this.state = {
        started: "0",
        approvementObj: {},
        notificationObj: {},
      }

      this.lastblock = {};
      this.lastblockNum = 0;
      this.actualblock = {};
      this.actualblockOriginNum = 0;

      this.blockhistory = [];

      this.topbar = {};

      this.menuslide = this.menuslide.bind(this);
      this.lastblockslide = this.lastblockslide.bind(this);

      this.actualblockhistory = [];
      this.actualblockPlaceNumhistory = [];

      this.blockHist = [];

      this.menuslider = React.createRef();

      this.approvement = React.createRef();
      this.notification = React.createRef();



      this.startApprovement = this.startApprovement.bind(this);
      this.startNotification = this.startNotification.bind(this);
      this.toggleApprovement = this.toggleApprovement.bind(this);

      this.signOut = this.signOut.bind(this);
      



    }
    //erkenne den User 
    async considerUser(){

    }

    async signOut() {
        try {
            await Auth.signOut();
            this.props.propFns.logout(false);            
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    

    startanimation(obj){
      obj.setState({
          started: "1",
          approvementObj: {
            infotxt: "",
            btntxt: "",
            id: "",
          },
          notificationObj: {
            msg: "",
            msg2: "",
          }    

      });
    }

    startApprovement(infotxt, btntxt, id){

      this.toggleApprovement();
      //gebe die infos an das approvement pop ups
      this.setState({
        started: "1",
        approvementObj: {
          infotxt: infotxt,
          btntxt: btntxt,
          id: id,
        }
      });

    }
    toggleApprovement(e){
      if(this.approvement.current.getAttribute("active") == "0"){

        this.approvement.current.setAttribute("active", "1");
      } else {


        //wurde bestätigt? 
        if(e.target.getAttribute("class") == "approvement-popup-btnwrapper-btn1"){

          /*

          es wurde bestätigt nun schaue ob:
          - Spielerprofil gelöscht werden soll ["DELETE_PLAYERPROFILE", pid] - - - length(2)
          - Camp gelöscht werden soll ["DELETE_CAMP", ...] - - - length(?)
          - Value aus Liste gelöscht werden soll ["DELETE_VALUE", array key, String "Dribbling", pid] - - - length(4)

          */

          var paramArr = e.target.getAttribute("suppliedid").split(","); 
          switch(paramArr[0]){
            case "DELETE_PLAYERPROFILE":
              this.props.deleteProfile(paramArr[1]);
              this.props.propFns.deleteProfile(paramArr[2]);

              break;

            case "DELETE_VALUE":
              this.props.deleteValue(paramArr[3], paramArr[2], paramArr[1]);

              break;

            case "DELETE_CAMP":
              this.props.deleteCamp(paramArr[1]);

              break;

          }

          // hier werden die props neu geladen da sich der store verändert hat.
          this.setState({
            started: "1",
            approvementObj: {
              infotxt: "",
              btntxt: "",
              id: "",
            }
          });


        }
        this.approvement.current.setAttribute("active", "0");
      }
    }
    startNotification(metaDataObj = {}, actionTypeStr = "", actionDataObj = {}){
      /*
      id: 1,
      vorname: 'Niklas',
      nachname: 'Classen',
      timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
      timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
      valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
      lastCamps: ["0098", "0092", "0091"],
      ageCat: "A",
      profileNote: "",
      */

      switch(actionTypeStr){
        case "ADD_CAMP":
          this.props.addCamp(actionDataObj);
          this.setState({
            notificationObj: {
              msg: "Super! Das Camp wurde erfolgreich erstellt.",
              msg2: "Camp nun aufrufbar",
            }    
          });
          break;
        case "ERROR_ADD_PROFILE":
          this.setState({
            started: "1",
            notificationObj: {
              msg: "Fehler: Bitte fülle alle Felder aus.",
              msg2: "Spielerprofil konnte nicht erstellt werden",
            }    
          });
          this.props.addCamp(actionDataObj);
          break;
        case "ADD_PROFILE":

          //finde eine neue ID heraus!

          /* Also wie Wido schon meinte: Wo sehe ich denn das der User nur bestimmte Spielerprofile angezeigt bekomme. 
          Ich muss also dafür sorgen dass ich mit DynamoDB klarkomme und dessen Sprache wie heißt die noch gleich :     

          */

          var tmpArr = this.props.profileArr;
          for(var i = 0, biggestKey = 0; i<tmpArr.length; i++){
            if(tmpArr[i].id > biggestKey){
              biggestKey = tmpArr[i].id;
            }
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
          var tmpObjProfile = {
            id: biggestKey+1,
            vorname: actionDataObj.vorname, 
            nachname: actionDataObj.nachname, 
            timeDribbling: [[parseFloat(actionDataObj.timeDribbling), actualDateStr]], 
            timeKoordination: [[parseFloat(actionDataObj.timeKoordination), actualDateStr]],
            valSchusskraft: [[parseFloat(actionDataObj.valSchusskraft), actualDateStr]],
            lastCamps: [],
            ageCat: actionDataObj.ageCat,
            profileNote: actionDataObj.profileNote,
            imageUrl: "",
            image: actionDataObj.image,
          }
          //this.props.addProfile(...) wird im Handler.js abgeschickt!
          this.props.propFns.createProfile(tmpObjProfile);
          this.setState({
            started: "1",
            notificationObj: {
              msg: "Super! Spielerprofil wurde erfolgreich erstellt.",
              msg2: "Spielerprofil ist nun verfügbar",
            }    
          });
          break;


        case "UPDATE_PROFILE":




          var graphId, profile, timeDribbling, timeKoordination, valSchusskraft;
          //durch pid das passende profile pullen
          var profileArr = this.props.profileArr;
          for(var i = 0; i < profileArr.length; i++){
            if(profileArr[i].id == actionDataObj.pid){
              // specific profile found 
              profile = profileArr[i];
              graphId = profile.graphId;
              break;
            }
          } 

          // object für graphql wird angefertigt, der store bekommt davon nichts mit!

          timeDribbling = profile.timeDribbling;
          timeKoordination = profile.timeKoordination;
          valSchusskraft = profile.valSchusskraft;

          if(!isNaN(actionDataObj.timeDribbling)){
            timeDribbling.push(actionDataObj.timeDribbling);
          }
          if(!isNaN(actionDataObj.timeKoordination)){
            timeKoordination.push(actionDataObj.timeKoordination);
          }
          if(!isNaN(actionDataObj.valSchusskraft)){
            valSchusskraft.push(actionDataObj.valSchusskraft);
          }
          
          
          var tmpObjProfile = {
            id: actionDataObj.pid,
            vorname: actionDataObj.vorname, 
            nachname: actionDataObj.nachname, 
            timeDribbling: timeDribbling, 
            timeKoordination: timeKoordination,
            valSchusskraft: valSchusskraft,
            lastCamps: profile.lastCamps,
            ageCat: profile.ageCat,
            profileNote: profile.profileNote,
            imageUrl: profile.imageUrl,
            image: profile.image,
          }
          //this.props.addProfile(...) wird im Handler.js abgeschickt!











          // ich muss dieses profil löschen und gleichzeitig neu erstellen mit neuen werten


          //this.props.propFns.deleteProfile(graphId);
          this.props.propFns.updatePro(graphId, tmpObjProfile);
          //this.props.propFns.createProfile(tmpObjProfile, true);



          //die graphql muss geändert werden !


          

          // ich übergebe pid, vorname, nachname, timeDribbling, timeKoordination, valSchusskraft, graphId --- length(7)
          this.props.updateProfile(actionDataObj.pid, actionDataObj.vorname, actionDataObj.nachname, actionDataObj.timeDribbling, actionDataObj.timeKoordination, actionDataObj.valSchusskraft);

          this.setState({
            started: "1",
            notificationObj: {
              msg: "Super! Spielerprofil wurde erfolgreich aktualsiert.",
              msg2: "Spielerprofil ist nun verfügbar",
            }    
          });

          break;
      }




      this.notification.current.setAttribute("active", "1");
      var destObj = this.notification.current;
      setTimeout(function(){
        destObj.children[0].setAttribute("active", "1");
        setTimeout(function(){
          destObj.setAttribute("active", "0");
        }, 500);
      }, 2800);
      this.lastblockslide();
      //Nun müssen die Werte auch im Array verändert werden

      // hier werden die props neu geladen da sich der store verändert hat.
      



    }

    menuslideFromNavbar(e){
      var refnum;
      var blocknum;

      var focusblock;
      var formerblock;

      var focusblockplacenum;
      var formerblockplacenum;

      //derzeitige Blocknumber
      blocknum = e.target.parentElement.parentElement.getAttribute("num");
      //Zielblocknumber
      refnum = e.target.getAttribute("refnum");


      var childrenArr = e.target.parentElement.parentElement.parentElement.children;
      for(var i = 0; i < childrenArr.length; i++){
          if(childrenArr[i].getAttribute("num") == refnum){
            focusblock = childrenArr[i];
          }
      }
      //alter Block
      formerblock = e.target.parentElement.parentElement;


      //finde heraus ob es horizontal oder vertikal  
      /*
      Place-Attribut

            3
            =
            =
      5 === 1 === 6
            =
            =
            4
      */
      formerblockplacenum = parseFloat(formerblock.getAttribute("place")); 
      focusblockplacenum = parseFloat(focusblock.getAttribute("place"));



      if(blocknum < refnum && formerblockplacenum < focusblockplacenum && focusblockplacenum%2 === 0){

          formerblock.setAttribute("place", (focusblockplacenum-1));
          focusblock.setAttribute("place", "1");

          // die menu topbar wird beeinflusst: 
          switch(parseFloat(refnum)){
            case 4:
              formerblock.parentElement.children[4].children[0].children[1].setAttribute("active", "0");
              formerblock.parentElement.children[4].children[0].children[2].setAttribute("active", "1");
              break;
            case 2:
              formerblock.parentElement.children[4].children[0].children[1].setAttribute("active", "0");
              break;
            case 3:
              formerblock.parentElement.children[4].children[0].children[1].setAttribute("active", "0");
              break;
          }


      } else {

          formerblock.setAttribute("place", (focusblockplacenum+1));
          focusblock.setAttribute("place", "1");

          // die menu topbar wird beeinflusst:
          switch(parseFloat(refnum)){
            case 5:
              formerblock.parentElement.children[4].children[0].children[2].setAttribute("active", "0");
              break;
            case 6:
              formerblock.parentElement.children[4].children[0].children[2].setAttribute("active", "0");
              break;
          }
      }

      this.lastblock = formerblock;
      this.lastblockNum = blocknum; 
      this.actualblock = focusblock;
      this.actualblockOriginNum = focusblockplacenum;


      this.blockHist.push({
        actualBlock: focusblock,
        actualBlockPlaceNum: focusblockplacenum,
        lastBlock: formerblock,
        lastBlockNum: blocknum,
      });


      this.topbar = formerblock.parentElement.children[0].children[0];


      this.blockhistory.push(formerblock);
      this.actualblockhistory.push(focusblock);
      this.actualblockPlaceNumhistory.push(focusblockplacenum);

    }

    menuslide(e){
      for(var i = 0; i < this.menuslider.current.children.length; i++){
        this.menuslider.current.children[i].classList.remove("disableblock");
      }


      var refnum;
      var blocknum;

      var focusblock;
      var formerblock;

      var focusblockplacenum;
      var formerblockplacenum;

      //derzeitige Blocknumber
      // Oder ich ändere einfach diese Funktion dazu dass man diese vielseitig benutzen kann


      //Zielblocknumber
      refnum = e.target.getAttribute("refnum");

      //alter Block
      //der formerblock ist lediglich der Block der zuvor das Attribut place="1" hatte
      for(var i = 0; i < this.menuslider.current.children.length; i++){
        if(this.menuslider.current.children[i].getAttribute("place") == 1){
          formerblock = this.menuslider.current.children[i];
          blocknum = this.menuslider.current.children[i].getAttribute("num");
          break;
        }
      }

      var childrenArr = formerblock.parentElement.children;
      for(var i = 0; i < childrenArr.length; i++){
          if(childrenArr[i].getAttribute("num") == refnum){
            focusblock = childrenArr[i];
          }
      }

      

      //finde heraus ob es horizontal oder vertikal  
      /*
      Place-Attribut

            3
            =
            =
      5 === 1 === 6
            =
            =
            4
      */
      formerblockplacenum = parseFloat(formerblock.getAttribute("place")); 
      focusblockplacenum = parseFloat(focusblock.getAttribute("place"));

      // blocknum < refnum && formerblockplacenum < focusblockplacenum && focusblockplacenum%2 === 0



      if(blocknum == 2 || blocknum == 3  || blocknum == 7){

        formerblock.setAttribute("place", "4");

        focusblock.setAttribute("place", "1");
        if(refnum != this.lastblock.getAttribute("num")){
          this.lastblock.setAttribute("place", "5");
        }

      } else if(blocknum == 5 || blocknum == 6){
        formerblock.setAttribute("place", "3");
        
        focusblock.setAttribute("place", "1");
        if(refnum != this.lastblock.getAttribute("num")){
          this.lastblock.setAttribute("place", "6");
        }

      } else if(focusblockplacenum%2 === 0){


          formerblock.setAttribute("place", (focusblockplacenum-1));
          focusblock.setAttribute("place", "1");
      } else {
          formerblock.setAttribute("place", (focusblockplacenum+1));
          focusblock.setAttribute("place", "1");
      }


      for(var i = 0; i < this.menuslider.current.children.length; i++){
        if(this.menuslider.current.children[i].getAttribute("num") < refnum && this.menuslider.current.children[i].getAttribute("place") >= 5){


          if(this.menuslider.current.children[i].getAttribute("num") != formerblock.getAttribute("num") && this.menuslider.current.children[i].getAttribute("num") != focusblock.getAttribute("num")){
            this.menuslider.current.children[i].classList.add("disableblock");
          }

          this.menuslider.current.children[i].setAttribute("place", "5");



        } else if(this.menuslider.current.children[i].getAttribute("num") > refnum && this.menuslider.current.children[i].getAttribute("place") >= 5){
          
          if(this.menuslider.current.children[i].getAttribute("num") != formerblock.getAttribute("num") && this.menuslider.current.children[i].getAttribute("num") != focusblock.getAttribute("num")){
            this.menuslider.current.children[i].classList.add("disableblock");
          }

          this.menuslider.current.children[i].setAttribute("place", "6");

        }
      }




      // die menu topbar wird beeinflusst: 
      formerblock.parentElement.children[4].children[0].children[1].setAttribute("active", "0");
      formerblock.parentElement.children[4].children[0].children[2].setAttribute("active", "0");
      formerblock.parentElement.children[4].children[0].children[3].setAttribute("active", "0");
      switch(parseFloat(refnum)){
        case 4:
          formerblock.parentElement.children[4].children[0].children[2].setAttribute("active", "1");
          break;
        case 8:
          formerblock.parentElement.children[4].children[0].children[3].setAttribute("active", "1");
          break;
        case 1:
          formerblock.parentElement.children[4].children[0].children[1].setAttribute("active", "1");
          break;
      }



      this.lastblock = formerblock;
      this.lastblockNum = blocknum; 
      this.actualblock = focusblock;
      this.actualblockOriginNum = focusblockplacenum;


      this.blockHist.push({
        actualBlock: focusblock,
        actualBlockPlaceNum: focusblockplacenum,
        lastBlock: formerblock,
        lastBlockNum: blocknum,
      });


      this.topbar = formerblock.parentElement.children[0].children[0];


      this.blockhistory.push(formerblock);
      this.actualblockhistory.push(focusblock);
      this.actualblockPlaceNumhistory.push(focusblockplacenum);

    }

    lastblockslide(){

      var tmpNum = this.blockHist.length-1;

      this.blockHist[tmpNum].lastBlock.setAttribute("place", "1");

      this.blockHist[tmpNum].actualBlock.setAttribute("place", this.blockHist[tmpNum].actualBlockPlaceNum);

      tmpNum = this.blockHist[tmpNum].lastBlockNum;
      this.blockHist.pop();

      // hier handelt es sich um die Block Nummer nicht um die Placer Nummer

      // die menu topbar wird beeinflusst: 
      for(var i = 0; i < this.topbar.children.length; i++){
        this.topbar.children[i].setAttribute("active", "0");
      }
      switch(parseFloat(tmpNum)){
        case 1:
          this.topbar.children[0].setAttribute("active", "1");
          break;
        case 2:
          this.topbar.children[0].setAttribute("active", "1");
          break;
        case 3:
          this.topbar.children[1].setAttribute("active", "1");
          break;
      }

    }

    


    

    render(){


      var cardEditorSupplyObj = {
        lastblockslide: this.lastblockslide,
        startapprovement: this.startApprovement,
        profileArr: this.props.profileArr,
        updateProfile: this.startNotification
      }

      var cardCreatorSupplyObj = {
        lastblockslide: this.lastblockslide,
        createProfile: this.startNotification,
        uploadFile: this.props.propFns.uploadFile
      }

      var campListSupplyObj = {
        lastblockslide: this.lastblockslide,
        startapprovement: this.startApprovement,
        campArr: this.props.campArr,
      }

      var campEditorSupplyObj = {
        lastblockslide: this.lastblockslide,
        createCamp: this.startNotification,
      }



      if(this.state.started === "0"){
        setTimeout(this.startanimation(this), 1);
      }





      return( 



        <div className="interface">

            
            <AuthContext.Consumer>
              {function(value){
                  return(value.jsxNavLogin);  
              }}
            </AuthContext.Consumer> 

           

           {/*===KOMMENTAR:"Block-Nummer=[1, 2, 3, 5]"*/}




           <div ref={this.menuslider} className="interface-menuslider animationactive">

              


              {/*========================MENUSLIDERBLOCK===>>>   "mainmenu"   <<<==============================*/}
              <div num="1" place="1" className="interface-menuslider-block">



                <div started={this.state.started} num="1" className="interface-menuslider-point">
                  <h3 className="interface-menuslider-point-h5">Spielerprofile verwalten</h3>
                  <h3 className="interface-menuslider-point-h6">Hier verwaltest du deine Mannschaften, erstellst Spielerprofile oder änderst Werte einzelner Spieler</h3>

                  <div className="interface-menuslider-point-latestnotification">
                  </div>

                  <div refnum="4" onClick={this.menuslide} className="interface-menuslider-point-clicksurface"></div>

                </div>


                <div started={this.state.started} num="2" className="interface-menuslider-point">

                  <h3 className="interface-menuslider-point-h9">Anstehende Camps</h3>
                  <div className="interface-menuslider-point-rectangle"></div>

                  <div className="interface-menuslider-point-camplist">
                    <div className="interface-menuslider-point-camplist-elem">Herbstcamp 1<p className="interface-menuslider-point-camplist-elem-p">vor 1 Std.</p></div>
                    <div className="interface-menuslider-point-camplist-elem">Sommercamp 2<p className="interface-menuslider-point-camplist-elem-p">vor 11 Tagen</p></div>
                    <div className="interface-menuslider-point-camplist-elem">Sommercamp 1<p className="interface-menuslider-point-camplist-elem-p">vor 2 Monaten</p></div>
                    <div className="interface-menuslider-point-camplist-elem">Ostercamp 1<p className="interface-menuslider-point-camplist-elem-p">vor 4 Monaten</p></div>
                    <div className="interface-menuslider-point-camplist-elem">...</div>
                    <div className="interface-menuslider-point-camplist-open">Alle Camps anzeigen</div>
                  </div>

                  <div refnum="3" onClick={this.menuslide} className="interface-menuslider-point-clicksurface"></div>

                </div>


                <div started={this.state.started}  num="3" className="interface-menuslider-point">

                   <img className="interface-menuslider-point-grafik1" src={grafik1}/>


                   <h4 className="interface-menuslider-point-h10">Camp Editor</h4> 
                   <h4 className="interface-menuslider-point-h11">Klicken Sie hier um ein neues Camp zu erstellen, zu planen und zu organisieren</h4> 
                   <div refnum="2" onClick={this.menuslide} className="interface-menuslider-point-clicksurface"></div>

                </div>

              </div>

              {/*========================MENUSLIDERBLOCK===>>>   "spielerprofile-overviewmenu"   <<<==============================*/}
              <div num="4" place="6" className="interface-menuslider-block">
              
                <div num="7" className="interface-menuslider-point">
                  <img className="interface-menuslider-point-img1" src={grafik2}/>
                  <h2 className="interface-menuslider-point-maintitle">Spielerprofil erstellen</h2>
                  <div refnum="5" onClick={this.menuslide} className="interface-menuslider-point-clicksurface"></div>
                </div>

                <div num="8" className="interface-menuslider-point">
                  <img className="interface-menuslider-point-img2" src={grafik3}/>
                  <h2 className="interface-menuslider-point-maintitle">Spielerprofil bearbeiten</h2>
                  <div refnum="6" onClick={this.menuslide} className="interface-menuslider-point-clicksurface"></div>
                </div>

                <div num="9" className="interface-menuslider-point">
                  <h2 className="interface-menuslider-point-maintitle2">Mein Kader</h2>
                  <p className="interface-menuslider-point-maindesc2">Hier siehst du all deine erstellen Spieler</p>
                  <div refnum="7" onClick={this.menuslide} className="interface-menuslider-point-clicksurface"></div>
                </div>
              </div> 

              {/*========================MENUSLIDERBLOCK===>>>   "analysen-overview"   <<<==============================*/}
              <div num="8" place="6" className="interface-menuslider-block">
                <div className="placeholderBlock">Analysen</div>

              </div>  

              {/*========================MENUSLIDERBLOCK===>>>   "account-overview"   <<<==============================*/}
              <div num="9" place="6" className="interface-menuslider-block">
                <div className="placeholderBlock">Account-Overview</div>
              
              </div>

              {/*========================MENUSLIDERBLOCK===>>>   "topbar"   <<<==============================*/}
              <div place="0" num="0" className="interface-menuslider-block">        


                <div num="0" started={this.state.started} className="interface-topbar">

                  <img num="0" className="interface-topbar-startmenu" src={logo1}/>

                  

                  <div refnum="1" onClick={this.menuslide} active="1" num="1" className="interface-topbar-startmenu"><img src={iconHome}/>Übersicht</div>
                  <div refnum="4" onClick={this.menuslide} active="0" num="2" className="interface-topbar-startmenu"><img src={iconSpielerprofile}/>Spielerprofile</div>
                  <div refnum="8" onClick={this.menuslide} active="0" num="3" className="interface-topbar-startmenu"><img src={iconAnalysen}/>Analysen</div>
                  <div active="0" num="4" onClick={this.signOut} className="interface-topbar-startmenu"><img src={iconLogout}/>Ausloggen</div>

                  

                  <div className="interface-topbar-profile">

                      <div className="interface-topbar-profile-img">
                        <img src={defaultUser} />
                      </div>
                        
                      
                      <AuthContext.Consumer>
                        {function(value){

                            var a, b, position, tmpStr, tmpStr2;
                            if(value.data.email){
                              a = value.data.email;
                              b = " ";
                              if(a.length < 12){
                                position = 12;
                              }
                              position = 12;
                              tmpStr = [a.slice(0, position), b, a.slice(position)].join('');
                            } else {
                              tmpStr = "void@mail.com"
                            }
                            tmpStr2 = value.data.name+" "+value.data.family_name; 
                            if(tmpStr2.length > 11){
                              tmpStr2 = tmpStr2.slice(0, 10);
                              tmpStr2 = tmpStr2+".."; 
                            }
                            
                            return(
                              <div>
                                <p className="interface-topbar-profile-name">{tmpStr2}</p>
                                <p className="interface-topbar-profile-mail">{tmpStr}</p>
                              </div>
                            );  
                        }}
                      </AuthContext.Consumer> 


                    <div refnum="9" onClick={this.menuslide} className="interface-topbar-profile-clicksurface"></div>

                  </div> 

                </div>  

              </div>

              {/*========================MENUSLIDERBLOCK===>>>   "campEditor-UC"   <<<==============================*/}
              <div num="2" place="4" className="interface-menuslider-block">

                <CampEditor propObj={campEditorSupplyObj}/>

              </div>

              {/*========================MENUSLIDERBLOCK===>>>   "campList / anstehende Camps"   <<<==============================*/}
              <div num="3" place="4" className="interface-menuslider-block">

                <CampList propObj={campListSupplyObj}/>

              </div>

              {/*========================MENUSLIDERBLOCK===>>>   "cardCreator-UC"   <<<==============================*/}
              <div num="5" place="3" className="interface-menuslider-block">

                <CardCreator propObj={cardCreatorSupplyObj}/>

              </div>

              {/*========================MENUSLIDERBLOCK===>>>   "cardEditor-UC"   <<<==============================*/}
              <div num="6" place="3" className="interface-menuslider-block">

                <CardEditor propObj={cardEditorSupplyObj}/>
              
              </div>

              {/*========================MENUSLIDERBLOCK===>>>   "myKader / alle Spieler"   <<<==============================*/}
              <div num="7" place="4" className="interface-menuslider-block">
                <div className="placeholderBlock">Mein Kader</div>
              </div>

            </div> 




            <div ref={this.notification} className="notification" active="0">
              <div className="notification-contentwrapper" active="0">
                <img className="notification-img" src={iconHook}/>
                <h4 className="notification-info">{this.state.notificationObj.msg}</h4>
                <a className="notification-link">{this.state.notificationObj.msg2}</a>
              </div>
            </div>


            <div ref={this.approvement} className="approvement" active="0">
                <div className="approvement-popup">
                  <h4 className="approvement-popup-h4">Achtung!</h4>
                  <p className="approvement-popup-p">{this.state.approvementObj.infotxt}</p>

                  <div className="approvement-popup-btnwrapper">
                    <div onClick={this.toggleApprovement} className="approvement-popup-btnwrapper-btn2">abbrechen</div>
                    <div onClick={this.toggleApprovement} suppliedid={this.state.approvementObj.id} className="approvement-popup-btnwrapper-btn1">{this.state.approvementObj.btntxt}</div>
                  </div>
                </div>
            </div>


          <div>
            
          </div>


        </div>
      );
    }
}













//------------------------------------------------------------------------------



var mapStateToProps = function(state){
  return{
    profileArr: state.profileArr,
    campArr: state.campArr
  }
}
var mapDispatchToProps = {  
  deleteProfile: deleteProfile,
  deleteValue: deleteValue,
  deleteCamp: deleteCamp,
  addCamp: addCamp,
  addProfile: addProfile,
  updateProfile: updateProfile
}


var InterfaceContainer = connect(mapStateToProps, mapDispatchToProps)(Interface);
export default InterfaceContainer;
