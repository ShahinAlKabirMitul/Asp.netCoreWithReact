import React, { Component } from 'react';
import Greeting from './Greeting';
import Student from './student';

class MyApp extends Component {
  render() {
    let value = 'Hello guys ' + 'Date :' + new Date().toDateString();
    let values = ['one', 'two', 'three'];
    let students = [
      {
        name: 'Kobir',
        course: 'React',
        color: 'green',
      },
      {
        name: 'Any',
        course: 'C#',
        color: 'lightyellow',
      },
      {
        name: 'Pnay',
        course: 'Bangla',
        color: 'lightgreen',
      },
    ];
    return (
      <div>
        <Greeting />
        <h2> {values.length} </h2>

        <ul>
          {students.map(s => (
            <li>
              <Student student={s} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default MyApp;
