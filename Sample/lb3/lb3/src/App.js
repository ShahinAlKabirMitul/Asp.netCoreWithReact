import React, { Component } from 'react';
import Students from './student/students';

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
    let appStyle = {
      display: 'flex',
      justifyContext: 'center',
      border: '1px solid black',
      textAlign: 'center',
      backgroud: '#919f91',
      width: '640px',
      height: '350px',
      marginLeft: '350px',
    };
    let divStyle = {
      width: '200px',
      border: '1px solid black',
      float: 'left',
      textAlign: 'center',
    };
    return (
      <div>
        <div style={divStyle}>
          <Students students={this.state.students} />
        </div>
      </div>
    );
  }
}

export default App;
