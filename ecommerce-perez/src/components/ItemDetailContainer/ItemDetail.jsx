
import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import ItemCount from "../Counter/ItemCount"
import { Link } from "react-router-dom"


const ItemDetail = ({product}) => {
    const [isCounter, setIsCounter] = useState(true)
    const {addProduct} = useCartContext()

    const onAdd = (quantity) => {

        addProduct({... product, quantity})
        setIsCounter(false)
    }
    return (
        <div className="row mt-5">
            <h2 className="ms-5">Detalles del producto</h2>
            <div className="card col ms-5">
                <img className="w-25 ms-5" src={product.imgUrl} alt="imagen" />
                    <div className="mt-3">
                        <p className="ms-5"><strong>Nombre:</strong> {product.nombre}</p>
                        <p className="ms-5"><strong>Descripción:</strong> {product.descripcion}</p>
                        <p className="ms-5"><strong>Stock:</strong> {product.stock}</p>
                        <p className="ms-5"><strong>Precio:</strong> ${product.precio}</p>
                    </div>
            </div>
            <div className="col">
                {
                    isCounter ? 
                        <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                    :
                        <>
                            <Link to={"/cart"}>
                                <button className="btn btn-primary btn-outline-light text-dark">Ir al Carrito</button>
                            </Link>
                            <Link to={"/"}>
                                <button className="btn btn-primary btn-outline-light text-dark ms-1">Ir a Home</button>
                            </Link>
                        </>
                }
            </div>
        </div>
    )
}

export default ItemDetail