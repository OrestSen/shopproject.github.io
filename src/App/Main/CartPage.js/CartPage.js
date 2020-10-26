import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductCount

}) => {
    return (
        <>
            <h1 className="page-title">Cart Page</h1>
            <CartProductList
                removeProductFromCart={removeProductFromCart}
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
                changeProductCount={changeProductCount}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
        </>
    )
}

export default CartPage