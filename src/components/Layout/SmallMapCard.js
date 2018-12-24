import React, { Component } from 'react'

export default class SmallMapCard extends Component {
  render() {
    return (
      <div class="ui cards"><div class="ui card"><div class="content"><img src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" class="ui mini right floated image"/><div class="header">Your location</div><div class="meta">Ajust marker</div><div class="description">Here is the map <strong>dont know</strong></div></div><div class="extra content"><div class="ui two buttons"><button class="ui green basic button">Edit</button><button class="ui red basic button">do something</button>
      </div>
      </div></div>
      </div>
    )
  }
}
