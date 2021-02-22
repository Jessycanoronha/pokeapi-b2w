import React, {useState} from 'react'
import './style.css'

export default function Header({handleChange=[], color}) {
  const colorType = color;
  const [valueInput, setValueInput] = useState([]);
  
  const handleChangeInput = (e)=>{
    setValueInput(e.target.value)
  }
  const handleKeyDown = (e) =>{
    if(e.key==='Enter'){
      handleChange(valueInput);
    }
  }
  return (
    <div className={`header ${colorType}`}>
      <h1 className="header__title">PokeStore</h1>
      <input className="header__input" type="text" placeholder="Pesquisar" value={valueInput} onChange={handleChangeInput} onKeyDown={handleKeyDown}/>      
    </div>
  )
}
