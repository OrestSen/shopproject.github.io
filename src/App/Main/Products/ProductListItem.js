import React from 'react'
import './ProductListItem.css'

const ProductListItem = (props) => {
    return (
        <div className="product-list-item">
            <div className="product-title">{props.name}</div>
            <div className="product-description">This is iPhone X</div>
            <div className="product-features">Type: phone</div>
            <div className="product-features">Capacity: 64 Gb</div>
            <div className="product-price">$ 500</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>  
    )
}


export default ProductListItem