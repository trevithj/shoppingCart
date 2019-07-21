import React from 'react';
import ReactDOM from 'react-dom';
import * as Details from './details';

const { format, Fixed, Total } = Details;

describe('format', () => {
	it('should show trailing zeros', () => {
		const result = format(123);
		expect(result).toEqual('123.00');
	});

	it('should show only two digits', () => {
		const result = format(123.45678);
		expect(result).toEqual('123.46');
	});

});

describe('Fixed', () => {
	const div = document.createElement('div');

	it('uses defaults', () => {
		ReactDOM.render(<Fixed />, div);
		const html = div.innerHTML;
		expect(html).toContain('width: 100%');
		expect(html).toContain('text-align: right');
		ReactDOM.unmountComponentAtNode(div);
	});

	it('uses props when passed', () => {
		ReactDOM.render(<Fixed width="99px" align="left">Some text</Fixed>, div);
		const html = div.innerHTML;
		expect(html).toContain('width: 99px');
		expect(html).toContain('text-align: left');
		expect(html).toContain('>Some text<');
		ReactDOM.unmountComponentAtNode(div);
	});
});


describe('Total', () => {
	const div = document.createElement('div');

	it('displays as expected', () => {
		ReactDOM.render(<Total value={321.123456}/>, div);
		const html = div.innerHTML;
		expect(html).toContain('>Total for this order: $321.12<');
		ReactDOM.unmountComponentAtNode(div);
	});
});
