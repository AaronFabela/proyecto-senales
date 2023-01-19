import React from 'react'
import sobre from '../../assets/carta.jpg'
import './carta.css'
import { Link } from 'react-router-dom'

const CartaAbuelo = ({ id }) => {
  return (
    <div className='abuelo-carta'>
      <div className='sobre'>
        <img src={sobre} alt='sobre' style={{ height: '100px' }} />
      </div>
      <div className='boton'>
        <Link to={`/carta/${id}`} style={{ textDecoration: 'none' }}>
          <button className='enviar'>Ver Carta</button>
        </Link>
      </div>
    </div>
  )
}

export default CartaAbuelo
