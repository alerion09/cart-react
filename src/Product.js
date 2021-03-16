import React from 'react'

const Product = (props) => {
    const {quantity, image, id, name, price, addProduct, removeProduct, updateShoppingCart, deleteProduct} = props

    return (
        <>
            <div className='grid-4 grid-second-row bottom-line'>
                <input type='image' src={'https://raw.githubusercontent.com/alerion09/data/main/x-img.png'} alt="Delete product" onClick={() => deleteProduct (id)}/>
            </div>
            <div className='grid-5 grid-second-row bottom-line'>
                <img className='product-img' src={`https://raw.githubusercontent.com/alerion09/data/main/`+ image } alt="Headphones"/>   
            </div>
            <div className='grid-6 grid-second-row bottom-line'><p>{name}</p></div>
            <div className='grid-7 grid-second-row bottom-line'><p>${price.toFixed(2)}</p></div>
            <div className='grid-8 grid-second-row bottom-line'>
                <div className='qty-select'>
                    <button onClick={()=>removeProduct(id)}>-</button>
                    <input type="text" placeholder={quantity}/>
                    <button onClick={()=>addProduct(id)}>+</button>
                </div>
                <div>
                    <input type='image' src={'https://raw.githubusercontent.com/alerion09/data/main/edit-img.png'} alt="Edit" onClick={updateShoppingCart}/>
                </div>    
            </div>
        </>
    )
}
export default Product