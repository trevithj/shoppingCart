import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders two panels', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
	const panels = div.querySelectorAll('div.App-panel');
	//console.log(panels[0]);
	expect(panels.length).toBe(2);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders five products', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
	const products = div.querySelectorAll('div.product');
	//console.log(products[0]);
	expect(products.length).toBe(5);
  ReactDOM.unmountComponentAtNode(div);
});
