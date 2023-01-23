import React from 'react';
import ReactDOM from 'react-dom/client';
import { getRandomSubarray } from 'utils/randomizer';

import App from './App';

import './index.css';

const COLORS = [
  'cornflowerblue',
  'lightseagreen',
  'peru',
  'sandybrown',
  'tomato',
  'coral',
  'hotpink',
  'salmon',
  'steelblue',
  'teal',
  'darkcyan',
  'mediumpurple',
  'indianred',
];

console.log(getRandomSubarray(COLORS, 4));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





