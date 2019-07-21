import React from 'react';
import './App.css';

export const format = (num) => {
	return num.toLocaleString('nz', {
		style:'decimal',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
};


export const Name = props => (
	<div style={{fontWeight: 'bold', fontSize: 20, lineHeight: 1.5 }}>
		{props.children}
	</div>
);

export const Fixed = props => (
	<div style={{
			display: 'inline-block',
			width: props.width,
			textAlign: props.align,
			backgroundColor: 'white',
		}}>
		{props.children}
	</div>
);
Fixed.defaultProps = { width: '100%', align: 'right' };

export const Product = props => {
	const { name, price } = props.product;
	return (
		<div className="product">
			<Name>{name}</Name>
			<Fixed width="50%">${ format(price) }</Fixed>
			<Fixed width="50%">
				<button onClick={() => props.onClick(props.product)}>
					Add to cart
				</button>
			</Fixed>
		</div>
	);
};

export const CartItem = props => {
	const { name, price, quantity } = props.item;
	return (
		<div className="product">
			<Fixed width="70%" align="left">
				<Name>{name}</Name>
			</Fixed>
			<Fixed width="30%">
				<button onClick={() => props.onClick(props.item)}>
					Remove
				</button>
			</Fixed>
			<Fixed width="50%">
				Units: {quantity} @ ${ format(price) }
			</Fixed>
			<Fixed width="50%">
				Line total: ${ format(price * quantity) }
			</Fixed>
		</div>
	);
};

export const Total = props => (
	<Fixed>
		<div style={{
			borderTop: 'solid thin black',
			fontSize: 16,
			lineHeight: 2,
			paddingRight: 10,
		}}>
			Total for this order: ${format(props.value)}
		</div>
	</Fixed>
);

