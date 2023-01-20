import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Person2Icon from '@mui/icons-material/Person2'
import adoptadoresService from '../../../services/adoptadores.service'

const EnviarCarta = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const data = new FormData()
  const [imagen, setImagen] = useState({
    imagen: '',
  })
  const [carta, setCarta] = useState({
    titulo: '',
    contenido: '',
  })

  const handleChange = (e) => {
    setCarta({ ...carta, [e.target.name]: e.target.value })
  }
  const handleImage = (e) => {
    setImagen({ ...imagen, [e.target.name]: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    try {
      data.append('titulo', carta.titulo)
      data.append('contenido', carta.contenido)
      data.append('imagen', imagen.imagen)
      data.append('idAbuelo', id)

      await adoptadoresService.enviarCarta(data)
      navigate('/misAbuelos')
    } catch (err) {
      console.log(err)
    }
  }

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
                value={carta.usuario}
                onChange={(e) => handleChange(e)}
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
                value={carta.descripcion}
                onChange={(e) => handleChange(e)}
                required
              ></textarea>
              <hr />
              <label htmlFor='imagen' className='form-label'>
                <b>Adjunta una imagen</b>
              </label>
              <input
                class='form-control'
                type='file'
                name='imagen'
                id='imagen'
                onChange={(e) => handleImage(e)}
                accept='image/*'
              />
            </div>
          </div>
          <div class='d-grid gap-2 d-md-block'>
            <button
              className='btn btn-primary'
              type='button'
              onClick={(e) => handleSubmit(e)}
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

export default EnviarCarta
