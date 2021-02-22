import React from 'react'
import './style.css'

export default function Checkout({id="modal", onClose=()=>{}, cashback}) {

  const handleOutsideContainer =(e) =>{
    if(e.target.id===id){
      onClose();
    }
  }
  const getCashback = (cashback * 0.06).toFixed(2)
  return (
    <div id={id} className="modal" onClick={handleOutsideContainer}>
      <div className="modal__container">
        <button className="modal__close" onClick={onClose}>X</button>
        <div className="modal__content">
          <img className="modal__img" src="/check-circle-regular.svg" alt="Check"/>
          <h2>Obrigado!!</h2>
          <h3>Você ganhou de volta</h3>
          <span>R$ {getCashback}</span>
        </div>
      </div>
    </div>
  )
}
