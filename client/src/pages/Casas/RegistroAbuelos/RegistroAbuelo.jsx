import React from 'react'
import { useParams } from 'react-router-dom'
import RegistroAbueloForm from './components/RegistroAbueloForm'
import './styles/Form.css'

const RegistrarAbuelo = () => {
  const {id} = useParams()

  return (
    <>
      <RegistroAbueloForm id={id} />
    </>
  )
}

export default RegistrarAbuelo