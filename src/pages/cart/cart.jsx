import React from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shopContext'
import CartItem from './CartItem'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const{cartItems,getTotalAmount}=useContext(ShopContext)
  const totalAmount=getTotalAmount()
  const navigate=useNavigate()
  return ( 
    <div className='cart'>
      <h1>Your cart Items</h1>
      <div className='cartItems'>
      {PRODUCTS.map((product)=>{if(cartItems[product.id]!==0){
        return <CartItem data={product}/>
      }})}
      </div>
      {totalAmount>0 ?
      <div className='checkout'>
        
        <p>Subtotal: {totalAmount}$</p>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
:<h1>Your cart is empty</h1>}
    </div>
  )
}

export default Cart