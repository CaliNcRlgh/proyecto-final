import React from 'react'
import { IconContext } from 'react-icons'
import { FaShoppingCart } from 'react-icons/fa'
const CartWidget = () => {
  return (
    <IconContext.Provider value = {{size: 40}} >
      <div className='cartWidget'>
          <p className='cart'><a href="#"><FaShoppingCart/></a></p>
      </div>
    </IconContext.Provider>
  )
}

export default CartWidget