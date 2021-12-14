import "./Burger.css"


const Burger = ({id,name,pic,description,price,addBurger,removeBurger}) => {


    return (
        <div className={`${removeBurger ? "burger__small" : "burger"}`} id={id} >
            <img src={pic} alt="burger" />

            <div className="burger__text">
                <h2 className="burger__name">{name}</h2>
                <p className="burger__description">{description}</p>
            </div>
            
            <div className="container__price">
                <p className="burger__price">{price}$</p>
                
                {removeBurger ? <button onClick={removeBurger}>Remove</button> : <button onClick={addBurger}>Add</button>}
            </div>
        </div>
    )
}

export default Burger
