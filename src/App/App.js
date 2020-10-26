import React, { Component } from 'react'
import {omit} from 'lodash'
import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'



class App extends Component {

	state = {
		productsInCart: {
			1: 1,
			2: 1,
		}
	}

	addProductToCart = (productId, count) => {
		this.setState((prevState) => ({
			productsInCart: {
				...prevState.productsInCart,
				[productId]: (prevState.productsInCart[productId] || 0) + count
			}
		}))
	}

	removeProductFromCart = (productId) => {
		this.setState((prevState) => ({
			productsInCart:omit(prevState.productsInCart,[productId])
			// let prevProductInCart = Object.assign({}, prevState.productsInCart)
			// let prevProductInCart = { ...prevState.productsInCart }
			// delete prevProductInCart[productId]
			// return {
			// 	productsInCart: prevProductInCart
			// }
		}))
	}

	changeProductCount = (productId,quantity) => {
		this.setState((prevState) => ({
			productsInCart:{
				...prevState.productsInCart,
				[productId]:quantity
			}
		}))
	}


	render() {
		return (
			<>
				<Header
					productsInCart={this.state.productsInCart}
				/>
				<button onClick={() => { this.removeProductFromCart(1) }}>Delete</button>
				<Main
					productsInCart={this.state.productsInCart}
					addProductToCart={this.addProductToCart}
					removeProductFromCart={this.removeProductFromCart}
					changeProductCount={this.changeProductCount}
				/>
				<Footer />
			</>
		)
	}
}

export default App
