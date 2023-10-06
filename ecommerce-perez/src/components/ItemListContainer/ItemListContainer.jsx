import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {cid} = useParams()
    

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, "products")
        const queryFilter = cid ? query(queryCollection, where("categoria", "==", cid)) : queryCollection
        
        getDocs(queryFilter)
        .then(resp => setProduct(resp.docs.map(prod => ({id: prod.id, ... prod.data()}) )))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))

    }, [cid])






    return (
        <div className="row">
        { loading ? 
                <h2 className="charging">Cargando...</h2> 
            : 
                <ItemList products={products}/>
        }
        </div>
    )
}



    export default ItemListContainer