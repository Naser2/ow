import React, { Component } from 'react'
import Cont from '../../Container';

export default class SmallMapCard extends Component {
  render() {
    return (
      <div class="ui cards" style={{float:"left",  paddingLeft: "1.58571429em"}}><div class="ui card"><div class="content" style={{textAlign: "center", marginLeft:"10px"}}><img src={<Cont />} alt="googl"
       class=""/><div class="header">your current location</div><div class="meta" >share with loved ones or rate</div><div class="description" >
       
       Here is the map 
       <Cont />
       <strong>dont know</strong></div></div><div class="extra content"><div class="ui two buttons"><button class="ui green basic button">share</button><button class="ui red basic button">rate</button>
      </div>
      </div></div>
      </div>
      
    )
  }
}
