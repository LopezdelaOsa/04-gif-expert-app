import { render, screen } from "@testing-library/react"
import { GifElemento } from "../../components/GifElemento"

describe('Pruebas en GifElemento', () => {

    const titulo = 'Cualquier titulo vale'
    const url = 'http://caulquier.url.jpg'

    test('Debe coincidir con el snapshot', () => {

        const {container} = render (<GifElemento titulo='{titulo}' url='{url}' />) //container
        expect(container).toMatchSnapshot()

    })

    test('Mostrando la imagen con la URL y el ALT indicadp', () => {
        render (<GifElemento titulo={titulo} url={url} />)
        //screen.debug()
        //expect ( screen.getByRole('img').src).toBe(`${url}/`) 
        //expect ( screen.getByRole('img').alt).toBe(titulo) 
        const { src, alt} = screen.getByRole('img')
        expect(src).toBe(`${url}/`)
        expect(alt).toBe(titulo)

    })

    test('Debe mostrar el titulo como texto en el componente', () => {
        render (<GifElemento titulo={titulo} url={url} />)
        expect ( screen.getByText(titulo) ).toBeTruthy()

    })
})