import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Person2Icon from '@mui/icons-material/Person2'
import abuelosService from '../../../../services/abuelo.service'

const RegistroAbueloForm = ({id}) => {
  const navigate = useNavigate()
  const data = new FormData()
  const [imagen, setImagen] = useState({
    imagen: '',
  })
  const [solicitud, setSolicitud] = useState({
    usuario: '',
    edad: '',
    descripcion: '',
  })

  const handleChange = (e) => {
    setSolicitud({ ...solicitud, [e.target.name]: e.target.value })
  }
  const handleImage = (e) => {
    setImagen({ ...imagen, [e.target.name]: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    try {
      data.append('usuario', solicitud.usuario)
      data.append('edad', solicitud.edad)
      data.append('descripcion', solicitud.descripcion)
      data.append('imagen', imagen.imagen)
      data.append('idCasa', id)

      await abuelosService.registrarAbuelo(data)
      navigate('/abuelos')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className='card text-center'>
        <h5 className='card-header card-title'>Registrar Abuelo</h5>
        <div className='card-body'>
          <div className='container overflow-hidden text-center'>
            <div className='row gy-5'>
              <div className='col-6'>
                <div className='p-3 border bg-light info'>
                  <label className='info-label' htmlFor='usuario'>
                    Nombre
                  </label>
                  <input
                    type='text'
                    id='usuario'
                    name='usuario'
                    className='form-control'
                    value={solicitud.usuario}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className='col-6'>
                <div className='p-3 border bg-light info'>
                  <label className='info-label' htmlFor='edad'>
                    Edad
                  </label>
                  <input
                    type='number'
                    id='edad'
                    name='edad'
                    className='form-control'
                    value={solicitud.edad}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className='row gy-5'>
              <div className='col-6'>
                <div className='p-3 border bg-light info'>
                  <label className='info-label' htmlFor='descripcion'>
                    Descripción
                  </label>
                  <textarea
                    className='form-control'
                    name='descripcion'
                    cols='50'
                    rows='10'
                    placeholder='Redacta una breve descripción de la persona'
                    value={solicitud.descripcion}
                    onChange={(e) => handleChange(e)}
                    required
                  ></textarea>
                </div>
              </div>
              <div className='col-6'>
                <div className='p-3 border bg-light info'>
                <label htmlFor='imagen' class='form-label'>
                  Foto de Perfil
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
            </div>
          </div>
          <div class="d-grid gap-2 d-md-block">
						<button
              className='btn btn-primary'
              type='button'
              onClick={(e) => handleSubmit(e)}
            >
              Finalizar Registro
              <Person2Icon className='icon' />
            </button>
					</div>
        </div>
      </div>
    </>
  )
}

export default RegistroAbueloForm
