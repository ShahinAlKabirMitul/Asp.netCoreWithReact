import React, { Component } from 'react';

class Student extends Component {
  constructor(props) {
    super(props);
  }
  // let students=this.this.props.students;
  render() {
    let student = this.props.student;

    return (
      <div>
        <h5>{student.name}</h5>
      </div>
    );
  }
  z;
}
export default Student;
