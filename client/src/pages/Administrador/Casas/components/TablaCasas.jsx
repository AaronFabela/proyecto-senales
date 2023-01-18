import React from 'react'
import '../styles/TableCasas.css'
import NotData from '../../../../components/NotData'
import ElementTableCasas from './ElementTablaCasas'

const TablaCasas = ({ data, input, type, headers }) => {
  // const [tableData, setTableData] = useState([])
  // const [allEmpleadores, setAllEmpleadores] = useState([])

  return (
    <div className='empleadores-table-responsive'>
      <div className='empleadores-table-wrapper'>
        <div className='empleadores-table-header'>
          <div className='empleadores-busqueda'>
            <span>Estás buscando a alguien?</span>
            {input}
          </div>
        </div>
        {data?.length > 0 ? (
          <>
            <table className='empleadores-table empleadores-table-striped table-hover'>
              <thead className='empleadores-thead'>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.map((element, index) => (
                  <ElementTableCasas
                    index={index}
                    key={element?._id}
                    elemento={element}
                    type={type}
                  />
                ))}
              </tbody>
            </table>
            <div className='clearfix'></div>
          </>
        ) : (
          <NotData />
        )}
      </div>
    </div>
  )
}

export default TablaCasas
