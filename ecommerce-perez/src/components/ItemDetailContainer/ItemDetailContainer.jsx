import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import {useParams} from "react-router-dom"

import ItemDetail from "./ItemDetail"
import { mFetch } from "../../data/mockFetch"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {pid} = useParams()
    console.log(pid)

    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, "products", pid)
        getDoc(queryDoc)
        .then(resp => ( {id: resp.id, ... resp.data()} ) )
        .then(resp => setProduct(resp))
    }, [])

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer