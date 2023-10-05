import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addProduct = (newProduct)=>{

        const idx = cartList.findIndex(product => product.id === newProduct.id)

        if(idx !== -1 ) {

            cartList[idx].quantity = cartList[idx].quantity + newProduct.quantity
            setCartList([ ... cartList ])

        } else {
            setCartList([
                ...cartList,
                newProduct
            ])
        }
        
    }


    const quantityTotal = () => cartList.reduce((count, objProducto ) => count += objProducto.quantity, 0)



    const precioTotal = () => cartList.reduce((count, objProducto ) => count += objProducto.quantity * objProducto.precio, 0)


    const deleteItem = id => setCartList(cartList.filter(product => product.id !== id))



    const deleteCart = () =>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteCart,
            quantityTotal,
            precioTotal,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

