import CartContext from "./cart-context"
import { useReducer } from "react"

const defaultState = {
    items: [],
    totalAmount: 0
}

const cartReducer = ( state = defaultState, action ) => {

    switch (action.type) {
        case "ADD":
            
            return {
                items: [...state.items, action.payload],
                totalAmount: state.totalAmount + action.payload.price,
            }

            case "REMOVE": {
                
                // new array without removed product
                const  updatedItems = state.items.filter( item => item.id !== action.payload )
                console.log(updatedItems)
                // that product from array
                const product = state.items.find(item => item.id === action.payload)
                //that product price
                const productAmount = product.price


        
                return {
                    items: updatedItems,
                    totalAmount: state.totalAmount - productAmount
                }

            }
            


            default :
            return defaultState
    }
}

const CartProvider = (props) => {

    const [cartState, dispatch] = useReducer(cartReducer,defaultState)


    const addItemToCartHandler = (item) => {
        dispatch({
            type: "ADD",
            payload: item
        })
    }

    const removeItemFromCartHandler = (id) => {
        dispatch({
            type: "REMOVE",
            payload: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
