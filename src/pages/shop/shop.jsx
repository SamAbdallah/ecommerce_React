import React from 'react'
import "./shop.css"
import { PRODUCTS } from '../../products'
import Product from './Product'

function Shop() {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Sam's Shop</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product)=><Product data={product}/>)}
      </div>
    </div>
  )
}

export default Shop