import React from 'react'
import './H.css'
import { Link } from 'react-router-dom'
import ima from '../../../assets/betti.png'

const Home = () => {
  return (
    <div className='big-contenedor'>
      <div className='home-header'>
        <div>
          <p>Adopta.me</p>
        </div>
        <div className='accciones'>
          <p>Home</p>
          <Link to={`/login`} style={{ textDecoration: 'none' }}>
            <button className='btn-login'>Login</button>
          </Link>
        </div>
      </div>
      <div className='home-hero'>
        <div className='home-descripcion'>
          <div className='hero-cont'>
            <h4>Una ayuda para los que nos vieron crecer</h4>
            <p>Se parte de este proyecto y cambiemos la vida de un abuelo</p>
          </div>
        </div>
      </div>
      <div className='cartas'>
        <div className='cartas-contenido'>
          <div className='carta-imagen'></div>
          <div className='carta-contenido2'>
            <h4>
              Súmate a la causa y regalemos una sonrisa a nuestros abuelitos
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
