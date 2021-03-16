import React from 'react'


import Product from './Product'
const Cart = (props) => {
    const {products, cart, addProduct, removeProduct, updateShoppingCart, deleteProduct } = props

    return (
        <div className='cart-container'>
            <div className='empty-div padding-bt bottom-line'>&#160;</div>
            <div className='empty-div padding-bt bottom-line'>&#160;</div>
            <div className='grid-1 bottom-line padding-bt'>
                <p className='bold '>Product Name</p>
            </div>
            <div className='grid-2'>
                <p className='bold bottom-line padding-bt'>Unit price</p>
            </div>
            <div className='grid-3'>
                <p className='bold bottom-line padding-bt'>Qty</p>
            </div>
            {products.map((item) => {
                const quantity = cart.filter(obj => obj.productId === item.id).map(obj => obj.quantity)
                return <Product quantity={quantity} key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} 
                addProduct={addProduct} removeProduct={removeProduct} updateShoppingCart={updateShoppingCart} deleteProduct={deleteProduct} />
            })}
            <div className='grid-9'>
                <button className='primary-button bold' onClick={updateShoppingCart}>Update Shopping Cart</button> 
            </div>
        </div>
    )
}
export default Cart