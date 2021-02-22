import React, {useState} from 'react'
import Checkout from '../Checkout'
import CartItem from '../CartItem'
import './style.css'

export default function Cart({products, onFinish=()=>{}}) {
  const [visible, setVisible] = useState(false);
  const [price, setPrice] = useState(0);

  const totalPrice = products.map(product => Number(product.price))
    .reduce((acc, curr) => acc+curr,0)

  const finish = () =>{
    onFinish();
    setVisible(true)
    setPrice(totalPrice)
  }
  return (
    <div className="cart">
      <h2 className="cart__title">Carrinho</h2>
      <div className="cart__body">
        {
          products.map((product) =><CartItem key={product.name} info={product}/>) 
        }
      </div>
      <div className="cart__footer">
        <div className="cart__price">
          <p>Total</p>
          <p>R${totalPrice.toFixed(2)}</p>
        </div>
        <button className="cart__button" onClick={()=> finish()}>Finalizar</button>
        {visible ? <Checkout  cashback={price} onClose={()=>{setVisible(false)}}/> : null}
      </div>
    </div>
  )
}
