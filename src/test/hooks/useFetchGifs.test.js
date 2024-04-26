
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";

describe('Pruebas en el hook de useFetchGifs', () => {

    test('Debe devolver el estado inicial.', () => {
        //useFetchGifs()
        const {result} = renderHook( () => useFetchGifs('Hyrule') )
        //console.log(result)
        const {imagenes, isLoading} = result.current

        expect (imagenes.length).toBe(0)
        expect (isLoading).toBeTruthy()

    })

    test('Debe devolver un array de imágenes, y el isLoading debe ser false.', async() => {

        const {result} = renderHook( () => useFetchGifs('Ganon') )

        await waitFor(
            ( ) => expect( result.current.imagenes.length ).toBeGreaterThan(0)
        )

        const {imagenes, isLoading} = result.current

        expect (imagenes.length).toBeGreaterThan(0)
        expect (isLoading).toBeFalsy()
        

    })

})