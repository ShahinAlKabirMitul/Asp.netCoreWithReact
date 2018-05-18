import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './GreetingsDiv';
import Student from './student';
import StudentFilter from './studentFilter';
import HttpRepo from './Repository/repository';

class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      student: { name: 'everyone' },
      keyword: '',
      students: [],
      filteredStudents: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleStudentFilter = this.handleStudentFilter.bind(this);
  }
  handleClick(x) {
    this.setState({ student: x });
    console.log(this.state);
  }
  handleStudentFilter(event) {
    this.setState({ keyword: event.target.value });
    var result = this.state.students.filter(
      x => x.name.indexOf(event.target.value) !== -1
    );
    this.setState({ filteredStudents: result });
  }

  componentWillMount() {
    let r = new HttpRepo();

    let temp = r.get('https://jsonplaceholder.typicode.com/users').then(x => {
      this.setState({ students: x, filteredStudents: x });
      console.log(x);
    });
  }
  componentDidMount() {}

  render() {
    const now = new Date();
    let value = 'hello guys ' + now.toDateString();
    let values = ['first', 'second', 'third'];

    return (
      <div>
        <StudentFilter handleFilter={this.handleStudentFilter} />
        <h2>Filter : {this.state.keyword}</h2>
        <ul>
          {this.state.filteredStudents.map(x => (
            <li key={x.id}>
              <Student studentObj={x} handleClick={this.handleClick} />
            </li>
          ))}
        </ul>
        <div>
          <h3>Click on the name of the above students: </h3>
          <Greeting student={this.state.student} />
        </div>
        <div>
          <p>
            <a
              href="https://github.com/ShahinAlKabirMitul/Asp.netCoreWithReact/tree/master/Sample/my-app"
              target="_blank"
            >
              https://github.com/ShahinAlKabirMitul/Asp.netCoreWithReact/tree/master/Sample/my-app
            </a>
          </p>
        </div>
      </div>
    );
  }
}
export default MyApp;
