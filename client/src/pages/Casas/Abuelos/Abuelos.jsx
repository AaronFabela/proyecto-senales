import React from 'react'
import ListaCard from '../../../components/ListaCard'
import Card from '../../../components/Card'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'
import { useState } from 'react'
import { useEffect } from 'react'
import casasService from '../../../services/casas.service'
import './styles/Abuelos.css'

const Abuelos = () => {
  const { auth } = useContext(AuthContext)
  const { userLogin } = auth
  const [casa, setCasa] = useState({})

  useEffect(() => {
    casasService.getCasasId(userLogin._id).then(
      (response) => {
        setCasa(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [userLogin._id])

  return (
    <>
      <div className='row'>
        <div className='linea'>
          <h1>Nuestros Abuelos 🏘️</h1>
          <button className='botonAdd'>Agregar Abuelo</button>
        </div>

        <ListaCard>
          {casa?.abuelos?.length > 0 ? (
            casa?.abuelos?.map((abuelo) => <Card abuelo={abuelo} />)
          ) : (
            <>
              <h1>No hay abuelos </h1>
            </>
          )}
        </ListaCard>
      </div>
    </>
  )
}

export default Abuelos
