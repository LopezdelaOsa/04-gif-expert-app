import { pillarGifs } from "../../helpers/pillarRejilla"

describe('Pruebas en pillarRejilla', () => {

    test('Debe devolver un array de gifs', async() => {

        const gifs = await pillarGifs('Hyrule')
        //console.log(gifs)
        expect (gifs.length).toBeGreaterThan(0)
        expect (gifs[0]).toEqual({
            id: expect.any(String),
            titulo: expect.any(String),
            url: expect.any(String),
        })

    })
})