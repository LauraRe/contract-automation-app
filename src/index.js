import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Customer from './Components/Customer';
import { customers } from './customers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <Customer id={customers[0].id} name={customers[0].name} />
    <Customer id={customers[1].id} name={customers[1].name}/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
