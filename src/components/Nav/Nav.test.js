import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

test('<Nav /> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nav />, div);
});
