import { Link } from "react-router-dom";
import Cart from "./Cart";
import "./Header.css"
import Logo from "./Logo";


const Header = ({showCart}) => {
    return (
        <div className="header">
            <Logo/>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/Menu">Menu</Link>
            </nav>
            <Cart showCart={showCart}/>

        </div>
    )
}

export default Header
