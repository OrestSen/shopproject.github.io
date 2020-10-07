import React, { Component } from 'react'

import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

	state = {
		cartData: {
			count: 10,
			price: 10,
		}
	}

	addProductToCart(count, price) {
		this.setState((prevState) => ({
			cartData: {
				count: prevState.cartData.count + count,
				price: prevState.cartData.price + (price * count)
			}
		}))
	}

	render() {
		return (
			<>
				<Header
					cartData={this.state.cartData}
				/>
				<button onClick={() => this.addProductToCart(5, 500)}>
					Add to Cart
					</button>
				<Main 
					addProductToCart
				/>
				<Footer />
			</>
		)
	}
}

export default App