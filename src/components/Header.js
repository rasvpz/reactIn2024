import { useState, useContext } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/useContext";

const Header = () => {
  const [logButton, setLogButton] = useState("LogIn");
  const status = useOnlineStatus()
  const { loggedInUser } = useContext(UserContext)

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="flex">
        <img src={logo} alt="Logo"  className="w-16 h-16 m-4"/>
        <h3 className="pt-8 pl-2"> Laayi</h3>
      </div>

      <div>
        <ul  className="flex p-8">
          <li className="ml-4"><Link to="/">Home</Link></li>
          <li className="ml-4"><Link to="/about">About us </Link></li>
          <li className="ml-4"><Link to="/product">Product</Link></li>
          <li className="ml-4"><Link to="/contact">Contact us</Link></li>
          <li className="ml-4"><Link to="/grocery">Grocery</Link></li>
          <li className="ml-4"><Link to="/cart">Cart</Link></li>
          <li className="ml-4"><Link to="/user">User</Link></li>
          <li className="ml-4">
            <button
              onClick={() =>
                logButton === "LogIn"
                  ? setLogButton("LogOut")
                  : setLogButton("LogIn")
              }
            >
              {logButton}
            </button>
          </li>
          <li className="ml-4">
          <button style={status === true ? {backgroundColor: 'green', color: 'white', padding:2} : {backgroundColor: 'red', color: 'white',padding:2}}>
            {status === true ? loggedInUser : ' Offline '}
          </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
