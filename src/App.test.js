import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from '../src/components/Home/Homepage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
