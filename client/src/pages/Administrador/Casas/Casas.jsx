import React, { useState, useEffect } from 'react'
import casasService from '../../../services/casas.service'
import TablaCasas from './components/TablaCasas'

const headers = ['#', 'Nombre', 'Teléfono', 'Email', 'Accion']

const Casas = () => {
  const [casas, setCasas] = useState([])
  const [search, setSearch] = useState('')
  let elementos

  useEffect(() => {
    casasService.getCasas().then(
      (response) => {
        setCasas(response.data)
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
    elementos = casas
  } else {
    elementos = casas.filter((e) =>
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
          type='casas'
        />
      </div>
    </>
  )
}

export default Casas
