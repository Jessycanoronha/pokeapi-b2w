import React, {useState, useEffect} from 'react'
import Card from '../../components/Card'
import Cart from '../../components/Cart'
import Header from '../../components/Header'
import './style.css'

export default function Store() {
  const path = (window.location.pathname).replace("/", "");
  const [pokemon, setPokemon] = useState([]);
  const [pokemonFiltered, setPokemonFiltered] = useState([])
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartItens"))||[]);

  useEffect(()=>{
    async function getStore(){
      const response = await fetch(`https://pokeapi.co/api/v2/type/${path}`);
      const dataAPI = await response.json();
      setPokemonFiltered(dataAPI.pokemon)
      setPokemon(dataAPI.pokemon);
      console.log(dataAPI);

    }
    getStore();
  }, [path])

  
  const insertCart = (name, price, image)=>{
    const novo={
      name:name,
      price: price,
      img: image,
    }
    setCart([...cart,novo])
  }
  localStorage.setItem("cartItens", JSON.stringify(cart))
  
  const handleChangeInput = (value)=>{
    const filteredPokemon = pokemon.filter(poke  =>{
      return poke.pokemon.name.toLowerCase().includes(value.toLowerCase())
    })
    setPokemonFiltered(filteredPokemon)
  }
  return (
    <>
    <Header handleChange={handleChangeInput} color={path}/>
    <div className="store">
      <div className='itens'>
        {
          pokemonFiltered.map(item => 
            <Card key={item.pokemon.name} pokemon={item.pokemon} 
              addCart={insertCart} color={path}/>)
        }
      </div>
      <Cart products={cart} onFinish={()=> setCart([])}/>
    </div>
    </>
  )
}
