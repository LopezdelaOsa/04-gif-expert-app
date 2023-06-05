//import React from 'react'
import PropTypes from 'prop-types'

export const GifElemento = ( { titulo, url, id} ) => {
    //console.log(id, titulo, url)
  return (
    <div className='card'>
        <img src={url} alt={titulo} />
        <p>{titulo}</p>

    </div>
  )
}

GifElemento.propTypes = {
  titulo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

// Tarea:
// 1. Añadir propTypes
//    titulo obligatorio
//    url obligatorio
// 2. Evaluar snapshoty