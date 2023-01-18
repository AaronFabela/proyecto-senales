import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Card from '../../../../components/Card'
import ListaCard from '../../../../components/ListaCard'
import Loading from '../../../../components/Loading'
import casasService from '../../../../services/casas.service'

const CasasPerfil = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [casa, setCasa] = useState({})

  useEffect(() => {
    casasService.getCasasId(id).then(
      (response) => {
        setCasa(response.data)
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
                          <p class='mb-0'>Casa: </p>
                        </div>
                        <div class='col-sm-9'>
                          <p class='text-muted mb-0'>{casa.usuario}</p>
                        </div>
                      </div>
                      <hr />
                      <div class='row'>
                        <div class='col-sm-3'>
                          <p class='mb-0'>Email: </p>
                        </div>
                        <div class='col-sm-9'>
                          <p class='text-muted mb-0'>{casa.email}</p>
                        </div>
                      </div>
                      <hr />
                      <div class='row'>
                        <div class='col-sm-3'>
                          <p class='mb-0'>Teléfono: </p>
                        </div>
                        <div class='col-sm-9'>
                          <p class='text-muted mb-0'>{casa.telefono}</p>
                        </div>
                      </div>
                      <hr />
                      <div class='row'>
                        <div class='col-sm-3'>
                          <p class='mb-0'>Dirección: </p>
                        </div>
                        <div class='col-sm-9'>
                          <p class='text-muted mb-0'>{casa.direccion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ListaCard>
                {casa.abuelos.length > 0 ? (
                  casa.abuelos.map((abuelo) => <Card abuelo={abuelo} />)
                ) : (
                  <></>
                )}
              </ListaCard>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default CasasPerfil
