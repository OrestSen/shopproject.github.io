import React from 'react'
import ProductList from './Products/ProductList'
import { Route } from 'react-router-dom'
import CartPage from './CartPage.js/CartPage'
import Payment from './PaymentPage.js/PaymentPage'
import ShippingPage from './ShippingPage.js/ShipingPage'


const Main = ({
	addProductToCart
}) => {
	return (
		<main className="main">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						Filter
        			</div>
					<div className="col-lg-9">
						<Route path="/" exact render={() => (
							<ProductList
								addProductToCart={addProductToCart}
							/>
						)} />
						<Route path="/cart" component={CartPage} />
						<Route path="/payment" component={Payment} />
						<Route path="/shipping" component={ShippingPage} />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main