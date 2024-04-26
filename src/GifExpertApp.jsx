
//import React from 'react'
import { useState} from 'react'
//import { AgregarCategoria } from './components/AgregarCategoria'
//import { GifRejilla } from './components/GifRejilla'
import { AgregarCategoria, GifRejilla} from './components' // es redundante añadir '/index' si queremos importar el index

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Zelda'])

    const onAgregarCategoria = ( nuevaCategoria) => {
        //setCategorias( ['Kolog', ...categorias])
        // Otra forma de escribirlo:
        //setCategorias ( cat =>  [...categorias, 'Lizardo'] )

        //setCategorias ( cat =>  [...categorias, 'Lizardo', 'Moblin'] )

        if (categorias.includes(nuevaCategoria)) return

        setCategorias( [nuevaCategoria, ...categorias])

    }

  return ( <>
        <h1>Gif Expert App</h1>
        <AgregarCategoria
            //setCategorias = { setCategorias }
            onNuevaCategoria = { event => onAgregarCategoria(event) }
        />
        {/*<button onClick={onAgregarCategoria}>Agregar</button>*/}
        {
            categorias.map( categoria => (
                <GifRejilla key = {categoria} categoria = { categoria } />
            )
        )
}
  </>  )
}

