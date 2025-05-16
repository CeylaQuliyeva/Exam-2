import React from 'react'
import { NavLink } from 'react-router'
import '../CSS/Navbar.css'

function Navbar() {
    return (
        <>
            <div className='contact'>
                <div>+ 1235 2355 98</div>
                <div> youremail@email.com</div>
                <div>3-5 Business days delivery & Free Returns</div>
            </div>
            <div className='navbar'>
                <div className='nav'>Vegefoods</div>
                <div className='navLink'>
                    <div><NavLink to="/" >Home</NavLink></div>
                    <div><NavLink to="/admin" >Admin</NavLink></div>
                    <div><NavLink to="/adminAdd" >AdminAdd</NavLink></div>
                    <div><NavLink to="/favorite" >Favorite</NavLink></div>
                    <div><NavLink to="/basket" >Basket</NavLink></div>
                </div>
            </div>

        </>
    )
}

export default Navbar