import React, { useState } from 'react';
import '../css-components/itemCount.css';
import imgKn94 from '../assets/img/kn94.jpg'
function ItemCount({ stock, inicial, onAdd }) {
    const [count, setCount] = useState(inicial);

    function PlusButton() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function MinusButton() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const estilo ={
        height: '200px',
        width: '350px',
    }

    return (
       <div className='cartContainer'>
           <div className='header'>
                <button onClick={() => (count <= stock) && onAdd() }> Agregar al carrito</button>
               <h5 className='action'>Remove all</h5>
           </div>
           <div className='cartItems'>
               <div className='image-box'>
                   <img src={imgKn94} alt="" style={estilo}/>
               </div>
               <div className='about'>
                   <h1 className='title'>Assault Rifle</h1>
                   <h3 className='subtitle'>KN - 44</h3>
                   <img src="" alt="" />
               </div>
               <div className='counter'>
                   <div onClick={() => PlusButton()} className='btn'>+</div>
                   <div readOnly value= {count} className='count'>{count}</div>
                   <div onClick={() => MinusButton()} className='btn'>-</div>
                </div>  
                
           </div>   
       </div>
    )
}

export default ItemCount