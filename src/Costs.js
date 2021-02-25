import React from 'react'

const Costs = (props) => {
    const {shipping, subtotal, grandTotal, proceed} = props

    return (
        <div className='costs-container'>
           <div className='shipping flex-row-space-btw'>
                <p className='bold secondary-color'>SHIPPING</p> 
                <p className='bold secondary-color'>${shipping.toFixed(2)}</p>
           </div>
           <div className='cart-totals-container'>
               <div className='cart-totals bottom-line'>
                    <p className='bold secondary-color'>CART TOTALS</p>
               </div> 
               <div className='subtotal-grand-total'>
                    <div className='flex-row-space-btw subtotal bottom-line'>
                        <p className='bold'>Subtotal</p>
                        <p className='bold secondary-color'>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className='flex-row-space-btw grand-total'>
                        <p className='bold'>Grand Total</p>
                        <p className='bold secondary-color grand-total-cost'>${grandTotal.toFixed(2)}</p>
                    </div>
                    <div className='cart-totals-button-div'>
                        <button className='primary-button cart-totals-button bold' onClick={proceed}>Proceed to checkout</button>
                    </div>
               </div>  
           </div>
        </div>
    )
}
export default Costs