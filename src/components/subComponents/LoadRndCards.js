import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../resources/loadRndCards.css';

import card from '../../assets/card2.png'

import spieler1img from '../../assets/spieler/spieler1.png';
import spieler2img from '../../assets/spieler/spieler2.png';
import spieler3img from '../../assets/spieler/spieler3.png';
import spieler4img from '../../assets/spieler/spieler4.png';
import spieler5img from '../../assets/spieler/spieler5.png';
import spieler6img from '../../assets/spieler/spieler6.png';
import spieler7img from '../../assets/spieler/spieler7.png';
import spieler8img from '../../assets/spieler/spieler8.png';
import spieler9img from '../../assets/spieler/spieler9.png';
import spieler10img from '../../assets/spieler/spieler10.png';
import spieler11img from '../../assets/spieler/spieler11.png';


class LoadRndCards extends Component{

  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){

    return(
      <div num="1" className="loadRndCards">
        <div className="loadRndCards-row">
          <div className="loadRndCards-row-card"><img src={card}/><img src={spieler1img}/></div>
          <div className="loadRndCards-row-card"><img src={card}/><img src={spieler2img}/></div>
          <div className="loadRndCards-row-card"><img src={card}/><img src={spieler3img}/></div>
          <div className="loadRndCards-row-card"><img src={card}/><img src={spieler4img}/></div>
          <div className="loadRndCards-row-card"><img src={card}/><img src={spieler5img}/></div>
        </div>
        <div num="2" className="loadRndCards-row">
          <div className="loadRndCards-row-card"><img src={card}/><img src={spieler6img}/></div>
          <div className="loadRndCards-row-card"><img src={card}/><img src={spieler7img}/></div>
          <div className="loadRndCards-row-card"><img src={card}/><img src={spieler8img}/></div>
          <div className="loadRndCards-row-card"><img src={card}/><img src={spieler9img}/></div>

        </div>
        <div num="3" className="loadRndCards-row">
          <div className="loadRndCards-row-card"><img src={card}/><img src={spieler10img}/></div>
          <div className="loadRndCards-row-card"><img src={card}/><img src={spieler11img}/></div>
          <div className="loadRndCards-row-card"><img src={card}/><img src={spieler1img}/></div>
        </div>
      </div>
    );
  }
}

export default LoadRndCards;