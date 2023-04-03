import React, { Component } from 'react';
import subjects from './HOC';

export class King1 extends Component {

    state={
        marks:0
    }
    marksIncremented = () =>
    {
        this.setState({marks:this.state.marks + 1})
    }

  render() {
    return (
      <div>
        <h2 onMouseOver={this.marksIncremented}>King Marks {this.state.marks} {this.props.hocsub}</h2>
      </div>
    )
  }
}

export default subjects(King1)
