import React, { Component } from 'react';

class Courses extends Component {
  constructor(props) {
    super(props);
  }
  // let students=this.this.props.students;
  render() {
    let courses = this.props.courses;

    return (
      <div>
        <h3>Course</h3>
        <ul>{courses.map(course => <li key={course.id}>{course.name}</li>)}</ul>
      </div>
    );
  }
  z;
}
export default Courses;
