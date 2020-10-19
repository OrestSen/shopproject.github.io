import React from 'react'
import { keys } from 'lodash'
import productsData, { getProductsMap } from '../../App/Main/Products/productsData'

const CartTotal = ({
    productsMap = getProductsMap(productsData),
    productsInCart
}) => {
    return (
        <div>
            Total : {
                keys(productsInCart).reduce((total, productId) => {
                    return (total + (productsMap[productId].price * productsInCart[productId]))
                }, 0)
            }$
        </div>
    )
}

export default CartTotal