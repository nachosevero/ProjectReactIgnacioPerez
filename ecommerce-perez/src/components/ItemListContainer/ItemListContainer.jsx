
import "./ItemListContainer.css"

function Greeting(propiedads) {
    return (
        <div className="greet-prop">
            <h2>
                {propiedads.saludo}
            </h2>
        </div>
    )
}

export default Greeting