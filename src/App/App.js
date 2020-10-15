import React, { Component } from 'react'

import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const arr = [1,2,3]
const num = [...arr,4,5,6]
console.log(num)
class App extends Component {

	state = {
		productsInCart: {
			1: 1,
			2: 1,
		}
	}

	addProductToCart = (productId, count) => {
		this.setState((prevState) => ({
			productsInCart: Object.assign({}, prevState.productsInCart, {
				[productId]: (prevState.productsInCart[productId] || 0) + count
			})
		}))
	}

	render() {
		return (
			<>

				<Header
					productsInCart={this.state.productsInCart}
				/>
				<Main
					addProductToCart={this.addProductToCart}
				/>
				<Footer />
			</>
		)
	}
}

export default App