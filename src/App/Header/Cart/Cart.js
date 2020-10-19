import { func, number, object } from 'prop-types'
import React from 'react'
import { keys } from 'lodash'
import './cart.css'
import productsData from '../../Main/Products/productsData'
import { Link } from 'react-router-dom'
import CartPage from '../../Main/CartPage.js/CartPage'

const productsMap = productsData.reduce((obj, product) => ({
    ...obj,
    [product.id]: product,
}), {})


const Cart = ({
    productsInCart,

}) => {
    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map((productId) => (
                    <div key={productId}>{productsMap[productId].name}:{productsInCart[productId]}</div>
                ))
            }
            <div>
                Total : {
                    keys(productsInCart).reduce((total, productId) => {
                        return(total + (productsMap[productId].price * productsInCart[productId]))  
                    },0)
                }$
            </div>
            <Link to="/cart">Show cart</Link>
        </div>
    )
}

export default Cart