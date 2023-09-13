const products = [
    {id: 1, nombre:"Battlefield 1 PC", categoria:"pc", precio: 1000, stock: 10, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://uvejuegos.com/img/caratulas/56708/BF1-PC-B.jpg"},
    {id: 2, nombre:"Marvel's Spider-Man Remastered PC", categoria:"pc", precio: 1000, stock: 9, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/BtsjAgHT9pqHRXtN9FCk7xc8.png"},
    {id: 3, nombre:"EA Sports FC 24 PS5", categoria:"consolas", precio: 1000, stock: 10, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://web-game.net/wp-content/uploads/2023/07/fifa-24-PS5.jpg"},
    {id: 4, nombre:"Call of Duty Modern Warfare II XBOX X/S",categoria:"consolas", precio: 1000, stock: 10, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://storegamesuruguay.com/files/images/productos/1654282737-call-of-duty-modern-warfare-2-xbox-series-pre-orden-0.jpg"},
    {id: 5, nombre:"God of War PS4", categoria:"consolas", precio: 1000, stock: 10, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://areajugones.sport.es/wp-content/uploads/2018/03/god-of-war-ps-cover-art.jpg"},
    {id: 6, nombre:"Resident Evil 4 Remake PC", categoria:"pc", precio: 1000, stock: 5, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://i.3djuegos.com/juegos/18541/resident_evil_4_remake/fotos/ficha/resident_evil_4_remake-5789986.webp"},
    {id: 7, nombre:"Fallout 76 XBOX ONE", categoria:"consolas", precio: 1000, stock: 10, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://m.media-amazon.com/images/I/61MEblEO78L.jpg"},
    {id: 8, nombre:"Horizon: Forbidden West PS5", categoria:"consolas", precio: 1000, stock: 10, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://i.3djuegos.com/juegos/17054/horizon_zero_dawn_2/fotos/ficha/horizon_zero_dawn_2-5596826.jpg"},
    {id: 9, nombre:"Baldur's Gate 3 PC", categoria:"pc", precio: 1000, stock: 6, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://cdn.cdkeys.com/700x700/media/catalog/product/n/e/new_project_65__2.jpg"},
    {id: 10, nombre:"Starfield PC", categoria:"pc", precio: 1000, stock: 15, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://m.media-amazon.com/images/I/817PRtX+OaL.jpg"},
    {id: 11, nombre:"Red Dead Redemption 2 PC", categoria:"pc", precio: 1000, stock: 13, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://media.vandal.net/m/42944/red-dead-redemption-2-2019101812583956_1.jpg"},
    {id: 12, nombre:"Call of Duty Modern Warfare II PC", categoria:"pc", precio: 1000, stock: 11, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://i.3djuegos.com/juegos/18491/call_of_duty_modern_warfare_2/fotos/ficha/call_of_duty_modern_warfare_2-5754880.webp"},
    {id: 13, nombre:"EA Sports FC 24 PC", categoria:"pc", precio: 1000, stock: 9, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://www.infobae.com/new-resizer/AufYCn2msUPyegcYB4iMoxQV1A0=/1200x1800/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TND4YIOZ6JCIFNDI6IOYAMV65M.png"},
    {id: 14, nombre:"Marvel's Spider-Man PS4", categoria:"consolas", precio: 1000, stock: 10, descripcion: "Descripcion del producto a detallar indefinida, etc etc etc.", imgUrl:"https://i.3djuegos.com/juegos/13417/spiderman_ps4__nombre_provisional_/fotos/ficha/spiderman_ps4__nombre_provisional_-4004811.jpg"}
]

export const mFetch = (pid) => new Promise((res, rej) => {
    //const condition = true

    setTimeout(()=>{
        res(pid ? products.find(product => product.id === pid) : products)
    }, 2000)
})
