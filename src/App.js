import React, { Component } from 'react';

import Person from './Person/person';

class App extends Component {

  state = {
    person : [
      { name : "Allwin", age : 27 },
      { name : "Ashwin", age : 22 },
      { name : "Joel", age : 13 },
      { name : "Jismon", age : 12 }
    ]
  }

  handleClick = () => {
    this.setState({
      person : [
        { name : "Allwin", age : 27 },
        { name : "Ansly", age : 23 },
        { name : "Joel", age : 13 },
        { name : "Jismon", age : 12 }
      ] 
    })
  }

  render(){
    return (
      <div>
        <Person handleClick={this.handleClick} person={this.state.person[0]} age={this.state.person[0]} />
        <Person person={this.state.person[1]} age={this.state.person[1]} />
        <Person person={this.state.person[2]} age={this.state.person[2]} />
        <Person person={this.state.person[3]} age={this.state.person[3]} />
      </div>
    );
    //return React.createElement('h1', {backgroundColor : 'red'}, React.createElement('i', null, 'Hi'))
  }
}

export default App;