import React, { Component } from 'react';

class TextField extends Component {

  render() {
    return(
      <textarea
        onChange={this.props.handleChange}
        value={this.props.text}
      />
    )
  }
}

export default TextField;