import React from 'react'
import productsData from './productsData'
import ProductListItem from './ProductListItem'

const ProductList = ({
    addProductToCart
}) => {
    return (
        <div className="product-list">
            <h1 className="page-title">Product List</h1>
            <div className="row">
                {
                    productsData.map(({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image
                    }) => (
                            <div className="col-lg-6" key={id}>
                                <ProductListItem
                                    name={name}
                                    description={description}
                                    type={type}
                                    capacity={capacity}
                                    price={price}
                                    image={image}
                                    addProductToCart={addProductToCart}
                                />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default ProductList
