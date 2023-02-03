import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/SliderElemStyle.css';


class SliderElem extends Component{

  constructor(props){
    super(props);
    this.state = {
      propObj: this.props.propObj,
    }
    this.swipe = this.swipe.bind(this);
  }

  swipe(e){
    var refkeynum = e.target.getAttribute("refkeynum"); // Ziel bsp. 12
    var keynum = e.target.parentElement.getAttribute("keynum"); // Ausgangsposi 10 
    var keynumBlockIndex;
    var refkeynumBlockIndex;
    //jetzt nur noch den State so verändern dass die alignments so ausgerichtet werden dass ein slide entsteht
    var tmpObj = this.state.propObj;
    for(var j = 0; j < tmpObj.blocks.length; j++){

      // es wird nach den beiden keynums gesucht und dessen alignments verändert
      if(tmpObj.blocks[j].keynum == keynum){
        keynumBlockIndex = j;
      } else if (tmpObj.blocks[j].keynum == refkeynum){
        refkeynumBlockIndex = j;
      }
    }
    // jetzt wird auf die alignments geschaut um zu schauen wie verschiebt werden muss.

    if(tmpObj.blocks[refkeynumBlockIndex].alignment > tmpObj.blocks[keynumBlockIndex].alignment){
      // 2 > 1 oder 
      tmpObj.blocks[refkeynumBlockIndex].alignment = 1;
      tmpObj.blocks[keynumBlockIndex].alignment = 0;

    } else if(tmpObj.blocks[refkeynumBlockIndex].alignment < tmpObj.blocks[keynumBlockIndex].alignment){
      // 1 < 2 oder 0 < 1 
      tmpObj.blocks[refkeynumBlockIndex].alignment = 1;
      tmpObj.blocks[keynumBlockIndex].alignment = 2;
    }

    this.setState({
      propObj: tmpObj
    });

  }


  render(){
    /*
    ----The documentation of this component----

    This component is contained in a parent element, this parent element determined the size of this component - the height and the width
    
    The provided propObj is set up in the state object, thereby we can manipulate this Object isolated. The advantage we not must go in higher 
    layers. The assigned object - reachable by 'this.props.propObj' - states how many blocks the SliderElement has. In Section *A1* we generate 
    the blocks with an array what will be transmitted in the sliderElem. 
      

    */


    var blockArr = [];
    var alignment = "";
    var className = "";
    var testa = React.createElement(
              'div',
              {className: 'testatSani'},
              'Hello adfsWorld',
              [React.createElement(
                  'div',
                  {className: 'testatSani2'},
                  'Held',
                )]
            );



    for(var i = 0, constructArr = []; i < this.state.propObj.blocks.length; i++){
      
      for(var p = 0; p < this.state.propObj.blocks[i].construct.length; p++){
        if(this.state.propObj.blocks[i].construct[p].hasOwnProperty('refkeynum')){
          constructArr.push(<div refkeynum={this.state.propObj.blocks[i].construct[p].refkeynum} onClick={this.swipe}>lolol</div>);
          
        } else {
          constructArr.push(this.state.propObj.blocks[i].construct[p]);
        }
      }

      
      switch(this.state.propObj.blocks[i].alignment){
        case 0:
          alignment = "left";
        break;
        case 1:
          alignment = "center";
        break;
        case 2:
          alignment = "right";
        break;
      } 
      className = "sliderElem-block";
      blockArr.push(
        <div className={className} alignment={alignment} keynum={this.state.propObj.blocks[i].keynum}>

            <h3>{this.state.propObj.blocks[i].name}</h3>
            
            {constructArr}

            {testa}


        </div>
      );
      constructArr = [];
    }
    console.log(this.state.propObj.blocks[0].construct);

    return(
      <div className="sliderElem">
        {blockArr}
      </div>
    );
  }
}

export default SliderElem;