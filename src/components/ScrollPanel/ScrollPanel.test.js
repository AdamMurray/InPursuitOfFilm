import React from 'react';
import ReactDOM from 'react-dom';
import ScrollPanel from './ScrollPanel';

test('<ScrollPanel /> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScrollPanel />, div);
});
