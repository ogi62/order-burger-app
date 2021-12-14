import "./Logo.css"
import LogoImage from "../images/burgerclassic.jpg"

function Logo() {
    return (
        <div className="logo">
            <img src={LogoImage} alt="Burger classic"/>
            <span>Dansil Burgers</span>
        </div>
    )
}

export default Logo
