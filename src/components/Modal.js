import { useContext } from "react"
import CartContext from "../store/cart-context"
import Burger from "./Burger"
import "./Modal.css"

const Modal = ({onClose}) => {

    const cartCtx = useContext(CartContext)
    const totalAmount = ` ${cartCtx.totalAmount.toFixed(2)}`


    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem(item)
    }

    const cartItems = <ul className="cart-items">
                            {cartCtx.items.map( (item) => 
                            <Burger 
                                key={item.id} 
                                name={item.name} 
                                amount={item.amount} 
                                price={item.price}
                                pic={item.picture}
                                removeBurger={cartItemRemoveHandler.bind(null , item.id)}
                                addBurger={cartItemAddHandler.bind(null, item)} 
                            />
                            )}
                    </ul>


    return (
        <div className="backdrop"  >
            <div className="modal">
                {cartItems}
                <div className="modal__actions">
                    <div className="total">
                        <span>Total Amount</span>
                        <span>{cartCtx.totalAmount < 1 ? "0" : totalAmount}$</span>
                    </div>
                    <div className="actions">
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
                
            </div>
        </div>
       
    )
}

export default Modal
