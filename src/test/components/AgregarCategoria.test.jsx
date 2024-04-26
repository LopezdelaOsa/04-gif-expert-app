import { fireEvent, render, screen } from '@testing-library/react'
import { AgregarCategoria } from '../../components/AgregarCategoria'

describe('Prueba de AgregarCategoria', () => {

    test('Debe cambiar el valor de la caja de texto', () => {
        render (<AgregarCategoria onNuevaCategoria={ () => { } } />)
        //screen.debug()
        const input = screen.getByRole('textbox')

        fireEvent.input( input, { target: { value: 'Finn'} })
        expect(input.value).toBe('Finn')
        //screen.debug()
    })

    test('Debe llamar a onNuevaCategoria, si el input tienen un valor ', () => {

        const valorInput = 'Finn'
        const onNuevaCategoria = jest.fn()
        // to-do: ????

        //render (<AgregarCategoria onNuevaCategoria={ () => { } } />)
        render (<AgregarCategoria onNuevaCategoria={ onNuevaCategoria } />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input ( input, { target: {value: valorInput} } )
        fireEvent.submit ( form )
        //screen.debug()
        expect ( input.value ).toBe('')

        //expect ( onNuevaCategoria ).toHaveBeenCalled()
        expect ( onNuevaCategoria ).toHaveBeenCalledTimes(1)
        expect ( onNuevaCategoria ).toHaveBeenCalledWith(valorInput)
    })

    test('No debe llamar onNuevaCategoria si el input está vacio', () => {

        const onNuevaCategoria = jest.fn()
        render (<AgregarCategoria onNuevaCategoria={ onNuevaCategoria } />)
        const form = screen.getByRole('form')
        fireEvent.submit ( form )

        //expect (onNuevaCategoria).toHaveBeenCalledTimes(0)
        expect (onNuevaCategoria).not.toHaveBeenCalled()
    })
})