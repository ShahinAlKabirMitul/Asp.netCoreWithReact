import React from 'react';
import ReactDOMMama from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MyApp from './MyApp';



ReactDOMMama.render( < MyApp / > , document.getElementById('root'));

registerServiceWorker();