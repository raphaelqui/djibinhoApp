import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/inputComponentsStyle/valueListEigen1.css';

import cross from './../../assets/cross.png';


class ValueListEigen1 extends Component{

  constructor(props){
    super(props);

    this.state = {
      
    }

    this.deleteValue = this.deleteValue.bind(this);

  }

  deleteValue(e){

    var profileObj = this.props.propObj;

    profileObj.func("Soll dieser "+profileObj.key+"-Wert ( "+e.target.getAttribute('val')+" ) wirklich vom Profil "+profileObj.surname+" "+profileObj.name+" entfernt werden?", "Ja, entfernen", ["DELETE_VALUE", e.target.getAttribute("arrKey"), profileObj.key, profileObj.pid]);    

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


    var valueArr = this.props.propObj.arr;
    var valueKey = this.props.propObj.key;

    var resArr = [];
    var key;
    if(valueKey == "Koordination"){
      //koordination ist key
      key = 1;
    } else if(valueKey == "Dribbling"){
      //dribbling ist key
      key = 2;
    } else if(valueKey == "Schusskraft"){
      key = 3;
    }
    //single input in one container
    for(var i = 0, dateStr = "", valNum = 0, pktNum = 0; i < valueArr.length; i++){
      valNum = valueArr[i][0];
      pktNum = this.table(valNum, key);
      dateStr = valueArr[i][1];
      resArr.push(<div className="valueList-list-unit">
        <div className="valueList-list-unit-value">{valNum+" / "+pktNum} Punkte</div><div className="valueList-list-unit-date">{dateStr}</div><img arrKey={i} val={pktNum} onClick={this.deleteValue} src={cross} className="valueList-list-unit-img"/>
      </div>);
    }

    return(
      <div className="valueList">
          <div num="1" className="valueList-listbar"></div>
          <div className="valueList-list">
          <div num="2" className="valueList-listbar"></div>
            {resArr}
          </div>  
      </div>
    );
  }
}

export default ValueListEigen1;