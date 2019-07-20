import React from 'react';
import './App.css';

const panelStyle = {
	position: 'absolute',
	top: 0,
	backgroundColor: '#ddd'
};

const Panel = props => (
	<div
		className="App-panel"
		style={{...panelStyle, ...props.style}}>
			<h3>{props.title}</h3>
			{props.children}
	</div>
);
Panel.defaultProps = {
	title: 'The Panel',
	style: {},
};

export default Panel;
