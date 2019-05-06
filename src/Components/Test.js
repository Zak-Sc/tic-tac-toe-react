import React, { Component } from 'react'

class Test extends Component {
  render() {
    return React.createElement('div',null,
    React.createElement("h1", null, this.props.name),
  );
  }
}

export default  Test;
