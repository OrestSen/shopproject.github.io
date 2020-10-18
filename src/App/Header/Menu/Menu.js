import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from './menu.css'
import './menu.css'

const Menu = () => {
    return (
        <div className="menu" >
            <ul>

                <li ><a href="/" ><Link to="/" style={{ textDecoration: 'none', color: '#3366cc' }}>Home</Link></a></li>

                <li><Link to="/"><a href="/" style={{ textDecoration: 'none', color: '#3366cc' }}>Products</a></Link></li>

                <li><Link to="/"><a href="/" style={{ textDecoration: 'none', color: '#3366cc' }}>Payment</a></Link></li>

                <li><Link to="/"><a href="/" style={{ textDecoration: 'none', color: '#3366cc' }}>Shipping</a></Link></li>

            </ul>
        </div>
    )
}
export default Menu