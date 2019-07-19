export const fetchCart = () => {
	const sCart = localStorage.getItem('cart');
	return sCart ? JSON.parse(sCart) : [];
};

export const saveCart = cart => {
	localStorage.setItem(JSON.stringify(cart));
}
