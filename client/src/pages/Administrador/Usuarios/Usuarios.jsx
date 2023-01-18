import React, { useState, useEffect } from 'react'
import adoptadoresService from '../../../services/adoptadores.service'
import TablaCasas from './components/TablaCasas'

const headers = ['#', 'Nombre', 'Email', 'Accion']

const Usuarios = () => {
  const [adoptadores, setAdoptadores] = useState([])
  const [search, setSearch] = useState('')
  let elementos

  useEffect(() => {
    adoptadoresService.getAdoptadores().then(
      (response) => {
        setAdoptadores(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  if (!search) {
    elementos = adoptadores
  } else {
    elementos = adoptadores.filter((e) =>
      e.usuario.toLowerCase().includes(search.toLocaleLowerCase())
    )
  }
  return (
    <>
      <div className='row'>
        <h1>Casas 🏘️</h1>
        <TablaCasas
          headers={headers}
          data={elementos}
          input={
            <input
              value={search}
              onChange={handleSearch}
              type='text'
              placeholder='Buscar por nombre de casa'
              className='form-control'
            />
          }
          type='usuarios'
        />
      </div>
    </>
  )
}

export default Usuarios
