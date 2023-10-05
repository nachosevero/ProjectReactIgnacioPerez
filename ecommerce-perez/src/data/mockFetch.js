const products = [
    {id: 1, nombre:"Battlefield 1 PC", categoria:"pc", precio: 1200, stock: 10, descripcion: "Battlefield 1 es un juego de disparos en primera persona ambientado en la Primera Guerra Mundial, con emocionantes modos de juego para un jugador y multijugador en línea.", imgUrl:"https://uvejuegos.com/img/caratulas/56708/BF1-PC-B.jpg"},
    {id: 2, nombre:"Marvel's Spider-Man Remastered PC", categoria:"pc", precio: 1500, stock: 9, descripcion: "Marvel's Spider-Man es un juego de acción en el que juegas como Spider-Man, luchando contra villanos en una versión de Nueva York.", imgUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/BtsjAgHT9pqHRXtN9FCk7xc8.png"},
    {id: 3, nombre:"EA Sports FC 24 PS5", categoria:"consolas", precio: 2000, stock: 10, descripcion: "EA SPORTS FC™ 24 te da la bienvenida a The World's Game: la experiencia futbolística más fiel hasta la fecha con HyperMotionV*, PlayStyles optimizado por Opta y el nuevo motor de Frostbite™, reinventando la forma en que más de 19 000 futbolistas se mueven, juegan y se ven en cada partido.", imgUrl:"https://web-game.net/wp-content/uploads/2023/07/fifa-24-PS5.jpg"},
    {id: 4, nombre:"Call of Duty Modern Warfare II XBOX X/S",categoria:"consolas", precio: 1400, stock: 10, descripcion: "En Call of Duty®: Modern Warfare® II, los jugadores se verán inmersos en un conflicto a escala global sin precedentes que incluye el regreso de Operadores icónicos de la fuerza operativa 141.", imgUrl:"https://storegamesuruguay.com/files/images/productos/1654282737-call-of-duty-modern-warfare-2-xbox-series-pre-orden-0.jpg"},
    {id: 5, nombre:"God of War PS4", categoria:"consolas", precio: 800, stock: 10, descripcion: "God of War es un videojuego de acción y aventuras que sigue la historia de Kratos, un dios griego convertido en guerrero, mientras se aventura en la mitología nórdica con su hijo Atreus.", imgUrl:"https://areajugones.sport.es/wp-content/uploads/2018/03/god-of-war-ps-cover-art.jpg"},
    {id: 6, nombre:"Resident Evil 4 Remake PC", categoria:"pc", precio: 2000, stock: 5, descripcion: "Sobrevivir es solo el principio. Con una mecánica de juego modernizada, una historia reimaginada y unos gráficos espectacularmente detallados, Resident Evil 4 supone el renacimiento de un gigante del mundo de los videojuegos.", imgUrl:"https://i.3djuegos.com/juegos/18541/resident_evil_4_remake/fotos/ficha/resident_evil_4_remake-5789986.webp"},
    {id: 7, nombre:"Fallout 76 XBOX ONE", categoria:"consolas", precio: 1200, stock: 10, descripcion: "Fallout 76 es un juego en línea de supervivencia post-apocalíptico ambientado en Virginia Occidental, donde los jugadores exploran, construyen y luchan en un mundo devastado por la radiación nuclear.", imgUrl:"https://m.media-amazon.com/images/I/61MEblEO78L.jpg"},
    {id: 8, nombre:"Horizon: Forbidden West PS5", categoria:"consolas", precio: 2000, stock: 10, descripcion: "Horizon Forbidden West es un videojuego de rol de acción, aventura y mundo abierto desarrollado por Guerrilla Games y distribuido por Sony Interactive Entertainment.", imgUrl:"https://i.3djuegos.com/juegos/17054/horizon_zero_dawn_2/fotos/ficha/horizon_zero_dawn_2-5596826.jpg"},
    {id: 9, nombre:"Baldur's Gate 3 PC", categoria:"pc", precio: 2000, stock: 6, descripcion: "Reúne a tu grupo y vuelve a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, además de la atracción de un poder absoluto.", imgUrl:"https://cdn.cdkeys.com/700x700/media/catalog/product/n/e/new_project_65__2.jpg"},
    {id: 10, nombre:"Starfield PC", categoria:"pc", precio: 2200, stock: 15, descripcion: "Starfield es el primer universo nuevo en 25 años de Bethesda Game Studios, los galardonados creadores de The Elder Scrolls V: Skyrim y Fallout 4.", imgUrl:"https://m.media-amazon.com/images/I/817PRtX+OaL.jpg"},
    {id: 11, nombre:"Red Dead Redemption 2 PC", categoria:"pc", precio: 1500, stock: 13, descripcion: "Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era.", imgUrl:"https://media.vandal.net/m/42944/red-dead-redemption-2-2019101812583956_1.jpg"},
    {id: 12, nombre:"Call of Duty Modern Warfare II PC", categoria:"pc", precio: 1500, stock: 11, descripcion: "En Call of Duty®: Modern Warfare® II, los jugadores se verán inmersos en un conflicto a escala global sin precedentes que incluye el regreso de Operadores icónicos de la fuerza operativa 141.", imgUrl:"https://i.3djuegos.com/juegos/18491/call_of_duty_modern_warfare_2/fotos/ficha/call_of_duty_modern_warfare_2-5754880.webp"},
    {id: 13, nombre:"EA Sports FC 24 PC", categoria:"pc", precio: 2000, stock: 9, descripcion: "EA SPORTS FC™ 24 te da la bienvenida a The World's Game: la experiencia futbolística más fiel hasta la fecha con HyperMotionV*, PlayStyles optimizado por Opta y el nuevo motor de Frostbite™, reinventando la forma en que más de 19 000 futbolistas se mueven, juegan y se ven en cada partido.", imgUrl:"https://www.infobae.com/new-resizer/AufYCn2msUPyegcYB4iMoxQV1A0=/1200x1800/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TND4YIOZ6JCIFNDI6IOYAMV65M.png"},
    {id: 14, nombre:"Marvel's Spider-Man PS4", categoria:"consolas", precio: 1200, stock: 10, descripcion: "Marvel's Spider-Man es un juego de acción en el que juegas como Spider-Man, luchando contra villanos en una versión de Nueva York.", imgUrl:"https://i.3djuegos.com/juegos/13417/spiderman_ps4__nombre_provisional_/fotos/ficha/spiderman_ps4__nombre_provisional_-4004811.jpg"}
]

export const mFetch = (pid) => new Promise((res, rej) => {
    //const condition = true

    setTimeout(()=>{
        res(pid ? products.find(product => product.id === pid) : products)
    }, 2000)
})
