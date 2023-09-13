
import { useEffect, useState } from "react"
import { mFetch } from "../../data/mockFetch"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"


const ItemListContainer = () => {
    const [products, setProduct] = useState([])
    const [cargando, setCargando] = useState(true)
    const {cid} = useParams()
    console.log(cid)
    
    useEffect(()=>{
        if (cid) {
            mFetch()
            .then(respuesta => setProduct(respuesta.filter(product => cid === product.categoria)))
            .catch(err => console.log(err))
            .finally(()=> setCargando(false))
        } else {
            mFetch()
            .then(respuesta => setProduct(respuesta))
            .catch(err => console.log(err))
            .finally(()=> setCargando(false))
        }
    },[cid] )

    return (
        <div className="row">
        { cargando ? 
                <h2 className="charging">Cargando...</h2> 
            : 
                <ItemList products={products}/>
        }
        </div>
    )
}

    export default ItemListContainer