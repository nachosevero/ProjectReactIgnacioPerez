import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

import ItemDetail from "./ItemDetail"
import { mFetch } from "../../data/mockFetch"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {pid} = useParams()
    console.log(pid)

    useEffect(()=> {
        mFetch(Number(pid))
        .then(resp => setProduct(resp))
        .catch(err=> console.log(err))
        //.finally(set Loading)
    }, [])
    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer