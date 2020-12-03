import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'

const Cart = ({
    productsInCart,
    products
}) => {
    return (
        <div className="cart text-center">
            <CartProductList
                products={products}
                productsInCart={productsInCart}
            />
            <CartTotal
                productsInCart={productsInCart}
                products={products}
            />
            <Link to="/cart">Show cart</Link>
        </div>
    )
}

export default Cart