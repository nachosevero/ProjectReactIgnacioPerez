
import { useCartContext } from "../context/CartContext"
import ItemCount from "../Counter/ItemCount"


const ItemDetail = ({product}) => {
    const {addProduct} = useCartContext()

    const onAdd = (quantity) => {

        addProduct({... product, quantity})
    }
    return (
    <div className="row">
        <h2 className="ms-5">Detalles del producto</h2>
        <div className="col">
            <img className="w-25 ms-5" src={product.imgUrl} alt="imagen" />
            <div>
                <p className="ms-5"><strong>Nombre:</strong> {product.nombre}</p>
                <p className="ms-5"><strong>Descripción:</strong> {product.descripcion}</p>
                <p className="ms-5"><strong>Stock:</strong> {product.stock}</p>
                <p className="ms-5"><strong>Precio:</strong> ${product.precio}</p>
            </div>
        </div>
        <div className="col">
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
        </div>
    </div>
    )
}

export default ItemDetail