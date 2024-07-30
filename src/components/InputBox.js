import { useContext } from "react"
import UserContext from "../utils/useContext"

const InputBox = () => {

    const { loggedInUser, setUserName } = useContext(UserContext)

    const updateUser = (value) => {
        setUserName(value)
    }
    
    return(
    <div className="text-center mt-8">
       <input 
       className="border border-gray-800 p-2" 
       type="text" 
       value={loggedInUser}
       onInput={(e) => updateUser(e.target.value)}
       />
    </div>

    )}

export default InputBox