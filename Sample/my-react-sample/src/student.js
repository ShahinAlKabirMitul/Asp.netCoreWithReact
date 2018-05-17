import React, { Component } from 'react';

class Student extends Component {
  render() {
    let student = this.props.student;
    let myStyle = {
      background: student.color,
    };
    return (
      <div>
        <h1 style={myStyle} onClick={this.props.handleClick}>{student.name}</h1>
      </div>
    );
  }
}
export default Student;
