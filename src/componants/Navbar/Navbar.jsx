import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar ">
                <ul className="nav navbar-nav gap-5 font-semibold bg-sky-500  ">
                    <li className=""><Link to="/">Home</Link></li>
                    <li><Link href="shop">Shop page</Link></li>
                    <li><Link href="">Single product</Link></li>
                    <li><Link href="">Cart</Link></li>
                    <li><Link href="">Checkout</Link></li>
                    <li><Link href="">Category</Link></li>
                    <li><Link href="">Others</Link></li>
                    <li><Link href="">Contact</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar