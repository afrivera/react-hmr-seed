import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

const render = (Component) => {
  ReactDOM.render(
    <Component title='Counter:' />, document.getElementById('app'));
};

render(Counter);

if (module.hot) {
  module.hot.accept('./Counter.jsx', () => {
    render(Counter);
  });
}
