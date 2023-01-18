import React from 'react'
import { Link } from 'react-router-dom'

const SidebarElement = ({ icono, titulo, ruta, active }) => {
  const handleActive = (e) => {
    const elements = document.querySelectorAll('.link-sb')
    for (let b = 0; elements.length; b++) {
      if (elements[b].id === `link-${ruta}`) {
        elements[b].classList.add('active')
      } else {
        elements[b]?.classList.remove('active')
      }
    }
    // const ele = document.getElementById(`link-${ruta}`)
    // console.log('Active', ele)
    // ele.classList.add('active')
  }
  return (
    <Link to={`/${ruta}`} style={{ textDecoration: 'none' }}>
      <li
        onClick={(e) => handleActive(e)}
        className={`link-sb ${active}`}
        id={`link-${ruta}`}
      >
        {icono}
        <span>{titulo}</span>
      </li>
    </Link>
  )
}

export default SidebarElement
