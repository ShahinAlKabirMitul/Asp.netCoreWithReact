import React, { Component } from 'react';
import Students from './student/students';
import Teachers from './teacher/teachers';
import Courses from './courses/courses';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      teachers: [],
      courses: [],
    };
  }
  componentWillMount() {
    this.setState({
      students: [
        { id: '1', name: 'Mitul', address: 'moghbazar' },
        { id: '2', name: 'Shuvo', address: 'mirpur' },
        { id: '3', name: 'kona', address: 'uttora' },
      ],
    });
    this.setState({
      teachers: [
        { id: '1', name: 'mosh', address: 'ca' },
        { id: '2', name: 'foyzul', address: 'dhaka' },
        { id: '3', name: 'timone', address: 'ctg' },
      ],
    });
    this.setState({
      courses: [
        { id: '1', name: 'C#', credit: '2' },
        { id: '2', name: 'java', credit: '3' },
        { id: '3', name: 'react', credit: '4' },
      ],
    });
  }
  render() {
    let divStyle = {
      width: '200px',
      border: '1px solid black',
      float: 'left',
      textAlign: 'center',
    };
    return (
      <div>
        <h1>Work on process</h1>
        <div style={divStyle}>
          <Students students={this.state.students} />
        </div>
        <div style={divStyle}>
          <Teachers teachers={this.state.teachers} />
        </div>
        <div style={divStyle}>
          <Courses courses={this.state.courses} />
        </div>
      </div>
    );
  }
}

export default App;
