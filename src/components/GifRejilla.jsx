//import { useEffect, useState } from "react"
//import { pillarGifs } from "../helpers/pillarRejilla"
import { GifElemento } from "./GifElemento"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifRejilla = ( { categoria } ) => {

  // const [imagenes, setImagenes] = useState([])

  // const pillarImagenes = async() => {
  //   const nuevasImagenes = await pillarGifs( categoria)
  //   setImagenes(nuevasImagenes)
  // }

  //   useEffect ( () => {
  //     pillarImagenes()
  //   }, [ ]  )

  const { imagenes, isLoading } = useFetchGifs(categoria)

  //console.log({imagenes, isLoading})
  console.log(isLoading)
    
  return (
    <>
        <h3> {categoria} </h3>
        {
          // isLoading ? (<h2>Cargando...</h2>) : null
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className='card-grid'>{
          //imagenes.map( img => (
            //<li key={img.id}>{img.titulo}</li>
          //) )

          //imagenes.map ( ({id, titulo, url}) => (
            //<li key={id}>{titulo}</li>
            //<GifElemento key={ id } titulo={ titulo } url={ url } />
          //))

            imagenes.map( (img) => (
              <GifElemento key={img.id}
                {...img}
              />
            )

            )

        }</div>
 
    </>
  )
}
