import React, { Component } from 'react';

class CreateThought extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    }
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div>CreateThought</div>
    );
  }
}

export default CreateThought
