import React from 'react'
import { keys } from 'lodash'
import './cart.css'
import productsData, { getProductsMap } from '../../Main/Products/productsData'
import { Link } from 'react-router-dom'
import CartTotal from '../../../Components/Cart/CartTotal'

const Cart = ({
    productsMap=getProductsMap(productsData),
    productsInCart

}) => {
    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map((productId) => (
                    <div key={productId}>{productsMap[productId].name}:{productsInCart[productId]}</div>
                ))
            }
            <CartTotal
                productsInCart={productsInCart}
            />
            <Link to="/cart">Show cart</Link>
        </div>
    )
}

export default Cart