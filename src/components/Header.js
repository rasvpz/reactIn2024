import { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [logButton, setLogButton] = useState("LogIn");
  const status = useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-name"> Laayi</span>
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us </Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li>
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
          <li>
          <button style={status === true ? {backgroundColor: 'green', color: 'white'} : {backgroundColor: 'red', color: 'white'}}>
            {status === true ? 'Online' : 'Offline'}
          </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
