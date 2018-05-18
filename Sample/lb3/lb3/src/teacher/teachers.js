import React, { Component } from 'react';

class Teachers extends Component {
  constructor(props) {
    super(props);
  }
  // let students=this.this.props.students;
  render() {
    let teachers = this.props.teachers;

    return (
      <div>
        <h3>Teacher</h3>
        <ul>
          {teachers.map(teacher => <li key={teacher.id}>{teacher.name}</li>)}
        </ul>
      </div>
    );
  }
  z;
}
export default Teachers;
