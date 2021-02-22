import React from 'react'
import {Link} from 'react-router-dom';
import './style.css'
import Header from '../../components/Header'


export default function Home() {
  return (
    <>
    <Header/>
      <div className="home__title">
          <Link to='/fire'><button className="home__button">Fire</button> </Link>
          <Link to='/water'><button className="home__button">Water</button></Link>
          <Link to='/normal'><button className="home__button">Normal</button></Link>
          <Link to='/fighting'><button className="home__button">Fighting</button></Link>
          <Link to='/flying'><button className="home__button">Flying</button></Link>
          <Link to='/poison'><button className="home__button">Poison</button></Link>
          <Link to='/ground'><button className="home__button">Ground</button></Link>
          <Link to='/rock'><button className="home__button">Rock</button></Link>
          <Link to='/bug'><button className="home__button">Bug</button></Link>
          <Link to='/ghost'><button className="home__button">Ghost</button></Link>
      </div>
    </>
  )
}
