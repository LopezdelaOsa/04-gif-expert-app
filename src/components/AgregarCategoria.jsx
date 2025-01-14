import { useState } from 'react'
import PropTypes from 'prop-types'

export const AgregarCategoria = ( { onNuevaCategoria } ) => {

    //const [valorInput, setValorInput] = useState('Zelda')
    const [valorInput, setValorInput] = useState('')

    //const onInputCambio = (event) => {
    const onInputCambio = ({ target }) => {
        //console.log(event.target.value)
        //setValorInput(event.target.value)
        setValorInput( target.value )
    }

    const onEnviar = (event) => {
        //console.log(event)
        //console.log('Hola desde el submit')
        event.preventDefault()
        //console.log(valorInput)
        if (valorInput.trim().length <= 1) return
        
        //setCategorias (  categorias => [valorInput, ...categorias])
        onNuevaCategoria(valorInput.trim())
        setValorInput('')

    }

  return (
    //<form onSubmit={ (event) => onEnviar(event)}>
    <form onSubmit={ onEnviar } aria-label="form">
        <input
            type="text"
            placeholder="Buscar gifs por tema"
            value={ valorInput }
            //onChange= { (event) => onInputCambio (event) }
            onChange= { onInputCambio  }
        />
    </form>
  )
}

AgregarCategoria.propTypes = {
    onNuevaCategoria: PropTypes.func.isRequired

}
