//import { useContext } from "react"
//import { CartContext } from "../context/CartContext"

import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"

const CartContainer = () => {
    //const {} = useContext(CartContext)
    const [dataForm, setDataForm] = useState({
        nombre: "",
        telefono: "",
        email: ""
    })

    const {cartList, deleteCart, precioTotal, deleteItem} = useCartContext()
    //console.log(cartList)

    const handleAddOrder = async (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.items = cartList.map(prod => {
            return {id: prod.id, nombre: prod.nombre, precio: prod.precio, cantidad: prod.quantity}
        })
        order.total = precioTotal()

        const queryDB = getFirestore()
        const ordersCollection = collection(queryDB, "orders")
        addDoc(ordersCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(()=> {
            setDataForm({
                nombre: "",
                telefono: "",
                email: ""
            })
            deleteCart()
        })
        //console.log(order)
    }

    const handleOnChange = (evt) => {
        setDataForm({
            ... dataForm,
            [evt.target.name] : evt.target.value
        })
    }
    console.log(dataForm)
    return (
        cartList.length > 0 ? 

            <div>
                <div>
                    <h2 className="d-flex align-items-center justify-content-center">Carrito de Compras</h2>
                    <table className="table ms-5">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList.map((prod, id) =>(
                                <tr key={id}>
                                    <td>{prod.nombre}</td>
                                    <td>${prod.precio}</td>
                                    <td>{prod.quantity}</td>
                                    <td>${prod.precio * prod.quantity}</td>
                                    <button onClick={() => deleteItem(prod.id)}>❌</button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                    <button className="btn btn-warning ms-5" onClick={deleteCart}>Vaciar Carrito</button>
                    <div className="d-flex align-items-end justify-content-end me-5">{precioTotal() !== 0 && <h3>Precio Total: {precioTotal()} </h3>}</div>
                    <h4 className="ms-5">Ingresa tus datos para finalizar la compra</h4>
                    <form className="ms-5" onSubmit={handleAddOrder}>
                        <h5>Nombre:</h5><input type="text" name="nombre" placeholder="ingresar el nombre" value={dataForm.nombre} onChange={handleOnChange} /><br/>
                        <h5>Telefono:</h5><input type="text" name="telefono" placeholder="ingresar el telefono" value={dataForm.telefono} onChange={handleOnChange} />
                        <h5>Email:</h5><input type="text" name="email" placeholder="ingresar el email" value={dataForm.email} onChange={handleOnChange} />
        
                    </form>
                <div className="d-flex align-items-center justify-content-center"><button className="btn btn-lg btn-success ms-5" onClick={handleAddOrder}>Finalizar compra</button></div>
            </div>
            
            :
                    <div>
                        <h2 className="d-flex align-items-center justify-content-center">No hay productos en el Carrito.</h2>
                        <Link to="/" className="d-flex align-items-center justify-content-center"><button className="btn btn-primary">Ir a comprar</button></Link>
                    </div>

        
    )
}

export default CartContainer