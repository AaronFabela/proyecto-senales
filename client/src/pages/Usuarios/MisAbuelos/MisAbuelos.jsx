import React from 'react'
import ListaCard from '../../../components/ListaCard'
import Card from '../../../components/Card'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'
import { useState } from 'react'

const MisAbuelos = () => {
  const { auth } = useContext(AuthContext)
  const { userLogin } = auth
  const [abuelos, setAbuelos] = useState(userLogin.abuelos)

  return (
    <>
      <div className='row'>
        <div className='linea'>
          <h1>Mis Abuelos 🏘️</h1>
        </div>

        <ListaCard>
          {abuelos?.length > 0 ? (
            abuelos?.map((abuelo) => <Card abuelo={abuelo} />)
          ) : (
            <>
              <h1>No tienes abuelos adoptados </h1>
            </>
          )}
        </ListaCard>
      </div>
    </>
  )
}

export default MisAbuelos
