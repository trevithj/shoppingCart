import React, { useState } from 'react';
import products from './products';
import { fetchCart, saveCart } from './api';
import logo from './logo.svg';
import './App.css';

const panelStyle = {
	position: 'absolute',
	top: 0,
	width: '48%',
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
