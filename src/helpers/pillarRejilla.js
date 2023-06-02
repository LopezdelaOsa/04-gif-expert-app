

export const pillarGifs = async( categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=N2g8riplBFc6Qjhe9F8FeXHie8a2QDtJ&q=${ categoria }&limit=10&offset=0&rating=g&lang=en`
    const respuesta = await fetch(url)
    const {data} = await respuesta.json()
    const gifs = data.map(img =>  ({
        id: img.id,
        titulo: img.title,
        url: img.images.downsized_medium.url
    })
    )
    //console.log(gifs)
    return gifs
}