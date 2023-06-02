import { useEffect, useState } from 'react'
import { pillarGifs } from '../helpers/pillarRejilla'

export const useFetchGifs = ( categoria ) => {

  const [imagenes, setImagenes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const pillarImagenes = async() => {
    const nuevasImagenes = await pillarGifs( categoria)
    setImagenes(nuevasImagenes)
    setIsLoading(false)
  }

    useEffect ( () => {
      pillarImagenes()
    }, [ ]  )
    
    return {
        //imagenes: [], // para inicializarlo
        //imagenes: imagenes,
        imagenes,
        //isLoading: true
        isLoading
    }
}
