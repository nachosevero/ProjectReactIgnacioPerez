import ItemCount from "../Counter/ItemCount"


const ItemDetail = ({product}) => {
    console.log(product)
    const onAdd = (count) => {
        console.log("productos seleccionados", count)
    }
    return (
    <div className="row">
        <h2 className="ms-5">Detalles del producto</h2>
        <div className="col">
            <img className="w-25 ms-5" src={product.imgUrl} alt="imagen" />
            <div>
                <p className="ms-5">Nombre: {product.nombre}</p>
                <p className="ms-5">Descripción: {product.descripcion}</p>
                <p className="ms-5">Stock: {product.stock}</p>
                <p className="ms-5">Precio: ${product.precio}</p>
            </div>
        </div>
        <div className="col">
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
        </div>
    </div>
    )
}

export default ItemDetail