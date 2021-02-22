import React from 'react'
import './style.css'

export default function CartItem({info}) {
  return (
    <div className='cartItem'>
      <img className='cartItem__img' src={info.img} alt="Pokemon"/>
      <p>{info.name}</p>
      <p>R$ {info.price}</p>
    </div>
  )
}
