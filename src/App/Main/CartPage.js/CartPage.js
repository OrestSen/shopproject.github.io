import React from 'react'
import { keys } from 'lodash'
import productsData, { getProductsMap } from '../Products/productsData'
import CartTotal from '../../../Components/Cart/CartTotal'


const CartPage = ({
    productsMap = getProductsMap(productsData),
    productsInCart

}) => {
    return (
        <>
            <h1 className="page-title">Cart Page</h1>
            {
                keys(productsInCart).map((productId) => (
                    <div key={productId}>{productsMap[productId].name}:{productsInCart[productId]}: price for one items - {productsMap[productId].price}</div>
                ))
            }
            <CartTotal
                productsInCart={productsInCart}
            />

        </>
    )
}

export default CartPage