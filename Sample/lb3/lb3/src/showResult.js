import React, { Component } from 'react';

class ShowResult extends Component {
  constructor(props) {
    super(props);
  }
  // let students=this.this.props.students;
  render() {
    let count = this.props.count;

    return (
      <div>
        <h2> Result Found : {count}</h2>
      </div>
    );
  }
  z;
}
export default ShowResult;
