import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    userInput: ''
  }

  updateOutput = (event) =>{
    let tempText = event.target.value;
    this.setState({userInput: tempText});
  }

  deleteCharacterHandler = (index) => {
    let value = this.state.userInput.split('');
    value.splice(index,1);
    this.setState({userInput: value.join('')})
  }

  render() {
    let characters = (
      <div>
        {this.state.userInput.split('').map((character,index) => (
          <CharComponent 
          character={character} 
          key={index}
          click = {() => {this.deleteCharacterHandler(index)}}/>
        ))}
      </div>
      );
    

    return (
      <div className="App">
        <div>
          Enter text: <input type="text" value={this.state.userInput} onChange={(event) => this.updateOutput(event)}/>
          <p>{this.state.userInput}</p>
          <ValidationComponent userInput={this.state.userInput}/>
        </div>

        {characters}

      </div>
    );
  }
}

export default App;
