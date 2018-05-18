import React, { Component } from 'react';

class Course extends Component {
  constructor(props) {
    super(props);
  }
  // let students=this.this.props.students;
  render() {
    let course = this.props.course;

    return (
      <div>
        <h5>{course.name}</h5>
      </div>
    );
  }
  z;
}
export default Course;
