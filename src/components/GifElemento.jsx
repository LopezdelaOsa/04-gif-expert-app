import React from 'react'

export const GifElemento = ( { titulo, url, id} ) => {
    //console.log(id, titulo, url)
  return (
    <div className='card'>
        <img src={url} alt={titulo} />
        <p>{titulo}</p>

    </div>
  )
}
