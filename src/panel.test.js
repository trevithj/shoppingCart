import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './panel';

describe('Panel', () => {
	const div = document.createElement('div');

	it('renders with default title', () => {
		ReactDOM.render(<Panel />, div);
		expect(div.innerHTML).toContain('The Panel</h3>');
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders with supplied title', () => {
		const testTitle = 'xx'+Math.random();
		ReactDOM.render(<Panel title={testTitle} />, div);
		expect(div.innerHTML).toContain(`${testTitle}</h3>`);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders passed children', () => {
		ReactDOM.render(<Panel><p>abc</p><p>xyz</p></Panel>, div);
		const html = div.innerHTML;
		expect(html).toContain('<p>abc</p>');
		expect(html).toContain('<p>xyz</p>');
		ReactDOM.unmountComponentAtNode(div);
	});
})
