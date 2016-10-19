import React from 'react';
import ReactDOM from 'react-dom';
import ItemView from './ItemView';

test('<ItemView /> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemView />, div);
});
