import React, { Component } from 'react';
class MyApp extends Component {
  render() {
    let value = 'Hello guys ' + 'Date :' + new Date().toDateString();
    let values = ['one', 'two', 'three'];
    let students = [
      {
        name: 'Kobir',
        course: 'React',
        image:
          'http://res.cloudinary.com/mitul/image/upload/v1516642029/cnc0d37jjmafm3smhxmg.jpg',
      },
      {
        name: 'Any',
        course: 'C#',
        image:
          'http://res.cloudinary.com/mitul/image/upload/v1516642100/emsgtxcfc20ql3yrzn2m.jpg',
      },
      {
        name: 'Pnay',
        course: 'Bangla',
        image:
          'http://res.cloudinary.com/mitul/image/upload/v1516642143/lquvzayxgcyqyce0hwxo.jpg',
      },
    ];
    return (
      <div>
        <h2> {values.length} </h2>
        {values.map(x => <h3>{x}</h3>)}
        {students.map(stu => (
          <h3>
            {stu.name} <span>{stu.course}</span>{' '}
          </h3>
        ))}
        {students.map(x => (
          <ul>
            <li>
              {x.name}-{x.course}
            </li>
          </ul>
        ))}
        <ul>
          {students.map(s => (
            <li>
              <h1>{s.name}</h1>
              <img src={s.image} alt="" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default MyApp;
