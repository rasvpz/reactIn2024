import logo from "../../images/logo.png";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" /> 
                <span className="logo-name"> Laayi</span>
            </div>

            <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Product</li>
                <li>Contact us</li>
                <li>Cart</li>
             </ul>
            </div>

        </div>
    )
}
export default Header