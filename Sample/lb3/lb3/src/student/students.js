import React, { Component } from 'react';

class Students extends Component {
  constructor(props) {
    super(props);
  }
  // let students=this.this.props.students;
  render() {
    let students = this.props.students;

    return <ul>{students.map(s => <li key={s.id}>{s.name}</li>)}</ul>;
  }
  z;
}
export default Students;
