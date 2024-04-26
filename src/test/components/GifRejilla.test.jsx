import { render, screen } from "@testing-library/react"
import { GifRejilla } from "../../components/GifRejilla"
import { useFetchGifs } from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas sobre componente GifRejilla', () => {

    const categoria = 'Zelda'

    test('Debe  mostrar el "Cargando..." inicial.', () => {

        useFetchGifs.mockReturnValue({
            imagenes: [],
            isLoading: true
        })

        render(<GifRejilla categoria={ categoria } />)
        //screen.debug()
        expect( screen.getByText('Cargando...') )
        expect( screen.getByText( categoria ) )

    })

    test('Debe mostrar items cuando se cargan las imágenes con useFetchGifs.', () => {

        const gifs = [
            {
            id: 'ASD',
            titulo: 'Uno cualquiera',
            url: 'https://unaurlcualquiera.jpg'
            },
            {
            id: 'WER',
            titulo: 'Otro de otro sitio',
            url: 'https://otraurlotrositio.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            imagenes: gifs,
            isLoading: false
        })

        render(<GifRejilla categoria={ categoria } />)
        //screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2)

    })

})