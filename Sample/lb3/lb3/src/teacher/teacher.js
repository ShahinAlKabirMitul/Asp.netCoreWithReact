import React, { Component } from 'react';

class Teacher extends Component {
  constructor(props) {
    super(props);
  }
  // let students=this.this.props.students;
  render() {
    let teacher = this.props.teacher;

    return (
      <div>
        <h5>{teacher.name}</h5>
      </div>
    );
  }
  z;
}
export default Teacher;
