import { useCartContext } from "../../context/CartContext"

function CartWidget() {
    const {quantityTotal} = useCartContext()
    return (
            <div className="carrito-wid">
                🛒
                {quantityTotal()}
            </div>
)}

export default CartWidget