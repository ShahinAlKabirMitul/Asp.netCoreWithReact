import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpRepo from './Repository/repository';
import Student from './student';

class App extends Component {
  constructor() {
    super();
    this.state = {
      student: { name: 'everyone' },
      keyword: '',
      students: [],
      filteredStudents: [],
    };
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
      <ul>
        {this.state.filteredStudents.map(x => (
          <li key={x.id}>
            <Student studentObj={x} />
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
