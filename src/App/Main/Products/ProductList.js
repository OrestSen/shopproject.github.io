import React from 'react'
import ProductListItem from './ProductListItem'

const ProductList = () => {
    return (
        <div className="product-list">
            <h1 className="page-title">Product List</h1>
            <div className="row">
                <div className="col-lg-6">
                    <ProductListItem 
                        name="iPhone X"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem 
                        name="iPhone XS"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem 
                        name="iPhone 8 plus"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem 
                        name="iPhone 8"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductList