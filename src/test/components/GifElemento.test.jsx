import { render } from "@testing-library/react"
import { GifElemento } from "../../components/GifElemento"

describe('Pruebas en GifElemento', () => {

    const titulo = 'Cualquier titulo vale'
    const url = 'htp://caulquier.url.vale'

    test('Debe coincidir con el snapshot', () => {

        const {contenedor} = render (<GifElemento titulo='{titulo}' url='{url}' />)
        expect(contenedor).toMatchSnapshot()

    })
})