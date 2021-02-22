import React, {useState, useEffect} from 'react'
import './style.css'

export default function Card({pokemon, addCart, color}) {
  const colorType = color;
  const [imagePokemon, setImagePokemon] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(()=>{
    async function getPokemon(){
      const response = await fetch(pokemon.url);
      const dataAPI = await response.json();
      const dataPrice = (dataAPI.id * 5.38).toFixed(2);
      setImagePokemon(dataAPI.sprites);
      setPrice(dataPrice);
    }
    getPokemon();
  }, [pokemon.url]);

  return (
    <div className= "card">
      <div className="card__body">
        <img className="card__img" 
             src={imagePokemon.front_default || '/no_photography-24px.svg'} 
             alt={pokemon.name}
        />
        <p> {pokemon.name}</p>
        <p> R$ {Number(price)}</p>
      </div>
      <div className="card__footer">
        <button className={`card__button ${colorType}`} 
                onClick={()=>addCart(pokemon.name, price, imagePokemon.front_default ||'/no_photography-24px.svg')}>
                  Adicionar ao Carrinho
        </button>
      </div>
    </div>
  )
}
