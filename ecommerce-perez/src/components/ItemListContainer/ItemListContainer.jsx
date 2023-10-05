
import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"
import { mFetch } from "../../data/mockFetch"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"


const ItemListContainer = () => {
    const [products, setProduct] = useState([])
    const [cargando, setCargando] = useState(true)
    const {cid} = useParams()
    console.log(cid)
    
    //useEffect(()=>{
        //if (cid) {
            //mFetch()
            //.then(respuesta => setProduct(respuesta.filter(product => cid === product.categoria)))
            //.catch(err => console.log(err))
            //.finally(()=> setCargando(false))
        //} else {
            //mFetch()
            //.then(respuesta => setProduct(respuesta))
            //.catch(err => console.log(err))
            //.finally(()=> setCargando(false))
        //}
    //},[cid] )
    useEffect(()=>{
        if (cid) {
            const db = getFirestore()
            const queryCollection = collection(db, "products")
            const queryFilter = query(queryCollection, where("categoria", "==", cid))
            getDocs(queryFilter)
            .then(resp => setProduct(resp.docs.map(prod => ({id: prod.id, ... prod.data()}) )))
            .catch(err => console.log(err))
            .finally(()=> setCargando(false))
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, "products")
            getDocs(queryCollection)
            .then(resp => setProduct(resp.docs.map(prod => ({id: prod.id, ... prod.data()}) )))
            .catch(err => console.log(err))
            .finally(()=> setCargando(false))
        }
    }, [cid])






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