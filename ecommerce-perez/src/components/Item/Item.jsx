import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({product}) => {
    return (
        <div className="card w-25 bg-dark text-light border-secondary">
            <div className="card-body pb-md-5">
                <img class="height-pers" className="w-75 img-fluid mx-auto d-block h-75" src={product.imgUrl} alt="imagen battlefield 1" />
                <h3>{product.nombre}</h3>
                <p><strong>Descripción:</strong> {product.descripcion}</p>
                <h3>${product.precio}</h3>
            </div>
            <div className="card-footer">
                <Link to={`/detalle/${product.id}`}>
                    <button className="btn btn-primary btn-outline-light text-dark w-100">Detalle</button>
                </Link>
            </div>
        </div> 
    )
}

export default Item