import React, { Component } from 'react';

class Students extends Component {
  constructor(props) {
    super(props);
  }
  // let students=this.this.props.students;
  render() {
    let students = this.props.students;

    return (
      <div>
        <h3>Student</h3>
        <ul>
          {students.map(student => <li key={student.id}>{student.name}</li>)}
        </ul>
      </div>
    );
  }
  z;
}
export default Students;