import { useState } from "react"


const ItemCount = ({initial, stock, onAdd}) => {
  const [counter, setCounter] = useState(initial)

  const handleAdd = ()=>{
    if(counter < stock) setCounter(counter+1)
  }
  const handleSubstract = ()=>{
    if(counter > initial) setCounter(counter-1)
  }

  const handleOnAdd = () => onAdd(counter)


  return (
    <div>
      <h2>Counter</h2>
      <button className="btn btn-primary btn-outline-light text-dark" onClick={handleSubstract}>-</button>
      <label>
        <strong>{counter}</strong>
      </label>
      <button className="btn btn-primary btn-outline-light text-dark" onClick={handleAdd}>+</button>
      <button className="btn btn-primary btn-outline-light text-dark" onClick={handleOnAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount