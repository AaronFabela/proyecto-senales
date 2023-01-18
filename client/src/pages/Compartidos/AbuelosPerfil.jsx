import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import abuelosService from '../../services/abuelo.service'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { ROLES } from '../../utils/Constants'

const AbuelosPerfil = () => {
  const { auth } = useContext(AuthContext)
  const { userLogin } = auth
  const { id } = useParams()
  const [abuelo, setAbuelo] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    abuelosService.getAbueloId(id).then(
      (response) => {
        setAbuelo(response.data)
        setIsLoading(false)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [id])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section style={{ backgroundColor: '#eee' }}>
            <div class='container py-5'>
              <div class='row'>
                <div class='col-lg-4'>
                  <div class='card mb-4'>
                    <div class='card-body text-center'>
                      <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                        alt='avatar'
                        class='rounded-circle img-fluid'
                        style={{ width: '150px' }}
                      />
                    </div>
                  </div>
                </div>
                <div class='col-lg-8'>
                  <div class='card mb-4'>
                    <div class='card-body'>
                      <div class='row'>
                        <div class='col-sm-3'>
                          <p class='mb-0'>Nombre: </p>
                        </div>
                        <div class='col-sm-9'>
                          <p class='text-muted mb-0'>{abuelo.usuario}</p>
                        </div>
                      </div>
                      <hr />
                      <div class='row'>
                        <div class='col-sm-3'>
                          <p class='mb-0'>Edad: </p>
                        </div>
                        <div class='col-sm-9'>
                          <p class='text-muted mb-0'>{abuelo.edad}</p>
                        </div>
                      </div>
                      <hr />
                      <div class='row'>
                        <div class='col-sm-3'>
                          <p class='mb-0'>Descripción: </p>
                        </div>
                        <div class='col-sm-9'>
                          <p class='text-muted mb-0'>{abuelo.descripcion}</p>
                        </div>
                      </div>
                      <hr />
                      <div class='row'>
                        {(() => {
                          switch (userLogin.rol) {
                            case ROLES.ADOPTADOR:
                              return (
                                <>
                                  {abuelo.adoptado ? (
                                    <button
                                      disabled={true}
                                      className='botonDop'
                                    >
                                      Adoptado
                                    </button>
                                  ) : (
                                    <button className='botonAdd'>
                                      Adoptar Abuelo
                                    </button>
                                  )}
                                </>
                              )
                            case ROLES.CASA:
                              return (
                                <>
                                  <div class='col-sm-3'>
                                    <p class='mb-0'>Estatus: </p>
                                  </div>
                                  <div class='col-sm-9'>
                                    <p class='text-muted mb-0'>
                                      {abuelo.adoptado
                                        ? 'Adoptado'
                                        : 'Sin Adoptar'}
                                    </p>
                                  </div>
                                </>
                              )
                            default:
                              return null
                          }
                        })()}
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>

              {/* <ListaCard>
                {casa.abuelos.length > 0 ? (
                  casa.abuelos.map((abuelo) => <Card abuelo={abuelo} />)
                ) : (
                  <></>
                )}
              </ListaCard> */}
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default AbuelosPerfil
