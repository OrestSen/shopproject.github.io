import React from 'react'
import { keys } from 'lodash'
import productsData from '../Products/productsData'

const productsMap = productsData.reduce((obj, product) => ({
    ...obj,
    [product.id]: product,
}), {})

const CartPage = ({
    productsInCart,
}) => {
    return (
        <>
            <h1 className="page-title">Cart Page</h1>
            {
                keys(productsInCart).map((productId) => (
                    <div key={productId}>{productsMap[productId].name}:{productsInCart[productId]}: price for one items - {productsMap[productId].price}</div>
                ))
            }
            <div>
                Total : {
                    keys(productsInCart).reduce((total, productId) => {
                        return (total + (productsMap[productId].price * productsInCart[productId]))
                    }, 0)
                }$
            </div>

        </>
    )
}

export default CartPage