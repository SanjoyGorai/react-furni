import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar ">
                <ul className="nav navbar-nav gap-5 font-semibold bg-sky-500  ">
                    <li className=""><Link to="/" >Home</Link></li>
                    <li><Link to="shop">Shop page</Link></li>
                    <li><Link to="singleproduct">Single product</Link></li>
                    <li><Link to="cart">Cart</Link></li>
                    <li><Link to="checkout">Checkout</Link></li>
                    <li><Link to="category">Category</Link></li>
                    <li><Link to="others">Others</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar