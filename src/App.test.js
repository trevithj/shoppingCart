import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  const div = document.createElement('div');

	it('renders two panels', () => {
		ReactDOM.render(<App />, div);
		const panels = div.querySelectorAll('div.App-panel');
		expect(panels.length).toBe(2);
		expect(panels[0].innerHTML).toContain('Products</h3>');
		expect(panels[1].innerHTML).toContain('Shopping Cart</h3>');
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders five products', () => {
		ReactDOM.render(<App />, div);
		const products = div.querySelectorAll('div.product');
		expect(products.length).toBe(5);
		products.forEach(p => {
			expect(p.innerHTML).toContain('Add to cart</button>');
		});
		ReactDOM.unmountComponentAtNode(div);
	});
});
