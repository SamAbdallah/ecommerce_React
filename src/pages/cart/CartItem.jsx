import React from 'react'
import { ShopContext } from '../../context/shopContext'
import { useContext } from 'react'

import "./cart.css"
function CartItem(props) {
    const{id,productName,price,productImage}=props.data  
    const{cartItems,addToCart,removeCart,updateCartItemCount}=useContext(ShopContext)

  return (
    <div className='cartItem'>
        <img src={productImage}/>
        <div className='description'>
        <p><b>{productName}</b></p>
        <p><b>{price}$</b></p>
        <div className='countHandler'>
            <button onClick={()=>removeCart(id)} >-</button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
            <button onClick={()=>addToCart(id)}>+</button>
        </div>

        </div>
    </div>
  )
}

export default CartItem