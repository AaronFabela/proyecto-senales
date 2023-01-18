import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
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
            <Tooltip title='Ver Adaptador'>
              <Link
                to={`/adoptadores/${elemento._id}`}
                style={{ textDecoration: 'none' }}
              >
                {elemento.usuario}
              </Link>
            </Tooltip>
          </a>
        </td>
        <td>{elemento.email}</td>
        <td className='acciones'>
          <Tooltip title='Ver Adaptador'>
            <Link
              to={`/adoptadores/${elemento._id}`}
              style={{ textDecoration: 'none' }}
            >
              <button
                title='Ver'
                className='btn btn-primary'
                style={{
                  fontSize: '15px',
                  padding: '6px',
                  border: '1px solid black',
                }}
              >
                <VisibilityIcon className='icon' fontSize='15px' />
              </button>
            </Link>
          </Tooltip>
        </td>
      </tr>
    </>
  )
}

export default ElementTableCasas
