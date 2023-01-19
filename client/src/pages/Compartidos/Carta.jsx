import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Person2Icon from '@mui/icons-material/Person2'
import cartasService from '../../services/carta.controller'
import { useEffect } from 'react'
// import adoptadoresService from '../../../services/adoptadores.service'

const Carta = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [carta, setCarta] = useState([])

  useEffect(() => {
    cartasService.getCartaId(id).then(
      (response) => {
        console.log(response.data)
        setCarta(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [id])

  return (
    <>
      <div className='card text-center'>
        <h5 className='card-header card-title'>Enviar carta a Abuelo</h5>
        <div className='card-body'>
          <div className='container overflow-hidden text-center'>
            <div className='p-3 border bg-light info'>
              <label className='info-label' htmlFor='titulo'>
                Título
              </label>
              <input
                type='text'
                id='titulo'
                name='titulo'
                className='form-control'
                value={carta?.usuario}
                disabled
              />
            </div>
            <div className='p-3 border bg-light info'>
              <label className='info-label' htmlFor='contenido'>
                Contenido
              </label>
              <textarea
                className='form-control'
                name='contenido'
                cols='50'
                rows='10'
                placeholder='Redacta una breve descripción de la persona'
                value={carta?.descripcion}
                required
                disabled
              ></textarea>
              <hr />
              <label htmlFor='imagen' className='form-label'>
                <b>Adjunta una imagen</b>
              </label>
            </div>
          </div>
          <div class='d-grid gap-2 d-md-block'>
            <button
              className='btn btn-primary'
              type='button'
              // onClick={(e) => handleSubmit(e)}
            >
              Enviar Carta
              <Person2Icon className='icon' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carta
