import { func, number, object } from 'prop-types'
import React from 'react'
import { keys } from 'lodash'
import './cart.css'
import productsData from '../../Main/Products/productsData'

const productsMap = productsData.reduce((obj,product)=>({
    ...obj,
    [product.id]:product,
}),{})


const Cart = ({
    productsInCart
}) => {
    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map((productId) => (
                    <div key={productId}>{productsMap[productId].name}:{productsInCart[productId]}</div>
                ))			
            }
            
        </div>
    )
}

export default Cart