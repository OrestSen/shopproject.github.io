import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'

class ProductListItem extends Component {

    state = {
        productCount: 1,
    }

    onIncrementClick() {
        console.log(this)
        this.setState((prevState) => ({
            productCount: prevState.productCount + 1
        }))
    }

    render() {
        const {
            name,
            description = "No description...",
            type,
            capacity,
            price,
            image = "/images/no-image.png"
        } = this.props;
        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}</div>
                <div className="product-price">$ {price}</div>
                <div className="product-quantity">
                    <button>-</button>
                    <input type="text" value={this.state.productCount} readOnly />
                    <button
                        onClick={this.onIncrementClick.bind(this)}
                        >+</button>
                </div>
                <button className="btn-add-to-cart">Add to cart</button>
            </div>
        )
    }
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}

export default ProductListItem