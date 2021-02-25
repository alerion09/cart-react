import React, { useState, useEffect } from 'react'
import Header from './Header'
import Costs from './Costs'
import cartProductsData from './data/cart_products.json'
import Cart from './Cart'
import productsData from './data/products.json'


const App = () => {
    const [products, setProducts]  = useState(productsData)
    const cartProducts = cartProductsData

    const [isSubmit, setIsSubmit] = useState(false)
    const [cart, setCart] = useState(cartProducts)
    const [shipping, setShipping] = useState(23.80)
    const [subtotal, setSubtotal] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)
    

    const addProduct = (id) => {
        const product = cart.find((obj) => obj.productId === id)
        setCart(
            cart.map((item) => 
            item.productId === id ? {...product, quantity: product.quantity + 1} : item)
        )
    }
    const removeProduct = (id) => {
        const product = cart.find((obj) => obj.productId === id)
        setCart(
            cart.map((item) => 
            item.productId === id && product.quantity >1 ? {...product, quantity: product.quantity -1} : item)
        )
    }
    const updateShoppingCart = () => {
            setSubtotal(0)
            cart.map((obj) => 
                products.find((item) => 
                        obj.productId === item.id && setSubtotal(prev => prev+ (item.price * obj.quantity))
                )
            )
    }
    const deleteProduct = (id) => {
        products.find((item) =>
            item.id === id && setProducts(products.filter((obj)=> obj.id !== id))
        )
        clearCosts()
    }
    const clearCosts = () => {
        setSubtotal(0)
    }
    const proceed = () => {
        setIsSubmit(!isSubmit)
    }
    useEffect(()=> {
        subtotal > 100 ? setShipping(0) : setShipping(23.80)
        setGrandTotal(subtotal + shipping)
    })

    if (isSubmit) {
        return (
            <div className='container'>
                <main>
                    <div className='ending-text'>
                        <p>Your order has been submitted successfully</p>
                    </div>
                </main>
            </div> 
        )
    }
    else {
        return (
            <div className='container'>
                <main>
                    <Header proceed={proceed}/>
                    <div className='cart-costs-container'>
                        <Cart products={products} cart={cart} addProduct={addProduct} removeProduct={removeProduct} updateShoppingCart={updateShoppingCart} deleteProduct={deleteProduct}/>
                        <Costs shipping={shipping} subtotal={subtotal} grandTotal={grandTotal} proceed={proceed}/>   
                    </div>
                </main>
            </div> 
        )
    }
    
}
export default App