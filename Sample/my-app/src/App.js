import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpRepo from './Repository/repository';

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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
