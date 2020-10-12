import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'

class ProductListItem extends Component {

    state = {
        productCount: 1,
        color: "green",
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount + 1
        }))
    }
    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount - 1
        }))
    }

    // onChangeColor = () => {
    //     const newColor = this.state.color == "green" ? "red" : "green";
    //     this.setState(() => ({
    //         color: newColor
    //     }))
    // }

    render() {
        const {
            id,
            name,
            description = "No description...",
            type,
            capacity,
            price,
            image = "/images/no-image.png",
            addProductToCart
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
                <div>Color:{this.state.color}</div>
                <button onClick={() => this.onChangeColor()}>
                    Change color</button>
                <div className="product-price">$ {price}</div>
                <div className="product-quantity">
                    <button
                        disabled={this.state.productCount <= 1}
                        onClick={() => this.onDecrementClick()}
                    >-</button>
                    <input type="text" value={this.state.productCount} readOnly />
                    <button
                        disabled={this.state.productCount >= 10}
                        onClick={() => this.onIncrementClick()}
                    >+</button>
                </div>
                <button className="btn-add-to-cart"
                    onClick={() => addProductToCart(this.state.productCount,price, id+':'+this.state.productCount)}
                >Add to cart</button>
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