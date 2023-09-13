import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
        <div className="card w-25 bg-dark text-light">
            <div className="card-body">
                <img className="w-100" src={product.imgUrl} alt="imagen battlefield 1" />
                <h4>{product.nombre}</h4>
                <p>Descripción:{product.descripcion}</p>
                <p>{product.precio}</p>
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