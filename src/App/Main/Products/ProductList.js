import React from 'react'
import ProductListItem from './ProductListItem'
import productsData from './productsData'

const ProductList = () => {
    return (
        <div className="product-list">
            <h1 className="page-title">Product List</h1>
            <div className="row">
            {
                productsData.map((product)=>(
                <div className="col-lg-6">
                    <ProductListItem
                        name={"iPhone X"}
                        description="This is iPhone X"
                        type="phone"
                        capacity="256"
                        price="1500"
                    />
                </div>
                ))
                    
                }
            </div>
        </div>
    )
}

export default ProductList