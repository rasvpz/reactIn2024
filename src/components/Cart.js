import { useSelector } from "react-redux"
import AccordionsItemLists from "./AccordionsItemLists"
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../utils/cartSlice";
const Cart = () =>{

    const myCart =  useSelector((store) => store.cart.items) 
    // const myCart = Object.values(myCartObj);
    const dispatch = useDispatch()

    const removeAll = () =>{
        dispatch(clearCart())

    }
    return(
        <div className="h-24 w-6/12 m-auto">
            <div className="flex justify-between">
            <h1 className="mt-4 mb-4 text-lg font-bold">Cart {myCart.length}</h1>
            <button 
            className="mt-4 mb-8 mr-8 text-lg bg-red-500 text-white py-2 px-2 rounded-lg hover:bg-red-600"
            onClick={() => removeAll()}
            >
            Clear All
            </button>
            </div>
            <AccordionsItemLists items={myCart} label={"Remove"}/>
        </div>

    )
}
export default Cart