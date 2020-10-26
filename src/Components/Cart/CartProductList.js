import React from 'react'
import { keys } from 'lodash'
import productsData, { getProductsMap } from '../../App/Main/Products/productsData'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart,
    productsMap = getProductsMap(productsData),
    CartItem = CartProductListItem,
    removeProductFromCart,
    changeProductCount
}) => {
    return (
        <div>
            {
                keys(productsInCart).map((productId) => (
                    <CartItem
                        key={productId}
                        product={productsMap[productId]}
                        productCount={productsInCart[productId]}
                        removeProductFromCart={removeProductFromCart}
                        changeProductCount={changeProductCount}
                    />
                ))
            }
        </div>

    )
}

export default CartProductList