import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
const CartWidget = () => {
  return (
    <div className='cartWidget'>
        <p className='cart'><a href="#"><FaShoppingCart/></a></p>
    </div>
  )
}

export default CartWidget