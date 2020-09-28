import React from 'react'
import './ProductListItem.css'

const ProductListItem = () => {
    return (
        <div className="product-list-item">
            <div className="product-title">iPhone X </div>
            <div className="product-description">This is iPhine X</div>
            <div className="product-features">Type: phone</div>
            <div className="product-features">Capacity: 64 Gb</div>
            <div className="product-price">$ 500</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

export default ProductListItem