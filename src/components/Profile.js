import React, { Component } from 'react';
import { incrementCounter } from '../actions/index.js';
import { connect } from 'react-redux'; 
import '../resources/formBlock.css';
import backgroundImg from './../assets/hintergrundrasen.jpg';
import loadingicon from './../assets/loadingicon.gif';
import grid from './../assets/grid.png';
import grid2 from './../assets/grid2.png';
import bigfont1 from './../assets/bigfont1.png';
import bigfont2 from './../assets/bigfont2.png';

import card from './../assets/cardnewdesign.png';
import playercard from './../assets/playercard0001.png';
import cardflipside from './../assets/cardnewdesignflipside.png';





import img1 from './../assets/imgs/1.png';
import img2 from './../assets/imgs/2.png';
import img3 from './../assets/imgs/3.png';
import img4 from './../assets/imgs/4.png';
import img5 from './../assets/imgs/5.png';
import img6 from './../assets/imgs/6.png';
import img7 from './../assets/imgs/7.png';
import img8 from './../assets/imgs/8.png';
import img9 from './../assets/imgs/9.png';
import img10 from './../assets/imgs/10.png';
import img11 from './../assets/imgs/11.png';
import img12 from './../assets/imgs/12.png';
import img13 from './../assets/imgs/13.png';
import img14 from './../assets/imgs/14.png';
import img15 from './../assets/imgs/15.png';
import img16 from './../assets/imgs/16.png';
import img17 from './../assets/imgs/17.png';
import img18 from './../assets/imgs/18.png';
import img19 from './../assets/imgs/19.png';
import img20 from './../assets/imgs/20.png';
import img21 from './../assets/imgs/21.png';
import img22 from './../assets/imgs/22.png';
import img23 from './../assets/imgs/23.png';
import img24 from './../assets/imgs/24.png';
import img25 from './../assets/imgs/25.png';
import img26 from './../assets/imgs/26.png';
import img27 from './../assets/imgs/27.png';
import img28 from './../assets/imgs/28.png';
import img29 from './../assets/imgs/29.png';
import img30 from './../assets/imgs/30.png';


import img31 from './../assets/imgs/31.png'; // alex
import img32 from './../assets/imgs/32.png'; // bishan
import img33 from './../assets/imgs/33.png'; // carlo
import img34 from './../assets/imgs/34.png'; // jack
import img35 from './../assets/imgs/35.png'; // javier
import img36 from './../assets/imgs/36.png'; // kevin
import img37 from './../assets/imgs/37.png'; // kevin
import img38 from './../assets/imgs/38.png'; // leo
import img39 from './../assets/imgs/39.png'; // mateo
import img40 from './../assets/imgs/40.png'; // max

import img41 from './../assets/imgs/41.png'; 
import img42 from './../assets/imgs/42.png'; 

/*
import img43 from './../assets/imgs/43.png'; 
import img44 from './../assets/imgs/44.png'; 
import img45 from './../assets/imgs/45.png'; 
import img46 from './../assets/imgs/46.png'; 
import img47 from './../assets/imgs/47.png'; 
import img48 from './../assets/imgs/48.png'; 
import img49 from './../assets/imgs/49.png'; 
import img50 from './../assets/imgs/50.png'; 
*/

import anon from './../assets/imgs/anon.png'; 
import img50 from './../assets/imgs/50.png'; 
import img51 from './../assets/imgs/51.png'; 
import img52 from './../assets/imgs/52.png'; 
import img53 from './../assets/imgs/53.png'; 
import img54 from './../assets/imgs/54.png'; 
import img55 from './../assets/imgs/55.png'; 
import img56 from './../assets/imgs/56.png'; 
import img57 from './../assets/imgs/57.png'; 
import img58 from './../assets/imgs/58.png'; 
import img59 from './../assets/imgs/59.png'; 
import img60 from './../assets/imgs/60.png'; 
import img61 from './../assets/imgs/61.png'; 
import img62 from './../assets/imgs/62.png'; 
import img63 from './../assets/imgs/63.png'; 
import img64 from './../assets/imgs/64.png'; 
import img65 from './../assets/imgs/65.png'; 
import img66 from './../assets/imgs/66.png'; 
import img67 from './../assets/imgs/67.png'; 
import img68 from './../assets/imgs/68.png'; 
import img69 from './../assets/imgs/69.png'; 
import img70 from './../assets/imgs/70.png'; 
import img71 from './../assets/imgs/71.png'; 
import img72 from './../assets/imgs/72.png'; 
import img73 from './../assets/imgs/73.png'; 
import img74 from './../assets/imgs/74.png'; 
import img75 from './../assets/imgs/75.png'; 
import img76 from './../assets/imgs/76.png'; 
import img77 from './../assets/imgs/77.png'; 
import img78 from './../assets/imgs/78.png'; 
import img79 from './../assets/imgs/79.png'; 
import img80 from './../assets/imgs/80.png'; 
import img81 from './../assets/imgs/81.png'; 
import img82 from './../assets/imgs/82.png'; 
import img83 from './../assets/imgs/83.png'; 
import img84 from './../assets/imgs/84.png'; 
import img85 from './../assets/imgs/85.png'; 
import img86 from './../assets/imgs/86.png'; 
import img87 from './../assets/imgs/87.png'; 
import img88 from './../assets/imgs/88.png'; 
import img89 from './../assets/imgs/89.png'; 
import img90 from './../assets/imgs/90.png'; 
import img91 from './../assets/imgs/91.png'; 
import img92 from './../assets/imgs/92.png'; 
import img93 from './../assets/imgs/93.png'; 
import img94 from './../assets/imgs/94.png'; 
import img95 from './../assets/imgs/95.png'; 
import img96 from './../assets/imgs/96.png'; 
import img97 from './../assets/imgs/97.png'; 
import img98 from './../assets/imgs/98.png'; 
import img99 from './../assets/imgs/99.png'; 
import img100 from './../assets/imgs/100.png'; 
import img101 from './../assets/imgs/101.png'; 
import img102 from './../assets/imgs/102.png'; 
import img103 from './../assets/imgs/103.png'; 
import img104 from './../assets/imgs/104.png'; 
import img105 from './../assets/imgs/105.png'; 

import img106 from './../assets/imgs/106.png'; 
import img107 from './../assets/imgs/107.png'; 
import img108 from './../assets/imgs/108.png'; 
import img109 from './../assets/imgs/109.png'; 
import img110 from './../assets/imgs/110.png'; 
import img111 from './../assets/imgs/111.png'; 
import img112 from './../assets/imgs/112.png'; 
import img113 from './../assets/imgs/113.png'; 
import img114 from './../assets/imgs/114.png'; 
import img115 from './../assets/imgs/115.png'; 
import img116 from './../assets/imgs/116.png'; 
import img117 from './../assets/imgs/117.png'; 
import img118 from './../assets/imgs/118.png'; 
import img119 from './../assets/imgs/119.png'; 
import img120 from './../assets/imgs/120.png'; 
import img121 from './../assets/imgs/121.png'; 
import img122 from './../assets/imgs/122.png'; 
import img123 from './../assets/imgs/123.png'; 
import img124 from './../assets/imgs/124.png'; 


import img125 from './../assets/imgs/125.png';
import img126 from './../assets/imgs/126.png';
import img127 from './../assets/imgs/127.png';
import img128 from './../assets/imgs/128.png';
import img129 from './../assets/imgs/129.png';
import img130 from './../assets/imgs/130.png';
import img131 from './../assets/imgs/131.png';
import img132 from './../assets/imgs/132.png';
import img133 from './../assets/imgs/133.png';
import img134 from './../assets/imgs/134.png';
import img135 from './../assets/imgs/135.png';
import img136 from './../assets/imgs/136.png';
import img137 from './../assets/imgs/137.png';
import img138 from './../assets/imgs/138.png';
import img139 from './../assets/imgs/139.png';
import img140 from './../assets/imgs/140.png';
import img141 from './../assets/imgs/141.png';
import img142 from './../assets/imgs/142.png';
import img143 from './../assets/imgs/143.png';
import img144 from './../assets/imgs/144.png';
import img145 from './../assets/imgs/145.png';
import img146 from './../assets/imgs/146.png';
import img147 from './../assets/imgs/147.png';
import img148 from './../assets/imgs/148.png';
import img149 from './../assets/imgs/149.png';
import img150 from './../assets/imgs/150.png';
import img151 from './../assets/imgs/151.png';
import img152 from './../assets/imgs/152.png';
import img153 from './../assets/imgs/153.png';
import img154 from './../assets/imgs/154.png';
import img155 from './../assets/imgs/155.png';
import img156 from './../assets/imgs/156.png';
import img157 from './../assets/imgs/157.png';
import img158 from './../assets/imgs/158.png';
import img159 from './../assets/imgs/159.png';
import img160 from './../assets/imgs/160.png';
import img161 from './../assets/imgs/161.png';
import img162 from './../assets/imgs/162.png';
import img163 from './../assets/imgs/163.png';
import img164 from './../assets/imgs/164.png';
import img165 from './../assets/imgs/165.png';
import img166 from './../assets/imgs/166.png';
import img167 from './../assets/imgs/167.png';
import img168 from './../assets/imgs/168.png';
import img169 from './../assets/imgs/169.png';
import img170 from './../assets/imgs/170.png';
import img171 from './../assets/imgs/171.png';





import '../resources/profile.css';


class Profile extends Component{

    constructor(props){
      super(props);

      this.state = {
        started: 0,
        restricted: false,
        snsExecuted: false, // sns= show new stats
        profile: {}
      }
      this.startanimation = this.startanimation.bind(this);
      this.loadref = React.createRef();
      this.databody = React.createRef();

      this.shownewstatswrapperFunc = this.shownewstatswrapperFunc.bind(this);

      this.table = this.table.bind(this);

    }

    delimiterStr(str, delimiter){
      for(var i = 0, resArr = [], tmpStr= ""; i <= str.length; i++){
          if(str[i] == delimiter || i == str.length){
              resArr.push(tmpStr);
              tmpStr = "";
          } else {
              tmpStr = tmpStr+str[i];
          } 
      }
      return resArr;
    }

    searchPrimary(arr){
      // console.log(this.delimiterStr(profile.timeDribbling[0][1], "."));
      for(var i = 0, num, num2, key; i < arr.length; i++){

        
        if(i == 0){
          num = this.delimiterStr(arr[i][1], ".");  
          num = parseFloat(num[2]+num[1]+num[0]);
          key = i;
                    
          continue;
        } else {
          num2 = this.delimiterStr(arr[i][1], ".");  
          num2 = parseFloat(num2[2]+num2[1]+num2[0]);
        }
                
        if(num > num2){

          continue;

        } else {
          num = num2;
          key = i;
        }

      }
      return key;

    }

    shownewstats(obj){
      var databody = obj.databody.current;
      setTimeout(function(){
          databody.children[3].classList.remove("getBigger1");
          databody.children[3].classList.add("getBigger3");
          setTimeout(function(){
                databody.children[4].classList.remove("getBigger1");
                databody.children[4].classList.add("getBigger3");
                setTimeout(function(){
                    databody.children[5].classList.remove("getBigger1");
                    databody.children[5].classList.add("getBigger3");

                    setTimeout(function(){
                      databody.children[3].children[0].classList.add("hideLeft");
                      databody.children[3].children[1].classList.add("goMid");

                      setTimeout(function(){
                        databody.children[4].children[0].classList.add("hideLeft");
                        databody.children[4].children[1].classList.add("goMid");
                        databody.children[3].classList.add("getBigger1");

                        setTimeout(function(){
                          databody.children[5].children[0].classList.add("hideLeft");
                          databody.children[5].children[1].classList.add("goMid");
                          databody.children[4].classList.add("getBigger1");
                          setTimeout(function(){
                            databody.children[5].classList.add("getBigger1");

                            setTimeout(function(){
                                databody.children[1].children[0].children[0].classList.add("getSmall");
                                setTimeout(function(){
                                  databody.children[1].children[0].children[0].children[1].classList.add("fadeIn");
                                  setTimeout(function(){
                                    databody.children[1].children[0].children[0].classList.add("hideUp");
                                    databody.children[1].children[0].children[1].classList.add("goUp");
                                    setTimeout(function(){
                                      obj.databody.current.parentElement.parentElement.parentElement.parentElement.children[0].classList.add('fadeInEmerge');
                                    }, 300);  
                                  }, 1200); 
                                }, 300);  
                            }, 2300);

                          }, 1850)
                        }, 1850);
                      }, 1850);
                    }, 3850);


                }, 950);
          }, 950);
      }, 350);


    }

    shownewstatswrapperFunc(){
      if(!this.state.snsExecuted){
        this.setState({
          snsExecuted: true
        });
        this.shownewstats(this);
      }
    }

    buildcard(obj){

      var databody = obj.databody.current;

      databody.children[0].children[0].classList.add("goUp");
      databody.children[1].children[0].classList.add("goUp");

      databody.children[6].children[0].classList.add("goUp");
      databody.children[7].children[0].classList.add("goUp");

      databody.children[2].classList.add("getBigger");


      

      setTimeout(function(){
        databody.children[1].children[0].children[0].classList.add("goUp");
        databody.children[6].children[0].children[0].classList.add("goUp");
        databody.children[7].children[0].children[0].classList.add("goUp");

        setTimeout(function(){
          databody.children[3].classList.add("getBigger1");
          databody.children[3].classList.add("getBigger2");
          setTimeout(function(){
            databody.children[4].classList.add("getBigger1");
            databody.children[4].classList.add("getBigger2");
            setTimeout(function(){
              databody.children[5].classList.add("getBigger1");
              databody.children[5].classList.add("getBigger2");
              setTimeout(function(){
                obj.databody.current.parentElement.parentElement.parentElement.parentElement.children[0].classList.add('fadeInCard');
              }, 350);
            }, 350);
          }, 450);
        }, 450);

        
      }, 300);


    }

    startanimation(obj){
      setTimeout(function(){
        //set state started to 1
        //iniziate animation
        setTimeout(function(){
          setTimeout(function(){

              obj.loadref.current.parentElement.children[2].classList.add('backgroundFadeOut');
              setTimeout(function(){
                obj.databody.current.parentElement.parentElement.parentElement.classList.add('fadeInCard');
                setTimeout(function(){
                  obj.databody.current.parentElement.parentElement.parentElement.classList.add('fadeInShadow');
                  
                  obj.buildcard(obj);
                }, 2200)
              }, 800);

          }, 1550);
        }, 500);
      }, 15)
    }





    buildKoordinationTable(){
      var resObj = {
          pointsArr: [],
          timeArr: [],
      }
      //von klein zu groß
      // 0,5 difference   
      for(var i = 20.5, j = 88; i < 42.5; i=i+0.5, j--){
          resObj.timeArr.push(i);
          resObj.pointsArr.push(j);
      }
      
      return resObj; 
  } 
  buildDribblingTable(){
      var resObj = {
          pointsArr: [],
          timeArr: [],
      }
      //von klein zu groß
      // 0,5 difference   
      for(var i = 11, j = 85; i < 29.5; i=i+0.5, j--){
          resObj.timeArr.push(i);
          resObj.pointsArr.push(j);
      }
      
      return resObj; 
  }





  dribblingTable(num){
    var table = this.buildDribblingTable();
      
      for(var j = 0; j < table.timeArr.length; j++){
          
                  // zeit befindet sich zwischen zwei schritten es wird runtergebrochen auf den nächst kleinerenwert
          if(num > table.timeArr[j] && num < table.timeArr[j+1]){
                                      return table.pointsArr[j];
                                      break;
                  // Zeit befindet sich genau auf einen Wert
          } else if(num == table.timeArr[j]){
                                      return table.pointsArr[j];
                                      break;
                  // Zeit ist größert als der größte Wert, wird trotzdem runtergebrochen auf den letzten Wert
          } else if(num > table.timeArr[table.timeArr.length-1]){
                                      return table.pointsArr[j];
                                      break;
                  // Zeit ist kleiner als 
          } else if(num < table.timeArr[0]){    
                                      return table.pointsArr[j];
                                      break;
          }
    }
  } 
  koordinationTable(num){
      var table = this.buildKoordinationTable();
      for(var j = 0; j < table.timeArr.length; j++){
                  // zeit befindet sich zwischen zwei schritten es wird runtergebrochen auf den nächst kleinerenwert
          if(num > table.timeArr[j] && num < table.timeArr[j+1]){
                                      return table.pointsArr[j];
                                      console.log("hier ist die pkt zahl: "+table.pointsArr[j]);
                                      break;
                  // Zeit befindet sich genau auf einen Wert
          } else if(num == table.timeArr[j]){
                                      return table.pointsArr[j];
                                      console.log("hier ist die pkt zahl: "+table.pointsArr[j]);
                                      break;
                  // Zeit ist größert als der größte Wert, wird trotzdem runtergebrochen auf den letzten Wert
          } else if(num > table.timeArr[table.timeArr.length-1]){
                                      return table.pointsArr[j];
                                      console.log("hier ist die pkt zahl: "+table.pointsArr[j]);
                                      break;
                  // Zeit ist kleiner als 
          } else if(num < table.timeArr[0]){    
                                      return table.pointsArr[j];
                                      console.log("hier ist die pkt zahl: "+table.pointsArr[j]);
                                      break;
          }
    }
  } 

  table(num, key){
    if(key == 1){
      return this.koordinationTable(num);
    } else if(key == 2){
      return this.dribblingTable(num);
    } else if(key == 3){
      return num;
    }
  }










    render(){

      

      if(this.state.started === 0){
        this.startanimation(this);
      }

      var displayObj = {
        dribbling: [],
        koordination: [],
        schusskraft: []
      }
   
      // erstelle Werte Tabelle für die Kids
      var membersHerbst = [
          {
            id: 1,
            vorname: "Emmanuel",
            nachname: "Skornia",
            imgSrc: img162,
            playerposition: "ZM",
            displayObj: {
              koordination: [19, 19], // 0: alt 1: neu  
              dribbling: [10, 8], // 0: alt 1: neu
              schusskraft: [73, 82] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 2,
            vorname: "Niklas",
            nachname: "Blum",
            imgSrc: img154,
            playerposition: "ZM",
            displayObj: {
              koordination: [18, 18], // 0: alt 1: neu  
              dribbling: [9, 7], // 0: alt 1: neu
              schusskraft: [72, 81] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 3,
            vorname: "Michael",
            nachname: "Pudelko",
            imgSrc: img3,
            playerposition: "ZM",
            displayObj: {
              koordination: [20, 19], // 0: alt 1: neu  
              dribbling: [10, 10], // 0: alt 1: neu
              schusskraft: [72, 85] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 4,
            vorname: "Mamuka",
            nachname: "Gasoev",
            imgSrc: img167,
            playerposition: "ZM",
            displayObj: {
              koordination: [19, 19], // 0: alt 1: neu  
              dribbling: [11, 9], // 0: alt 1: neu
              schusskraft: [89, 91] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 5,
            vorname: "Maarten",
            nachname: "Krikow",
            imgSrc: img5,
            playerposition: "ZM",
            displayObj: {
              dribbling: [17.5, 11.5], // 0: alt 1: neu
              koordination: [22.5, 21.5], // 0: alt 1: neu  
              schusskraft: [69, 74] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 6,
            vorname: "Naom",
            nachname: "Moog",
            imgSrc: img153,
            playerposition: "ZM",
            displayObj: {
              koordination: [19, 19], // 0: alt 1: neu  
              dribbling: [11, 9], // 0: alt 1: neu
              schusskraft: [67, 68] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 7,
            vorname: "Luca",
            nachname: "Werdenig",
            imgSrc: img7,
            playerposition: "ZM",
            displayObj: {
              dribbling: [13.5, 11], // 0: alt 1: neu
              koordination: [23, 22], // 0: alt 1: neu  
              schusskraft: [76, 76] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 8,
            vorname: "Samuel",
            nachname: "Honkomp",
            imgSrc: img21,
            playerposition: "ZM",
            displayObj: {
              koordination: [19.5, 19.5], // 0: alt 1: neu  
              dribbling: [10, 10], // 0: alt 1: neu
              schusskraft: [66, 66] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 9,
            vorname: "Jannik",
            nachname: "Schwärmer",
            imgSrc: img171,
            playerposition: "ZM",
            displayObj: {
              dribbling: [22, 21], // 0: alt 1: neu
              koordination: [22, 21], // 0: alt 1: neu  
              schusskraft: [72, 72] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 10,
            vorname: "Benno",
            nachname: "Hartmann",
            imgSrc: img10,
            playerposition: "ZM",
            displayObj: {
              dribbling: [14, 10.5], // 0: alt 1: neu
              koordination: [20, 19], // 0: alt 1: neu  
              schusskraft: [56, 57] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 11,
            vorname: "Malte",
            nachname: "Blum",
            imgSrc: img168,
            playerposition: "ZM",
            displayObj: {
              koordination: [21, 19], // 0: alt 1: neu  
              dribbling: [10, 8], // 0: alt 1: neu
              schusskraft: [62, 62] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 12,
            vorname: "Aurel",
            nachname: "Freytag",
            imgSrc: img12,
            playerposition: "ZM",
            displayObj: {
              koordination: [27, 26], // 0: alt 1: neu  
              dribbling: [16.5, 14], // 0: alt 1: neu
              schusskraft: [63, 68] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 13,
            vorname: "Mike-Leon",
            nachname: "Engel",
            imgSrc: img13,
            playerposition: "ZM",
            displayObj: {
              dribbling: [20,5, 13], // 0: alt 1: neu
              koordination: [25.5, 24.5], // 0: alt 1: neu  
              schusskraft: [75, 75] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 14,
            vorname: "Arda",
            nachname: "Kilic",
            imgSrc: img14,
            playerposition: "ZM",
            displayObj: {
              dribbling: [18, 11.5], // 0: alt 1: neu
              koordination: [28, 27], // 0: alt 1: neu  
              schusskraft: [71, 84] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 15,
            vorname: "Yazan",
            nachname: "Aboelenien",
            imgSrc: img15,
            playerposition: "ZM",
            displayObj: {
              dribbling: [16, 13], // 0: alt 1: neu
              koordination: [24, 23], // 0: alt 1: neu  
              schusskraft: [69, 69] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 16,
            vorname: "Dennis",
            nachname: "Keskiner",
            imgSrc: img169,
            playerposition: "ZM",
            displayObj: {
              koordination: [27, 20.5], // 0: alt 1: neu  
              dribbling: [15.5, 13], // 0: alt 1: neu
              schusskraft: [71, 73] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 17,
            vorname: "Henri",
            nachname: "Honkomp",
            imgSrc: img17,
            playerposition: "ZM",
            displayObj: {
              dribbling: [15, 12], // 0: alt 1: neu
              koordination: [25, 23.5], // 0: alt 1: neu  
              schusskraft: [65, 69] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 18,
            vorname: "Mika",
            nachname: "Fischer",
            imgSrc: img51,
            playerposition: "ZM",
            displayObj: {
              koordination: [19.5, 18.5], // 0: alt 1: neu  
              dribbling: [13.5, 12], // 0: alt 1: neu
              schusskraft: [67, 68] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 19,
            vorname: "Linus",
            nachname: "Landewee",
            imgSrc: img19,
            playerposition: "ZM",
            displayObj: {
              koordination: [24, 23], // 0: alt 1: neu  
              dribbling: [18.5, 15.5], // 0: alt 1: neu
              schusskraft: [68, 72] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 20,
            vorname: "Vincent",
            nachname: "Schweitzer",
            imgSrc: img20,
            playerposition: "ZM",
            displayObj: {
              dribbling: [13.5, 12], // 0: alt 1: neu
              koordination: [26.5, 25,5], // 0: alt 1: neu  
              schusskraft: [67, 67] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 21,
            vorname: "Constatin",
            nachname: "Kielwein",
            imgSrc: img8,
            playerposition: "ZM",
            displayObj: {
              dribbling: [14.5, 12.5], // 0: alt 1: neu
              koordination: [27.5, 26.5], // 0: alt 1: neu  
              schusskraft: [64, 64] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 22,
            vorname: "Noah",
            nachname: "Moltie",
            imgSrc: img22,
            playerposition: "ZM",
            displayObj: {
              koordination: [25.5, 28.5], // 0: alt 1: neu  
              dribbling: [12,5, 12.5], // 0: alt 1: neu
              schusskraft: [73, 73] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 23,
            vorname: "Jona",
            nachname: "Werdenig",
            imgSrc: img23,
            playerposition: "ZM",
            displayObj: {
              dribbling: [14.5, 12], // 0: alt 1: neu
              koordination: [24.5, 23.5], // 0: alt 1: neu  
              schusskraft: [66, 66] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 24,
            vorname: "Marley",
            nachname: "Meckler",
            imgSrc: img24,
            playerposition: "ZM",
            displayObj: {
              koordination: [29, 29], // 0: alt 1: neu  
              dribbling: [16, 12.5], // 0: alt 1: neu
              schusskraft: [47, 60] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 25,
            vorname: "Elijah",
            nachname: "tegegne",
            imgSrc: img147,
            playerposition: "ZM",
            displayObj: {
              koordination: [26, 25],
      dribbling: [13, 12],
      schusskraft: [67, 67]
            }

          },
          //______________________________________
          {
            id: 26,
            vorname: "Ilyas",
            nachname: "Keskiner",
            imgSrc: img26,
            playerposition: "ZM",
            displayObj: {
              dribbling: [15, 13], // 0: alt 1: neu
              koordination: [28.5, 25.5], // 0: alt 1: neu  
              schusskraft: [68, 68] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 27,
            vorname: "Elias",
            nachname: "Schmidt",
            imgSrc: img27,
            playerposition: "ZM",
            displayObj: {
              dribbling: [17, 13], // 0: alt 1: neu
              koordination: [26, 25], // 0: alt 1: neu  
              schusskraft: [51, 51] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 28,
            vorname: "Lars",
            nachname: "Fischer",
            imgSrc: img99,
            playerposition: "ZM",
            displayObj: {
              koordination: [39, 38], // 0: alt 1: neu  
              dribbling: [18.5, 17.5], // 0: alt 1: neu
              schusskraft: [54, 55] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 29,
            vorname: "Miljan",
            nachname: "Schulz",
            imgSrc: img29,
            playerposition: "ZM",
            displayObj: {
              koordination: [21.5, 21.5], // 0: alt 1: neu  
              dribbling: [16, 15.5], // 0: alt 1: neu
              schusskraft: [57, 60] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 30,
            vorname: "Leo",
            nachname: "Frotz",
            imgSrc: img30,
            playerposition: "ZM",
            displayObj: {
              dribbling: [17.5, 11.5], // 0: alt 1: neu
              koordination: [30.5, 29.5], // 0: alt 1: neu  
              schusskraft: [59, 59 ] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 31,
            vorname: "Alex",
            nachname: "Tsephe",
            imgSrc: img31,
            playerposition: "DEF",
            displayObj: {
              dribbling: [12, 12], // 0: alt 1: neu
              koordination: [20, 20], // 0: alt 1: neu  
              schusskraft: [72, 72] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 32,
            vorname: "Bishan",
            nachname: "Wadhwa",
            imgSrc: img32,
            playerposition: "DEF",
            displayObj: {
              dribbling: [14, 12.5], // 0: alt 1: neu
              koordination: [19, 19], // 0: alt 1: neu  
              schusskraft: [73, 79 ] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 33,
            vorname: "Carlo",
            nachname: "Sforza",
            imgSrc: img33,
            playerposition: "ST",
            displayObj: {
              dribbling: [11, 11], // 0: alt 1: neu
              koordination: [0, 0], // 0: alt 1: neu  
              schusskraft: [92, 92 ] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 34,
            vorname: "Jack",
            nachname: "Mitchell",
            imgSrc: img34,
            playerposition: "DEF",
            displayObj: {
              dribbling: [10, 10], // 0: alt 1: neu
              koordination: [19, 19], // 0: alt 1: neu  
              schusskraft: [77, 78 ] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 35,
            vorname: "Javier",
            nachname: "Vila Simon",
            imgSrc: img35,
            playerposition: "MF",
            displayObj: {
              dribbling: [14, 13.5], // 0: alt 1: neu
              koordination: [0, 0], // 0: alt 1: neu  
              schusskraft: [86, 86] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 36,
            vorname: "Kevin",
            nachname: "Andrade",
            imgSrc: img36,
            playerposition: "ST",
            displayObj: {
              dribbling: [14, 13.5], // 0: alt 1: neu
              koordination: [19, 19], // 0: alt 1: neu  
              schusskraft: [85, 85] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 37,
            vorname: "Leo",
            nachname: "Chaltain",
            imgSrc: img37,
            playerposition: "ST",
            displayObj: {
              dribbling: [12, 10.5], // 0: alt 1: neu
              koordination: [20.5, 20.5], // 0: alt 1: neu  
              schusskraft: [72, 83] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 38,
            vorname: "Max",
            nachname: "Bitko",
            imgSrc: img38,
            playerposition: "DEF",
            displayObj: {
              dribbling: [12.5, 10], // 0: alt 1: neu
              koordination: [21, 21], // 0: alt 1: neu  
              schusskraft: [83, 83] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 39,
            vorname: "Tiago",
            nachname: "Moreno",
            imgSrc: img39,
            playerposition: "DEF",
            displayObj: {
              dribbling: [14, 13], // 0: alt 1: neu
              koordination: [21, 21], // 0: alt 1: neu  
              schusskraft: [83, 83] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 40,
            vorname: "Caetano",
            nachname: "Bump",
            imgSrc: img40,
            playerposition: "GK",
            displayObj: {
              dribbling: [12, 12], // 0: alt 1: neu
              koordination: [24, 24], // 0: alt 1: neu  
              schusskraft: [82, 82] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 41,
            vorname: "Alvaro",
            nachname: "Pellarini",
            imgSrc: img41,
            playerposition: "MF",
            displayObj: {
              dribbling: [14, 13.5], // 0: alt 1: neu
              koordination: [22, 22], // 0: alt 1: neu  
              schusskraft: [79, 79] // 0: alt 1: neu
            }

          },
          //______________________________________
          {
            id: 42,
            vorname: "Mateo",
            nachname: "Number 10",
            imgSrc: img42,
            playerposition: "MF",
            displayObj: {
              dribbling: [13.5, 9.5], // 0: alt 1: neu
              koordination: [22, 22], // 0: alt 1: neu  
              schusskraft: [78, 82] // 0: alt 1: neu
            }

          },


          // April-Camp
          //______________________________________
          {
            id: 43,
            vorname: "Marko",
            nachname: "Dekic",
            imgSrc: img56,
            playerposition: "ZM",
            displayObj: {
              koordination: [21, 21], // 0: alt 1: neu  
              dribbling: [14.5, 11], // 0: alt 1: neu
              schusskraft: [62, 66] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 44,
            vorname: "Ahmad",
            nachname: "Batalov",
            imgSrc: img55,
            playerposition: "MF",
            displayObj: {
              koordination: [28, 26.5], // 0: alt 1: neu  
              dribbling: [13.5, 13], // 0: alt 1: neu
              schusskraft: [57, 57] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 45,
            vorname: "Waleed",
            nachname: "Bakkour",
            imgSrc: img63,
            playerposition: "MF",
            displayObj: {
              koordination: [22, 20], // 0: alt 1: neu  
              dribbling: [12, 12], // 0: alt 1: neu
              schusskraft: [71, 72] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 46,
            vorname: "Atharv",
            nachname: "Garg",
            imgSrc: img165,
            playerposition: "MF",
            displayObj: {
            koordination: [22, 21],
            dribbling: [13, 11],
            schusskraft: [60, 62]
            }
          },
          //______________________________________
          {
            id: 47,
            vorname: "Samuel",
            nachname: "Moss",
            imgSrc: img82,
            playerposition: "MF",
            displayObj: {
              koordination: [22.5, 19], // 0: alt 1: neu  
              dribbling: [14.5, 12.5], // 0: alt 1: neu
              schusskraft: [74, 74] // 0: alt 1: neu
            }
          },
          //______________________________________

          {
            id: 48,
            vorname: "Philip",
            nachname: "Zhang",
            imgSrc: img58,
            playerposition: "MF",
            displayObj: {
              koordination: [23, 22.5], // 0: alt 1: neu  
              dribbling: [15, 14.5], // 0: alt 1: neu
              schusskraft: [65, 65] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 49,
            vorname: "Konstantin",
            nachname: "Schevardo",
            imgSrc: img57,
            playerposition: "MF",
            displayObj: {
              koordination: [29, 29], // 0: alt 1: neu  
              dribbling: [15.5, 15.5], // 0: alt 1: neu
              schusskraft: [58, 58] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 50,
            vorname: "Mohammed",
            nachname: "Albonni",
            imgSrc: img78,
            playerposition: "MF",
            displayObj: {
              dribbling: [17, 14.5], // 0: alt 1: neu
              koordination: [28, 24], // 0: alt 1: neu  
              schusskraft: [60, 60] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 51,
            vorname: "Dean",
            nachname: "Opua",
            imgSrc: img52,
            playerposition: "MF",
            displayObj: {
              koordination: [22, 20], // 0: alt 1: neu  
              dribbling: [13.5, 12], // 0: alt 1: neu
              schusskraft: [72, 72] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 52,
            vorname: "Siddharth",
            nachname: "Muralitharan",
            imgSrc: img59,
            playerposition: "MF",
            displayObj: {
              koordination: [24, 22], // 0: alt 1: neu  
              dribbling: [16, 14.5], // 0: alt 1: neu
              schusskraft: [53, 55] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 53,
            vorname: "Aurelius",
            nachname: "Kandaz",
            imgSrc: img61,
            playerposition: "MF",
            displayObj: {
              koordination: [20.5, 20.5], // 0: alt 1: neu  
              dribbling: [14.5, 16], // 0: alt 1: neu
              schusskraft: [65, 65] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 54,
            vorname: "Jonas",
            nachname: "Mundorf",
            imgSrc: img83,
            playerposition: "MF",
            displayObj: {
              koordination: [23.5, 22.5], // 0: alt 1: neu  
              dribbling: [17, 13.5], // 0: alt 1: neu
              schusskraft: [71, 73] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 55,
            vorname: "Nahla",
            nachname: "Bakkour",
            imgSrc: img69,
            playerposition: "MF",
            displayObj: {
              koordination: [20.5, 20.5], // 0: alt 1: neu  
              dribbling: [15, 14], // 0: alt 1: neu
              schusskraft: [68, 68] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 56,
            vorname: "Milorad",
            nachname: "Salatik",
            imgSrc: img84,
            playerposition: "MF",
            displayObj: {
              koordination: [19.5, 19.5], // 0: alt 1: neu  
              dribbling: [14.5, 13], // 0: alt 1: neu
              schusskraft: [66, 69] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 57,
            vorname: "Alexander",
            nachname: "Blömer",
            imgSrc: img65,
            playerposition: "MF",
            displayObj: {
              dribbling: [13.5, 9.5], // 0: alt 1: neu
              koordination: [22, 22], // 0: alt 1: neu  
              schusskraft: [78, 82] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 58,
            vorname: "Benedikt",
            nachname: "Blömer",
            imgSrc: img68,
            playerposition: "MF",
            displayObj: {
              dribbling: [13.5, 9.5], // 0: alt 1: neu
              koordination: [22, 22], // 0: alt 1: neu  
              schusskraft: [78, 82] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 59,
            vorname: "Johan",
            nachname: "Ditz",
            imgSrc: img67,
            playerposition: "MF",
            displayObj: {
              koordination: [22.5, 21], // 0: alt 1: neu  
              dribbling: [15, 14], // 0: alt 1: neu
              schusskraft: [64, 72] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 60,
            vorname: "Aryan",
            nachname: "Pattan",
            imgSrc: img64,
            playerposition: "MF",
            displayObj: {
              koordination: [21, 21], // 0: alt 1: neu  
              dribbling: [10.5, 10.5], // 0: alt 1: neu
              schusskraft: [55, 55] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 61,
            vorname: "Mario",
            nachname: "Guri",
            imgSrc: img66,
            playerposition: "MF",
            displayObj: {
              koordination: [32, 32], // 0: alt 1: neu  
              dribbling: [16, 16], // 0: alt 1: neu
              schusskraft: [72, 72] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 62,
            vorname: "Daniel",
            nachname: "Brakaj",
            imgSrc: img70,
            playerposition: "MF",
            displayObj: {
              koordination: [28, 27], // 0: alt 1: neu  
              dribbling: [16, 13], // 0: alt 1: neu
              schusskraft: [52, 55] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 63,
            vorname: "Vincent",
            nachname: "Schweitzer",
            imgSrc: img75,
            playerposition: "MF",
            displayObj: {
              koordination: [21.5, 21], // 0: alt 1: neu  
              dribbling: [13.5, 12.5], // 0: alt 1: neu
              schusskraft: [72, 75] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 64,
            vorname: "Frederick",
            nachname: "Siebenhandl",
            imgSrc: img74,
            playerposition: "MF",
            displayObj: {
              dribbling: [13.5, 13.5], // 0: alt 1: neu
              koordination: [25.5, 22.5], // 0: alt 1: neu  
              schusskraft: [65, 65] // 0: alt 1: neu
            }
          },
          //______________________________________
          // kein Bild!!!
          {
            id: 65,
            vorname: "Lukas",
            nachname: "Jüssen",
            imgSrc: anon,
            playerposition: "MF",
            displayObj: {
              koordination: [25.5, 22], // 0: alt 1: neu  
              dribbling: [18.5, 13.5], // 0: alt 1: neu
              schusskraft: [55, 55] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 66,
            vorname: "Isaac",
            nachname: "Morgan",
            imgSrc: img73,
            playerposition: "MF",
            displayObj: {
              koordination: [30, 22], // 0: alt 1: neu  
              dribbling: [13.5, 11.5], // 0: alt 1: neu
              schusskraft: [72, 81] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 67,
            vorname: "Adam",
            nachname: "Paes",
            imgSrc: img110,
            playerposition: "MF",
            displayObj: {
            koordination: [26, 25],
            dribbling: [17, 15],
            schusskraft: [71, 71]
            }
          },
          //______________________________________
          {
            id: 68,
            vorname: "Raymond",
            nachname: "Lee Okach",
            imgSrc: img53,
            playerposition: "MF",
            displayObj: {
              koordination: [19, 20], // 0: alt 1: neu  
              dribbling: [12, 10.5], // 0: alt 1: neu
              schusskraft: [87, 88] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 69,
            vorname: "Charlotte",
            nachname: "Siebenhandl",
            imgSrc: img80,
            playerposition: "MF",
            displayObj: {
              koordination: [19.5, 19.5], // 0: alt 1: neu  
              dribbling: [12.5, 12.5], // 0: alt 1: neu
              schusskraft: [67, 67] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 70,
            vorname: "Philipp",
            nachname: "Barthold",
            imgSrc: img76,
            playerposition: "MF",
            displayObj: {
              koordination: [22, 21], // 0: alt 1: neu  
              dribbling: [15.5, 14.5], // 0: alt 1: neu
              schusskraft: [66, 66] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 71,
            vorname: "Felix",
            nachname: "Mahlberg",
            imgSrc: img72,
            playerposition: "MF",
            displayObj: {
              koordination: [28, 26.5], // 0: alt 1: neu  
              dribbling: [18, 15], // 0: alt 1: neu
              schusskraft: [59, 59] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 72,
            vorname: "Moritz",
            nachname: "Reichling",
            imgSrc: img100,
            playerposition: "MF",
            displayObj: {
              koordination: [28, 27], // 0: alt 1: neu  
              dribbling: [16, 14.5], // 0: alt 1: neu
              schusskraft: [76, 76] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 73,
            vorname: "Tino",
            nachname: "Kömpel",
            imgSrc: 101,
            playerposition: "MF",
            displayObj: {
              koordination: [33, 32], // 0: alt 1: neu  
              dribbling: [16, 14], // 0: alt 1: neu
              schusskraft: [57, 63] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 74,
            vorname: "Younes",
            nachname: "El Quadir",
            imgSrc: img105,
            playerposition: "MF",
            displayObj: {
              koordination: [23.5, 22.5], // 0: alt 1: neu  
              dribbling: [14.5, 12.5], // 0: alt 1: neu
              schusskraft: [60, 60] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 75,
            vorname: "Nick",
            nachname: "Sezari",
            imgSrc: img102,
            playerposition: "MF",
            displayObj: {
              koordination: [29.5, 28.5], // 0: alt 1: neu  
              dribbling: [17, 14.5], // 0: alt 1: neu
              schusskraft: [75, 75] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 76,
            vorname: "Dean André",
            nachname: "Daum",
            imgSrc: img89,
            playerposition: "MF",
            displayObj: {
              koordination: [24, 23], // 0: alt 1: neu  
              dribbling: [18, 16.5], // 0: alt 1: neu
              schusskraft: [66, 71] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 77,
            vorname: "Joshua",
            nachname: "Klein",
            imgSrc: img50,
            playerposition: "MF",
            displayObj: {
              koordination: [33, 33], // 0: alt 1: neu  
              dribbling: [19, 17.5], // 0: alt 1: neu
              schusskraft: [53, 58] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 78,
            vorname: "David",
            nachname: "Hetzel",
            imgSrc: img88,
            playerposition: "MF",
            displayObj: {
              koordination: [33.5, 32.5], // 0: alt 1: neu  
              dribbling: [20.5, 19], // 0: alt 1: neu
              schusskraft: [62, 63] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 79,
            vorname: "Henry",
            nachname: "Grohs",
            imgSrc: img82,
            playerposition: "MF",
            displayObj: {
              koordination: [30, 29.5], // 0: alt 1: neu  
              dribbling: [18, 17.5], // 0: alt 1: neu
              schusskraft: [61, 70] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 80,
            vorname: "Gabrielle",
            nachname: "Geschke",
            imgSrc: img91,
            playerposition: "MF",
            displayObj: {
              koordination: [39, 37], // 0: alt 1: neu  
              dribbling: [24, 20], // 0: alt 1: neu
              schusskraft: [38, 42] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 81,
            vorname: "Tobias",
            nachname: "Kern",
            imgSrc: img87,
            playerposition: "MF",
            displayObj: {
              koordination: [33.5, 31.5], // 0: alt 1: neu  
              dribbling: [18, 16.5], // 0: alt 1: neu
              schusskraft: [62, 62] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 82,
            vorname: "Felix",
            nachname: "Weiler",
            imgSrc: img97,
            playerposition: "MF",
            displayObj: {
              koordination: [38.5, 37.5], // 0: alt 1: neu  
              dribbling: [20, 19], // 0: alt 1: neu
              schusskraft: [56, 59] // 0: alt 1: neu
            }
          },
          //______________________________________
          // kein bild
          {
            id: 83,
            vorname: "Nathan",
            nachname: "Heid",
            imgSrc: img94,
            playerposition: "MF",
            displayObj: {
              koordination: [32, 30.5], // 0: alt 1: neu  
              dribbling: [27, 21], // 0: alt 1: neu
              schusskraft: [41, 57] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 84,
            vorname: "Philip",
            nachname: "Traoré",
            imgSrc: img95,
            playerposition: "MF",
            displayObj: {
              koordination: [44, 43], // 0: alt 1: neu  
              dribbling: [25.5, 18.5], // 0: alt 1: neu
              schusskraft: [44, 61] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 85,
            vorname: "Alan",
            nachname: "Göncü",
            imgSrc: img96,
            playerposition: "MF",
            displayObj: {
              koordination: [35, 33.5], // 0: alt 1: neu  
              dribbling: [24, 17], // 0: alt 1: neu
              schusskraft: [47, 55] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 86,
            vorname: "Rainer",
            nachname: "Geschke",
            imgSrc: img93,
            playerposition: "MF",
            displayObj: {
              koordination: [44.5, 43], // 0: alt 1: neu  
              dribbling: [23.5, 20], // 0: alt 1: neu
              schusskraft: [41, 55] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 87,
            vorname: "Ewald",
            nachname: "Hetzel",
            imgSrc: img98,
            playerposition: "MF",
            displayObj: {
              koordination: [59.5, 56.5], // 0: alt 1: neu  
              dribbling: [36.5, 25], // 0: alt 1: neu
              schusskraft: [38, 38] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 88,
            vorname: "Florian",
            nachname: "Mundorf",
            imgSrc: img81,
            playerposition: "MF",
            displayObj: {
              koordination: [23.5, 22.5], // 0: alt 1: neu  
              dribbling: [15, 12.5], // 0: alt 1: neu
              schusskraft: [70, 70] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 89,
            vorname: "Milad",
            nachname: "Etjemaee",
            imgSrc: img71,
            playerposition: "MF",
            displayObj: {
              koordination: [28, 20], // 0: alt 1: neu  
              dribbling: [15, 11.5], // 0: alt 1: neu
              schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 90,
            vorname: "Sven",
            nachname: "Maus",
            imgSrc: img106,
            playerposition: "MF",
            displayObj: {
              koordination: [19, 18.5], // 0: alt 1: neu  
              dribbling: [10, 8.5], // 0: alt 1: neu
              schusskraft: [67, 74] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 91,
            vorname: "Kalojan",
            nachname: "Jeliazkov",
            imgSrc: img107,
            playerposition: "MF",
            displayObj: {
              koordination: [17.5, 17], // 0: alt 1: neu  
              dribbling: [8.5, 7], // 0: alt 1: neu
              schusskraft: [82, 82] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 92,
            vorname: "Alex",
            nachname: "Nielsen",
            imgSrc: img108,
            playerposition: "MF",
            displayObj: {
              koordination: [20.5, 19], // 0: alt 1: neu  
              dribbling: [10.5, 9], // 0: alt 1: neu
              schusskraft: [76, 76] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 93,
            vorname: "Rojhat",
            nachname: "Sari",
            imgSrc: img157,
            playerposition: "MF",
            displayObj: {
              koordination: [19, 19], // 0: alt 1: neu  
              dribbling: [10, 8], // 0: alt 1: neu
              schusskraft: [70, 82] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 94,
            vorname: "Adam",
            nachname: "Engel",
            imgSrc: img110,
            playerposition: "MF",
            displayObj: {
              koordination: [18.5, 18], // 0: alt 1: neu  
              dribbling: [8.5, 7.5], // 0: alt 1: neu
              schusskraft: [64, 76] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 95,
            vorname: "Jannis",
            nachname: "Kirwel",
            imgSrc: img111,
            playerposition: "MF",
            displayObj: {
              koordination: [26, 24], // 0: alt 1: neu  
              dribbling: [12, 11], // 0: alt 1: neu
              schusskraft: [67, 67] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 96,
            vorname: "Simon",
            nachname: "Müller",
            imgSrc: img158,
            playerposition: "MF",
            displayObj: {
              koordination: [18, 18], // 0: alt 1: neu  
              dribbling: [10, 8], // 0: alt 1: neu
              schusskraft: [87, 87] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 97,
            vorname: "Arjun",
            nachname: "Pattan",
            imgSrc: img113,
            playerposition: "MF",
            displayObj: {
              koordination: [26, 24.5], // 0: alt 1: neu  
              dribbling: [10.5, 10.5], // 0: alt 1: neu
              schusskraft: [75, 75] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 98,
            vorname: "Lukas",
            nachname: "Kaessner",
            imgSrc: img169,
            playerposition: "MF",
            displayObj: {
              koordination: [22, 21], // 0: alt 1: neu  
              dribbling: [14, 12], // 0: alt 1: neu
              schusskraft: [81, 94] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 99,
            vorname: "Efram",
            nachname: "Nangoy",
            imgSrc: img136,
            playerposition: "MF",
            displayObj: {
            koordination: [69, 69],
            dribbling: [12, 12],
            schusskraft: [22, 21]
            }
          },
          //______________________________________
          {
            id: 100,
            vorname: "Merten",
            nachname: "Erkan",
            imgSrc: img151,
            playerposition: "MF",
            displayObj: {
            koordination: [21, 20],
            dribbling: [9, 7],
            schusskraft: [50, 66]
            }
          },
          //______________________________________
          {
            id: 101,
            vorname: "Philipp",
            nachname: "Birk",
            imgSrc: img117,
            playerposition: "MF",
            displayObj: {
            koordination: [27, 26], // 0: alt 1: neu  
            dribbling: [12.5, 10], // 0: alt 1: neu
            schusskraft: [58, 58] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 102,
            vorname: "Christian",
            nachname: "Dohrn",
            imgSrc: img164,
            playerposition: "MF",
            displayObj: {
            koordination: [22, 2],
            dribbling: [11, 9],
            schusskraft: [60, 63]
            }
          },
          //______________________________________
          {
            id: 103,
            vorname: "Kilian",
            nachname: "Gundlach",
            imgSrc: img119,
            playerposition: "MF",
            displayObj: {
            koordination: [26.5, 25], // 0: alt 1: neu  
            dribbling: [11, 10], // 0: alt 1: neu
            schusskraft: [71, 71] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 104,
            vorname: "Paul",
            nachname: "Kluin",
            imgSrc: anon,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 25.5], // 0: alt 1: neu  
            dribbling: [11.5, 9], // 0: alt 1: neu
            schusskraft: [57, 60] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 105,
            vorname: "Albert",
            nachname: "Avram",
            imgSrc: img120,
            playerposition: "MF",
            displayObj: {
            koordination: [33.5, 32], // 0: alt 1: neu  
            dribbling: [13.5, 11.5], // 0: alt 1: neu
            schusskraft: [44, 44] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 106,
            vorname: "Noel",
            nachname: "Burdack",
            imgSrc: img121,
            playerposition: "MF",
            displayObj: {
            koordination: [35, 34], // 0: alt 1: neu  
            dribbling: [16, 13.5], // 0: alt 1: neu
            schusskraft: [52, 52] // 0: alt 1: neu
          }
          },
          //______________________________________
          {
            id: 107,
            vorname: "Matthias",
            nachname: "Avram",
            imgSrc: img122,
            playerposition: "MF",
            displayObj: {
            koordination: [32, 30], // 0: alt 1: neu  
            dribbling: [14, 13.5], // 0: alt 1: neu
            schusskraft: [45, 45] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 108,
            vorname: "Wissam",
            nachname: "",
            imgSrc: img123,
            playerposition: "MF",
            displayObj: {
            koordination: [22, 22], // 0: alt 1: neu  
            dribbling: [9, 9], // 0: alt 1: neu
            schusskraft: [55, 55] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 109,
            vorname: "Ahmad",
            nachname: "",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 125,
            vorname: "Justus",
            nachname: "Bayer",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 110,
            vorname: "Angelos",
            nachname: "Kassner",
            imgSrc: img141,
            playerposition: "MF",
            displayObj: {
            koordination: [77, 77],
            dribbling: [12, 11],
            schusskraft: [29, 27]
            }
          },
          //______________________________________
          {
            id: 111,
            vorname: "Carl",
            nachname: "Auracher",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 112,
            vorname: "Alexander",
            nachname: "Lau",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
          }
          },
          //______________________________________
          {
            id: 113,
            vorname: "Benjamin",
            nachname: "Grebert",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 114,
            vorname: "Johann",
            nachname: "Gude",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 115,
            vorname: "Lukas",
            nachname: "Helbig",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 116,
            vorname: "Marc",
            nachname: "Maksyukh",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 117,
            vorname: "Kenny",
            nachname: "Rayan Masila",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 118,
            vorname: "Mats",
            nachname: "Grunert",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [26.5, 25],
            dribbling: [13, 12],
            schusskraft: [72, 73]
            }
          },
          //______________________________________
          {
            id: 119,
            vorname: "Santiago",
            nachname: "Aparicio",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 120,
            vorname: "Leonard",
            nachname: "Schönborn",
            imgSrc: img131,
            playerposition: "MF",
            displayObj: {
            koordination: [24, 22],
            dribbling: [15, 12],
            schusskraft: [72, 72]
            }
          },
          //______________________________________
          {
            id: 121,
            vorname: "Ben",
            nachname: "van Lochum",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 122,
            vorname: "Emil",
            nachname: "Maksyuh",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 123,
            vorname: "Jakob",
            nachname: "Wörmann",
            imgSrc: img1,
            playerposition: "MF",
            displayObj: {
            koordination: [67, 69],
            dribbling: [22, 17],
            schusskraft: [24, 23]
            }
          },
          //______________________________________
          {
            id: 124,
            vorname: "Jonte",
            nachname: "Meißner",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 125,
            vorname: "Justus",
            nachname: "Bayer",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
           //______________________________________
          {
            id: 126,
            vorname: "Leon",
            nachname: "van Lochum",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 127,
            vorname: "Robert",
            nachname: "Schatz",
            imgSrc: img143,
            playerposition: "MF",
            displayObj: {
            koordination: [29, 28],
            dribbling: [22, 18],
            schusskraft: [56, 57]
            }
          },
          //______________________________________
          {
            id: 128,
            vorname: "Valentin",
            nachname: "Leneschmidt",
            imgSrc: img142,
            playerposition: "MF",
            displayObj: {
            koordination: [29, 27],
            dribbling: [21, 16],
            schusskraft: [80, 80]
            }
          },
          //______________________________________
          {
            id: 129,
            vorname: "Leonard",
            nachname: "Bauer",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 130,
            vorname: "Zherui",
            nachname: "Tao",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 131,
            vorname: "Jairam",
            nachname: "Dudenko",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 132,
            vorname: "Janesh",
            nachname: "Dudenko",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 133,
            vorname: "Jakob",
            nachname: "Milich",
            imgSrc: img148,
            playerposition: "MF",
            displayObj: {
            koordination: [67, 69],
            dribbling: [22, 17],
            schusskraft: [24, 23]
            }
          },
          //______________________________________
          {
            id: 134,
            vorname: "Julius",
            nachname: "Diel",
            imgSrc: "img133",
            playerposition: "MF",
            displayObj: {
            koordination: [21, 21],
            dribbling: [13, 12],
            schusskraft: [83, 84]
            }
          },
          //______________________________________
          {
            id: 135,
            vorname: "Valentin",
            nachname: "Bachmann",
            imgSrc: img124,
            playerposition: "MF",
            displayObj: {
            koordination: [28, 20], // 0: alt 1: neu  
            dribbling: [15, 11.5], // 0: alt 1: neu
            schusskraft: [79, 79] // 0: alt 1: neu
            }
          },
          //______________________________________
          {
            id: 136,
            vorname: "Levent",
            nachname: "Müller",
            imgSrc: img127,
            playerposition: "MF",
            displayObj: {
            koordination: [27, 26],
            dribbling: [17, 17],
            schusskraft: [73, 73]
            }
          },
          //______________________________________
          {
            id: 137,
            vorname: "Maik",
            nachname: "Kreek",
            imgSrc: img125,
            playerposition: "MF",
            displayObj: {
            koordination: [68, 68],
            dribbling: [17, 13],
            schusskraft: [28, 26]
            }
          },
          //______________________________________
          {
            id: 138,
            vorname: "Jasper",
            nachname: "Juhre",
            imgSrc: img132,
            playerposition: "MF",
            displayObj: {
            koordination: [29, 27],
            dribbling: [19, 16],
            schusskraft: [50, 51]
            }
          },
          //______________________________________
          {
            id: 139,
            vorname: "Mats",
            nachname: "Sonntag",
            imgSrc: anon,
            playerposition: "MF",
            displayObj: {
            koordination: [26.5, 25],
            dribbling: [13, 12],
            schusskraft: [72, 73]
            }
          },
          //______________________________________
          {
            id: 140,
            vorname: "Agustin",
            nachname: "Saenz Correia",
            imgSrc: img128,
            playerposition: "MF",
            displayObj: {
            koordination: [24, 23],
            dribbling: [13, 12],
            schusskraft: [70, 73]
            }
          },
          //______________________________________
          {
            id: 141,
            vorname: "Benedikt",
            nachname: "Bachmann",
            imgSrc: img139,
            playerposition: "MF",
            displayObj: {
            koordination: [25.5, 24],
            dribbling: [13, 13],
            schusskraft: [57, 63]
            }
          },
          //______________________________________
          {
            id: 142,
            vorname: "Ednan",
            nachname: "Müller",
            imgSrc: img137,
            playerposition: "MF",
            displayObj: {
            koordination: [33, 32],
            dribbling: [13, 12],
            schusskraft: [67, 68]
            }
          },
          //______________________________________
          {
            id: 143,
            vorname: "Otto",
            nachname: "Juhre",
            imgSrc: img144,
            playerposition: "MF",
            displayObj: {
            koordination: [29, 27],
            dribbling: [14, 14],
            schusskraft: [53, 54]
            }
          },
          //______________________________________
          {
            id: 144,
            vorname: "Junis",
            nachname: "Haseloff",
            imgSrc: img146,
            playerposition: "MF",
            displayObj: {
            koordination: [25, 24.5],
            dribbling: [13, 13],
            schusskraft: [60, 62]
            }
          },
          //______________________________________
          {
            id: 145,
            vorname: "Adam",
            nachname: "Zizaouaghin",
            imgSrc: img130,
            playerposition: "MF",
            displayObj: {
            koordination: [23.5, 22],
            dribbling: [13, 11],
            schusskraft: [67, 67]
            }
          },
          //______________________________________
          {
            id: 146,
            vorname: "Nehan",
            nachname: "Sandara",
            imgSrc: img145,
            playerposition: "MF",
            displayObj: {
            koordination: [25, 24],
            dribbling: [12, 11],
            schusskraft: [57, 60]
            }
          },
          //______________________________________
          {
            id: 147,
            vorname: "Luz",
            nachname: "Saenz Correia",
            imgSrc: img126,
            playerposition: "MF",
            displayObj: {
            koordination: [42, 39],
            dribbling: [24, 22],
            schusskraft: [38, 39]
            }
          },
          //______________________________________
          {
            id: 148,
            vorname: "Elian",
            nachname: "Breuer",
            imgSrc: img135,
            playerposition: "MF",
            displayObj: {
            koordination: [24, 22],
            dribbling: [12, 9],
            schusskraft: [71, 72]
            }
          },
          //______________________________________
          {
            id: 149,
            vorname: "Hannes",
            nachname: "Lehmann",
            imgSrc: "img134",
            playerposition: "MF",
            displayObj: {
            koordination: [16, 15],
            dribbling: [9, 9],
            schusskraft: [72, 72]
            }
          },
          //______________________________________
          {
            id: 150,
            vorname: "Emil",
            nachname: "Rühmann",
            imgSrc: img163,
            playerposition: "MF",
            displayObj: {
            koordination: [20, 19],
            dribbling: [11, 9],
            schusskraft: [86, 93]
            }
          },
          //______________________________________
          {
            id: 151,
            vorname: "Maximilian",
            nachname: "Felgentreu",
            imgSrc: img150,
            playerposition: "MF",
            displayObj: {
            koordination: [23, 23],
            dribbling: [15, 13],
            schusskraft: [70, 83]
            }
          },
          //______________________________________
          {
            id: 152,
            vorname: "Ahmad",
            nachname: "Issa",
            imgSrc: img166,
            playerposition: "MF",
            displayObj: {
            koordination: [19, 19],
            dribbling: [10, 8],
            schusskraft: [91, 99]
            }
          },
          //______________________________________
          {
            id: 153,
            vorname: "Nicklas",
            nachname: "Klein",
            imgSrc: img155,
            playerposition: "MF",
            displayObj: {
            koordination: [22, 22],
            dribbling: [14, 12],
            schusskraft: [71, 73]
            }
          },
          //______________________________________
          {
            id: 154,
            vorname: "Marie",
            nachname: "Bohlmann",
            imgSrc: img149,
            playerposition: "MF",
            displayObj: {
            koordination: [24, 23],
            dribbling: [12, 10],
            schusskraft: [75, 76]
            }
          },
          //______________________________________
          {
            id: 155,
            vorname: "Moritz",
            nachname: "Helbig",
            imgSrc: img155,
            playerposition: "MF",
            displayObj: {
              koordination: [20, 19],
              dribbling: [11, 9],
              schusskraft: [66, 84]
            }
          },
          //______________________________________
          {
            id: 156,
            vorname: "Merten",
            nachname: "Erkan",
            imgSrc: img151,
            playerposition: "MF",
            displayObj: {
            koordination: [21, 20],
            dribbling: [9, 7],
            schusskraft: [50, 66]
            }
          },
          //______________________________________
          {
            id: 157,
            vorname: "Felix",
            nachname: "Roeseler",
            imgSrc: img161,
            playerposition: "MF",
            displayObj: {
            koordination: [19, 19],
            dribbling: [11, 9],
            schusskraft: [67, 78]
            }
          },
          //______________________________________
          {
            id: 158,
            vorname: "Louisa",
            nachname: "Dohrn",
            imgSrc: anon,
            playerposition: "MF",
            displayObj: {
            koordination: [22, 21],
            dribbling: [13, 13],
            schusskraft: [60, 62]
            }
          },
          //______________________________________
          {
            id: 159,
            vorname: "Leandro",
            nachname: "Silva",
            imgSrc: img170,
            playerposition: "MF",
            displayObj: {
            koordination: [19, 19],
            dribbling: [11, 9],
            schusskraft: [78, 82]
            }
          },
          //______________________________________
          {
            id: 160,
            vorname: "Jannes",
            nachname: "Otto",
            imgSrc: img159,
            playerposition: "MF",
            displayObj: {
            koordination: [27, 24],
            dribbling: [15, 13],
            schusskraft: [70, 71]
            }
          },
          //______________________________________
          {
            id: 161,
            vorname: "Wassim",
            nachname: "Kaddouri",
            imgSrc: anon,
            playerposition: "MF",
            displayObj: {
            koordination: [42, 39],
            dribbling: [24, 22],
            schusskraft: [38, 39]
            }
          },
          //______________________________________
          {
            id: 162,
            vorname: "Rajab",
            nachname: "Alibrahim",
            imgSrc: img156,
            playerposition: "MF",
            displayObj: {
            koordination: [22, 21],
            dribbling: [10, 8],
            schusskraft: [75, 76]
            }
          },
          //______________________________________
          {
            id: 163,
            vorname: "Ibrahim",
            nachname: "Alibrahim",
            imgSrc: img160,
            playerposition: "MF",
            displayObj: {
            koordination: [22, 22],
            dribbling: [13, 11],
            schusskraft: [61, 62]
            }
          }
      ];
    
      

      var profileId = location.search;
      if(profileId != ""){
        profileId = profileId.split("id=")[1];
        profileId = profileId+"";

        if(profileId){
          // diese id ist vom Camp in Washington
          
          // diese id ist noch vom Wintercamp

          // nutze die id und wähle von 30 IDs
          for(var i = 0; i < membersHerbst.length; i++){

            if(membersHerbst[i].id == profileId){
              var profile = membersHerbst[i];
              var displayObj = profile.displayObj;
              break;
            }
          }
          

          var vorname = profile.vorname.toUpperCase(); 
          var nachname = profile.nachname.toUpperCase(); 
          var imgSrc = profile.imgSrc;


          var secondaryDribbling = this.table(displayObj.dribbling[0], 2);
          var secondaryKoordination = this.table(displayObj.koordination[0], 1);
          var secondarySchusskraft = this.table(displayObj.schusskraft[0], 3);

          var primaryDribbling = this.table(displayObj.dribbling[1], 2);
          var primaryKoordination = this.table(displayObj.koordination[1], 1);
          var primarySchusskraft = this.table(displayObj.schusskraft[1], 3);

          var playerposition = profile.playerposition;
          
          //Werte zu Punkte machen

          var primaryAverage = Math.floor((primaryDribbling+primaryKoordination+primarySchusskraft)/3);
          var secondaryAverage = Math.floor((secondaryDribbling+secondaryKoordination+secondarySchusskraft)/3);

          var difDribbling = primaryDribbling-secondaryDribbling;
          var difKoordination = primaryKoordination-secondaryKoordination;
          var difSchusskraft = primarySchusskraft-secondarySchusskraft;
          var difAverage = primaryAverage-secondaryAverage;


          if(profileId > 30){

            var washingtonMinus = 8; 
            primaryAverage = primaryAverage-washingtonMinus;
            secondaryAverage = secondaryAverage-washingtonMinus;

            primaryDribbling = primaryDribbling-washingtonMinus; 
            primaryKoordination = primaryKoordination-washingtonMinus;
            primarySchusskraft = primarySchusskraft;

            secondaryDribbling = secondaryDribbling-washingtonMinus;
            secondaryKoordination = secondaryKoordination-washingtonMinus;
            secondarySchusskraft = secondarySchusskraft;
          }



        }


      } else {
        // leite den User zu einer Fehlermeldung



      }



      /*
      var imgSrc, profile, vorname, nachname, key, tmpArr;
      var secondarySchusskraft, secondaryKoordination, secondaryDribbling;

      var primaryDribbling, primaryKoordination, primarySchusskraft;
      var difDribbling, difKoordination, difSchusskraft, difAverage;
      var primaryAverage, secondaryAverage;

      var profileId = location.search;


      if(profileId != ""){

        profileId = profileId.split("id=")[1];
        profileId = profileId[0];

        var profileArr = this.props.profileArr;
        //nun suche nach diese id und finde den richten Index
        for(var i = 0; i < profileArr.length; i++){
          if(profileArr[i].id == profileId){
            //nehme das Spielerprofil als Obj auf
            profile = profileArr[i];
       
            vorname = (profile.vorname).toUpperCase();
            nachname = (profile.nachname).toUpperCase();
            // bestimme die values
            var cloneProfile = { ...profile }; 

            //dribbling
            key = this.searchPrimary(cloneProfile.timeDribbling);
            displayObj.dribbling.push(cloneProfile.timeDribbling[key]);

            //splice darf nicht benutzt werden, blockiere diesen key einfach nur!

            if(cloneProfile.timeDribbling > 1){

              tmpArr = [].concat(cloneProfile.timeDribbling);
              tmpArr.splice(key, 1);

              key = this.searchPrimary(tmpArr);
              displayObj.dribbling.push(tmpArr[key]);
              secondaryDribbling = displayObj.dribbling[1][0];
              primaryDribbling = displayObj.dribbling[0][0];
            } else {
              secondaryDribbling = displayObj.dribbling[0][0];
              primaryDribbling = 0;
            }
            //koordination
            key = this.searchPrimary(cloneProfile.timeKoordination);
            displayObj.koordination.push(cloneProfile.timeKoordination[key]);


            if(cloneProfile.timeKoordination > 1){

              tmpArr = [].concat(cloneProfile.timeKoordination);
              tmpArr.splice(key, 1);

              key = this.searchPrimary(tmpArr);
              displayObj.koordination.push(tmpArr[key]);
              secondaryKoordination = displayObj.koordination[1][0];
              primaryKoordination = displayObj.koordination[0][0];
            } else {
              secondaryKoordination = displayObj.koordination[0][0];
              primaryKoordination = 0;
            }
            //schusskraft
            key = this.searchPrimary(cloneProfile.valSchusskraft);
            displayObj.schusskraft.push(cloneProfile.valSchusskraft[key]);

            if(cloneProfile.valSchusskraft > 1){

              tmpArr = [].concat(cloneProfile.valSchusskraft);
              tmpArr.splice(key, 1);

              key = this.searchPrimary(tmpArr);
              displayObj.schusskraft.push(tmpArr[key]);
              secondarySchusskraft = displayObj.schusskraft[1][0];
              primarySchusskraft = displayObj.schusskraft[0][0];
            } else {
              secondarySchusskraft = displayObj.schusskraft[0][0];
              primarySchusskraft = 0;
            }

            primaryDribbling = primaryDribbling == 0 ? secondaryDribbling : primaryDribbling;
            primaryKoordination = primaryKoordination == 0 ? secondaryKoordination : primaryKoordination;
            primarySchusskraft = primarySchusskraft == 0 ? secondarySchusskraft : primarySchusskraft;

            primaryAverage = Math.floor((primaryDribbling+primaryKoordination+primarySchusskraft)/3);
            secondaryAverage = Math.floor((secondaryDribbling+secondaryKoordination+secondarySchusskraft)/3);
            difAverage = primaryAverage-secondaryAverage;

            difDribbling = primaryDribbling-secondaryDribbling;
            difKoordination = primaryKoordination-secondaryKoordination;
            difSchusskraft = primarySchusskraft-secondarySchusskraft;
            


            //nehme die eine url auf
            imgSrc = profile.imageUrl;
            var url = imgSrc;
            for(var i = 0, tmpStr = ""; i < url.length; i++){
                tmpStr = url.substr(i, 8);
                if(tmpStr == "/public/"){
                    while(url[i] != "?"){
                        i++;
                    }
                    imgSrc = url.substr(0, i);
                    break;
                }
            } 
            break;
          }
        } 

      } else {
        imgSrc = "";
      }

      // suche für den neusten Wert!
      
      
      // gehe durch die alle drei Arrays und finde den neusten Wert - baue dafür eine Funktion der das passende Array zurück gibt 
      
      
  
      // suche für den wert der hinter den neusten Wert liegt!
      // secondary wird zuerst gezeigt
      /*
      var secondaryDribbling = displayValues.dribbling.length > 1 ? displayValues.dribbling[1][0] : displayValues.dribbling[0][0];
      var secondaryKoordination = displayValues.koordination.length > 1 ? displayValues.koordination[1][0] : displayValues.koordination[0][0];  
      var secondarySchusskraft = displayValues.schusskraft.length > 1 ? displayValues.schusskraft[1][0] : displayValues.schusskraft[0][0];


    

      var primaryDribbling = displayValues.dribbling.length > 1 ? displayValues.dribbling[0][0] : 0;
      var primaryKoordination = displayValues.koordination.length > 1 ? displayValues.koordination[0][0] : 0;  
      var primarySchusskraft = displayValues.schusskraft.length > 1 ? displayValues.schusskraft[0][0] : 0;
        */
      /*
      var secondarySchusskraft = profile.valSchusskraft[0][0];
      var secondaryKoordination = profile.timeKoordination[0][0];
      var secondaryDribbling = profile.timeDribbling[0][0];
  */
      

      

      
      if(false){

         window.location.href = "https://www.djibinho.com/countdown/";

      } else {
        return(
          <div className="profile">
            <div className="profile-wrapper" fadeout="0">
              <div ref={this.loadref} started={this.state.started} className="profile-loadbar"></div>

              <img src={backgroundImg} className="profile-backimage"/>  


              <div className="profile-surface">
                  
                  <div className="profile-surface-usercontrol">

                    <h1 className="profile-surface-usercontrol-headline">GREAT PERFOMANCE {vorname}!</h1>

                    <div className="profile-surface-usercontrol-desc">Click on the button to see how your Improvement is.</div>

                    <div onClick={this.shownewstatswrapperFunc} className="profile-surface-usercontrol-button">SHOW MY PROCESS</div>

                    <div className="profile-surface-usercontrol-valueWrapper" num="1">
                      <p className="profile-surface-usercontrol-value">SHOOTINGPOWER:</p><p className="profile-surface-usercontrol-valueNum">{secondarySchusskraft}</p><p className="profile-surface-usercontrol-emerge">+{difSchusskraft}</p>
                    </div>
                    <div className="profile-surface-usercontrol-valueWrapper" num="2">
                      <p className="profile-surface-usercontrol-value">AGILITY:</p><p className="profile-surface-usercontrol-valueNum">{secondaryKoordination}</p><p className="profile-surface-usercontrol-emerge">+{difKoordination}</p>
                    </div>
                    <div className="profile-surface-usercontrol-valueWrapper" num="3">
                      <p className="profile-surface-usercontrol-value">DRIBBLING:</p><p className="profile-surface-usercontrol-valueNum">{secondaryDribbling}</p><p className="profile-surface-usercontrol-emerge">+{difDribbling}</p>
                    </div>


                  </div>


                  <div className="profile-surface-cardboxWrapper">
                    <div className="profile-surface-cardbox">

                      <div className="profile-surface-cardbox-frontside">


                        <div className="profile-surface-cardbox-frontside-cornerLeftPart1"></div>
                        <div className="profile-surface-cardbox-frontside-cornerLeftPart2"></div>
                        <div className="profile-surface-cardbox-frontside-cornerRightPart1"></div>
                        <div className="profile-surface-cardbox-frontside-cornerRightPart2"></div>
                        <div className="profile-surface-cardbox-frontside-midPart3"></div>
                        <div className="profile-surface-cardbox-frontside-bottomPart1"></div>
                        <div className="profile-surface-cardbox-frontside-bottomPart2"></div>
                        <div className="profile-surface-cardbox-frontside-midPart1"></div>
                        <div className="profile-surface-cardbox-frontside-midPart2"></div>
                        <img className="profile-surface-cardbox-frontside-img" src={imgSrc}/>



                        <div ref={this.databody} className="profile-surface-cardbox-frontside-databody">
                              

                          {/* child 1 */}
                          <div className="profile-surface-cardbox-frontside-databody-h4wrapper">
                            <div className="profile-surface-cardbox-frontside-databody-h4div">{playerposition}</div>
                          </div>




                          {/* child 2 */}
                          <div className="profile-surface-cardbox-frontside-databody-mainvalwrapper">
                            <div className="profile-surface-cardbox-frontside-databody-mainval">

                              <div className="profile-surface-cardbox-frontside-databody-mainval-val">
                                <div className="profile-surface-cardbox-frontside-databody-mainval-valPart" num="1">{secondaryAverage}</div>
                                <div className="profile-surface-cardbox-frontside-databody-mainval-valPart" num="2">+{difAverage}</div>
                              </div>

                              <div className="profile-surface-cardbox-frontside-databody-mainval-latestVal">{primaryAverage}</div>

                            </div>
                          </div>


                          {/* child 3 */}
                          <div className="profile-surface-cardbox-frontside-databody-frames"></div>

                          {/* child 4 */}

                          <div className="profile-surface-cardbox-frontside-databody-value" num="1">
                            <div className="profile-surface-cardbox-frontside-databody-value-contentwrapper">
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="1">SCH:</div>
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="2">{secondarySchusskraft}</div>
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="3">+{difSchusskraft}</div>
                            </div>

                            <div className="profile-surface-cardbox-frontside-databody-value-contentwrapper2">
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="1">SCH:</div>
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="2">{primarySchusskraft}</div>
                            </div>

                          </div>

                          {/* child 5 */}
                          <div className="profile-surface-cardbox-frontside-databody-value" num="2">
                            <div className="profile-surface-cardbox-frontside-databody-value-contentwrapper">
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="1">KOR:</div>
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="2">{secondaryKoordination}</div>
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="3">+{difKoordination}</div>
                            </div>  

                            <div className="profile-surface-cardbox-frontside-databody-value-contentwrapper2">
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="1">KOR:</div>
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="2">{primaryKoordination}</div>
                            </div>
                          </div>

                          {/* child 6 */}
                          <div className="profile-surface-cardbox-frontside-databody-value" num="3">
                            <div className="profile-surface-cardbox-frontside-databody-value-contentwrapper">
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="1">DRI:</div>
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="2">{secondaryDribbling}</div>
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="3">+{difDribbling}</div>
                            </div>

                            <div className="profile-surface-cardbox-frontside-databody-value-contentwrapper2">
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="1">DRI:</div>
                              <div className="profile-surface-cardbox-frontside-databody-valueOne-part" num="2">{primaryDribbling}</div>
                            </div>
                          </div>


                          {/* child 7 */}
                          <div className="profile-surface-cardbox-frontside-databody-surnameWrapper">
                            <div className="profile-surface-cardbox-frontside-databody-surname">
                              <div className="profile-surface-cardbox-frontside-databody-surname-content">{vorname}</div>
                            </div>
                          </div>
                          {/* child 8 */}
                          <div className="profile-surface-cardbox-frontside-databody-nameWrapper"> 
                            <div className="profile-surface-cardbox-frontside-databody-name">
                              <div className="profile-surface-cardbox-frontside-databody-name-content">{nachname}</div>
                            </div>
                          </div>

                        </div>

                      </div>

                      <div className="profile-surface-cardbox-backside">
                        <div className="profile-surface-cardbox-frontside-cornerLeftPart1"></div>
                        <div className="profile-surface-cardbox-frontside-cornerLeftPart2"></div>
                        <div className="profile-surface-cardbox-frontside-cornerRightPart1"></div>
                        <div className="profile-surface-cardbox-frontside-cornerRightPart2"></div>
                        <div className="profile-surface-cardbox-frontside-midPart3"></div>
                        <div className="profile-surface-cardbox-frontside-bottomPart1"></div>
                        <div className="profile-surface-cardbox-frontside-bottomPart2"></div>
                        <div className="profile-surface-cardbox-frontside-midPart1"></div>
                        <div className="profile-surface-cardbox-frontside-midPart2"></div>
                        <img className="profile-surface-cardbox-backside-img" src={cardflipside}/>
                      </div>

                      <div className="profile-surface-cardbox-leftlongside"></div>
                      <div className="profile-surface-cardbox-rightlongside"></div>

                      <div className="profile-surface-cardbox-bottomside"></div>
                      <div className="profile-surface-cardbox-bottomleftside"></div>
                      <div className="profile-surface-cardbox-bottomrightside"></div>

                      <div className="profile-surface-cardbox-topside"></div>
                      <div className="profile-surface-cardbox-topleftsidePart1"></div>
                      <div className="profile-surface-cardbox-topleftsidePart2"></div>
                      <div className="profile-surface-cardbox-toprightsidePart1"></div>
                      <div className="profile-surface-cardbox-toprightsidePart2"></div>

                    </div>
                    <div className="profile-surface-cardshadow"></div>
                  </div>



              </div>





              <div className="profile-bottomBar">
                <div className="profile-bottomBar-div">Sprache</div>  
                <p className="profile-bottomBar-p">Nutzungsbedingungen</p>
                <p className="profile-bottomBar-p">Datenschutz</p>
                <p className="profile-bottomBar-p">Hilfe</p>
              </div>
            </div>



          </div>
        );
      }

    }
}













//------------------------------------------------------------------------------



var mapStateToProps = function(state){
  return{
    profileArr: state.profileArr,
  }
}
var mapDispatchToProps = {

}


var ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;
