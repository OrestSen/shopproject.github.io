import React from 'react'
import productsData, { getProductsMap } from '../../App/Main/Products/productsData'
import { keys } from 'lodash'

const CartProductList = (
    productsMap = getProductsMap(productsData),
    productsInCart
) => {
    return (
        <div>
            {
                keys(productsInCart).map((productId) => (
                    <div key={productId}>{productsMap[productId].name}:{productsInCart[productId]}</div>
                ))
            }
        </div>

    )
}

export default CartProductList