import React from 'react'
import '../styles/Card.css'
import { Link } from 'react-router-dom'

const Card = ({ abuelo }) => {
  return (
    <div className='card-aaron'>
      <div className='imagen'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
          alt='avatar'
          class='rounded-circle img-fluid'
          style={{ width: '100px' }}
        />
      </div>
      <div className='contendio'>
        <h6>Nombre: {abuelo?.usuario}</h6>
        <h6>Descripcion: {abuelo?.descripcion}</h6>
      </div>
      <div className='botones'>
        <Link to={`/abuelos/${abuelo?._id}`} style={{ textDecoration: 'none' }}>
          <button className='aaron-btn'>Ver</button>
        </Link>
      </div>
    </div>
  )
}

export default Card
