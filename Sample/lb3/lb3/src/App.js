import React, { Component } from 'react';
import Student from './student/student';
import Teacher from './teacher/teacher';
import Course from './courses/course';
import Filter from './filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      teachers: [],
      courses: [],
      filteredStudents: [],
      filteredTeachers: [],
      filteredCourses: [],
    };
    this.handleStudentFilter = this.handleStudentFilter.bind(this);
  }
  componentWillMount() {
    this.setState({
      filteredStudents: [
        { id: '1', name: 'mitul', address: 'moghbazar' },
        { id: '2', name: 'shuvo', address: 'mirpur' },
        { id: '3', name: 'kona', address: 'uttora' },
      ],
    });
    this.setState({
      students: [
        { id: '1', name: 'mitul', address: 'moghbazar' },
        { id: '2', name: 'shuvo', address: 'mirpur' },
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
      filteredTeachers: [
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
    this.setState({
      filteredCourses: [
        { id: '1', name: 'C#', credit: '2' },
        { id: '2', name: 'java', credit: '3' },
        { id: '3', name: 'react', credit: '4' },
      ],
    });
  }
  handleStudentFilter(event) {
    this.setState({ keyword: event.target.value });
    var result = this.state.students.filter(
      x => x.name.indexOf(event.target.value) !== -1
    );
    this.setState({ filteredStudents: result });

    this.setState({ keyword: event.target.value });
    var result = this.state.teachers.filter(
      x => x.name.indexOf(event.target.value) !== -1
    );
    this.setState({ filteredTeachers: result });

    this.setState({ keyword: event.target.value });
    var result = this.state.courses.filter(
      x => x.name.indexOf(event.target.value) !== -1
    );
    this.setState({ filteredCourses: result });
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
        <Filter handleFilter={this.handleStudentFilter} />
        <h2>Filter : {this.state.keyword}</h2>
        <br />
        <div style={divStyle}>
          <h3>Students</h3>
          <ul>
            {this.state.filteredStudents.map(stuObj => (
              <li>
                <Student student={stuObj} />
              </li>
            ))}
          </ul>
        </div>
        <div style={divStyle}>
          <h3>Teachers</h3>
          <ul>
            {this.state.filteredTeachers.map(teacherObj => (
              <li>
                <Teacher teacher={teacherObj} />
              </li>
            ))}
          </ul>
        </div>
        <div style={divStyle}>
          <h3>Courses</h3>
          <ul>
            {this.state.filteredCourses.map(courseObj => (
              <li>
                <Course course={courseObj} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
