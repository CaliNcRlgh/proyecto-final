import React from 'react'
import ItemCount from './itemCount'
function ItemListContainer(props) {

    function dummy(){
        console.log('dummy prop function')
    }

  return (
    <div>
        <ItemCount inicial={0} stock={5} onAdd={dummy} />
    </div>
  )
}

export default ItemListContainer