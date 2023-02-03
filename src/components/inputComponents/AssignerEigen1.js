import React, { Component } from 'react';

import { connect } from 'react-redux'; 
import { incrementCounter } from '../../actions/index.js';

import PropTypes from 'prop-types';
import '../../resources/inputComponentsStyle/assignerEigen1.css';

import arrowdown from '../../assets/arrowdown2.png';
import cross from '../../assets/cross.png';


class AssignerEigen1 extends Component{

  constructor(props){
    super(props);

    this.state = {
      listedArr: []
    }



    this.inputFocused = this.inputFocused.bind(this);
    this.killentry = this.killentry.bind(this);
    this.close = this.close.bind(this);
    this.clickedBackground = this.clickedBackground.bind(this);
      

    this.assignItem = this.assignItem.bind(this);
    this.inputRef = React.createRef();

    this.propObj = this.props.propObj;

    this.itemArr = [
      {
        id: 16,
        name: "Max Steffen",
        availability: 1,
        assigned: 0
      },
      {
        id: 15,
        name: "Jeremy Jäger",
        availability: 1,
        assigned: 1
      },
      {
        id: 14,
        name: "Pascale N.",
        availability: 0,
        assigned: 0
      },
      {
        id: 33,
        name: "Florian Blind",
        availability: 1,
        assigned: 1
      },
      {
        id: 23,
        name: "Alex ter",
        availability: 0,
        assigned: 0
      },
      {
        id: 1,
        name: "John doe",
        availability: 1,
        assigned: 0
      },
      {
        id: 2,
        name: "Aiman Beluga",
        availability: 1,
        assigned: 0
      },
      {
        id: 11,
        name: "Theo Klassen",
        availability: 0,
        assigned: 0
      }
    ];

  }


  inputFocused(e){
    //setzt das tmpObj richtig auf das korrekte parentElement
    for(var i = 0, tmpObj = e.target; true; i++){
      tmpObj = tmpObj['parentElement'];
      if(tmpObj.getAttribute("class") === "interface"){
        break;
      }
    }
    e.target.parentElement.parentElement.classList.add('assignerEigen1-active');
    e.target.parentElement.parentElement.children[3].classList.add('assignerbox-active');

    e.target.parentElement.parentElement.children[1].children[1].classList.add('assignerbox-img-active');


    e.target.parentElement.parentElement.children[2].style.height = (1.6*(tmpObj.offsetHeight)+'px');
    e.target.parentElement.parentElement.children[2].style.width = (1.6*(tmpObj.offsetWidth)+'px');
    setTimeout(function(){
      e.target.parentElement.parentElement.children[3].children[0].classList.add('fadein-active');
    }, 150);
  }




  assignItem(e){
    var tmpArr = this.state.listedArr;
    // die id sucht in dem Ziel array
    var tmpListId = e.target.getAttribute("listId"); 
    if(this.itemArr[tmpListId].assigned === 0 && this.itemArr[tmpListId].availability === 1){

      tmpArr.push(this.itemArr[tmpListId]);
      this.itemArr[tmpListId].assigned = 1; 
      this.setState({
        listedArr: tmpArr,
      });


      for(var i = 0, tmpObj = e.target; true; i++){
        tmpObj = tmpObj['parentElement'];
        if(tmpObj.getAttribute("class") === "assignerEigen1 assignerEigen1-active"){
          break;
        }
      }
      this.close(tmpObj);
    }

  }


  killentry(e){
    var tStatedArr = this.state.listedArr;
    var tmpId = parseFloat(e.target.getAttribute('id'));

    for(var j = 0; j < tStatedArr.length; j++){
       if(tStatedArr[j].id == tmpId){
          tStatedArr.splice(j, 1);
          break;
       } 
    }

    var tArr = this.itemArr;  
    for(var j = 0; j < tArr.length; j++){
       if(tArr[j].id == tmpId){
          this.itemArr[j].assigned = 0;
          break;
       } 
    }
    
    this.itemArr[j].assigned = 0;


    this.setState({
      listedArr: tStatedArr,
    });
  }


  clickedBackground(e){
    this.close(e.target.parentElement);
  }

  close(obj){
    obj.children[3].children[0].classList.remove('fadein-active');
    setTimeout(function(){
      obj.classList.remove('assignerEigen1-active');
      obj.children[3].classList.remove('assignerbox-active');
      obj.children[1].children[1].classList.remove('assignerbox-img-active');
    }, 150);
    obj.children[2].style.height = ('0px');
    obj.children[2].style.width = ('0px');
  }

  render(){



    var itemArr = this.itemArr;



    var resArr = [];
    for (var i = 0; i < itemArr.length; i++) {
      resArr.push(<div listId={i} id={itemArr[i].id} name={itemArr[i].name} onClick={this.assignItem} className="assignerEigen1-assignerbox-list-unit">
                    <div listId={i} id={itemArr[i].id} name={itemArr[i].name} className="assignerEigen1-assignerbox-list-unit-name">{itemArr[i].name}</div>
                    <div listId={i} id={itemArr[i].id} name={itemArr[i].name} avaible={itemArr[i].availability} className="assignerEigen1-assignerbox-list-unit-notavaible">nicht zuweisbar</div>
                    <div listId={i} id={itemArr[i].id} name={itemArr[i].name} assigned={itemArr[i].assigned} className="assignerEigen1-assignerbox-list-unit-alreadyassigned">schon zugewiesen</div>
                  </div>);
    }
    if(itemArr.length === 0){
      resArr.push(<p className="assignerEigen1-assignerbox-list-nohits">Keine Ergebnisse</p>);
    }


    var resArr2 = [];
    var tStateArr = this.state.listedArr;
    for (var i = 0; i < tStateArr.length; i++){

        resArr2.push(<div className="assignerEigen1-assignedelements-unit">{tStateArr[i].name}
                        <img onClick={this.killentry} id={tStateArr[i].id} src={cross} className="assignerEigen1-assignedelements-unit-img"/>
                     </div>);
      
    }



    


    return(
      <div reverse={this.propObj.reverse} className="assignerEigen1">



            <div reverse={this.propObj.reverse} className="assignerEigen1-shadow"></div>
            
            <div onClick={this.open} className="assignerEigen1-wrapper">
                <input onFocus={this.inputFocused} ref={this.inputRef} type={this.propObj.type} name={this.propObj.name} value="Coach/es auswählen" tabindex={this.propObj.reachable ? "null" : "-1"} readOnly className="assignerEigen1-input"/>
                <img className="assignerEigen1-wrapper-img" src={arrowdown}/>
            </div>



            <div onClick={this.clickedBackground} className="assignerEigen1-windowbackground"></div>


            <div  unfoldDirec={this.propObj.unfoldDirec} className="assignerEigen1-assignerbox">
              <div className="assignerEigen1-assignerboxwrapper">
                <input placeholder="Suche..." className="assignerEigen1-assignerbox-input"/>
                <div className="assignerEigen1-assignerbox-listbarTop"></div>

                <div className="assignerEigen1-assignerbox-list">
                  {resArr}

                </div>

                <div className="assignerEigen1-assignerbox-listbarBottom"></div>
              </div>
            </div>


            <div className="assignerEigen1-assignedelements">
              {resArr2}
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


var AssignerEigen1Container = connect(mapStateToProps, mapDispatchToProps)(AssignerEigen1);


export default AssignerEigen1Container;