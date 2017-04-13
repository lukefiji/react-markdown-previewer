import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import TextField from './TextField';
import MarkdownPreviewer from './MarkdownPreviewer'

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  }

  render() {
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Markdown Previewer</h2>
          </div>
          <div className="container">
          <TextField 
            handleChange={this.handleChange}
            text={this.state.text}
          />
          <MarkdownPreviewer
            text={this.state.text}
          />
          </div>
        </div>
    );
  }
}

export default App;
