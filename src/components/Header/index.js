import React, { useState } from 'react'
import './style.css'
import imageLogo from '../../images/pokemon-logo.png'
import {Link} from 'react-router-dom';



export default function Header({ handleChange = [], color }) {
  const colorType = color;
  const [valueInput, setValueInput] = useState([]);

  const handleChangeInput = (e) => {
    setValueInput(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleChange(valueInput);
    }
  }
  return (
    <div className={`header ${colorType}`}>
      <Link to='./'>
        <img className="header__logo" src={imageLogo} />
      </Link>
      <input className="header__input" type="text" placeholder="Pesquisar" value={valueInput} onChange={handleChangeInput} onKeyDown={handleKeyDown} />
    </div>
  )
}
