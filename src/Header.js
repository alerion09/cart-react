import React from 'react'

const Header = (props) => {
    const {proceed} = props
    return (
        <header>
            <p className='header-title'>shopping cart</p>
            <button className='primary-button' onClick={proceed}>Proceed to checkout</button>
        </header>
    )
}
export default Header