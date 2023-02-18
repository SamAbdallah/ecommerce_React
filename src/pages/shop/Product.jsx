import React from 'react'
import "./shop.css"
import { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'


function Product(props) {
  const{id,productName,price,productImage}=props.data  
  const{addToCart,cartItems}=useContext(ShopContext)
  const cartItemsAmount=cartItems[id]

  return ( 
    <div className='product'>
        <img src={productImage}/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>{price}$</p>
            <p>{}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add to cart {cartItemsAmount>0 &&  <>({cartItemsAmount})</>}</button>
    </div>
  )
}

export default Product