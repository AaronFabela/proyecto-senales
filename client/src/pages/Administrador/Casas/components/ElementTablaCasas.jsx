import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import casasService from '../../../../services/casas.service'

const ElementTableCasas = ({ elemento, index, type }) => {
  const handleDelete = async (e, id) => {
    try {
      await casasService.deleteUsuario(id)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <a href='#'>
            <img
              alt='casa'
              src={
                elemento?.imagen
                  ? elemento?.imagen
                  : 'https://img.freepik.com/vector-premium/casa-dibujos-animados_11460-1609.jpg'
              }
              className='avatar'
              style={{ height: '2rem' }}
            />
            <Tooltip title='Ver Perfil'>
              <Link
                to={`/${type}Perfil/${elemento._id}`}
                style={{ textDecoration: 'none' }}
              >
                {elemento.usuario}
              </Link>
            </Tooltip>
          </a>
        </td>
        <td>{elemento.telefono}</td>
        <td>{elemento.abuelos}</td>
        <td className='acciones'>
          <Tooltip title='Editar Usuario'>
            <Link
              to={`/editarCasa/${elemento._id}`}
              style={{ textDecoration: 'none' }}
            >
              <button
                title='Editar'
                className='btn btn-primary'
                style={{
                  fontSize: '15px',
                  padding: '6px',
                  border: '1px solid black',
                }}
              >
                <EditIcon className='icon' fontSize='15px' />
              </button>
            </Link>
          </Tooltip>
          <Tooltip title='Editar Usuario'>
            <button
              onClick={() => handleDelete(elemento._id)}
              title='Editar'
              className='btn btn-primary'
              style={{
                fontSize: '15px',
                padding: '6px',
                border: '1px solid black',
              }}
            >
              <EditIcon className='icon' fontSize='15px' />
            </button>
          </Tooltip>
        </td>
      </tr>
    </>
  )
}

export default ElementTableCasas
