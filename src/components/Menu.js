import Burger from "./Burger";
import "./Menu.css"
import Card from "./UI/Card"
import Burgerica from "../images/burgeri/baconburger.jpg"
import Beef from "../images/burgeri/beefpeper.jpg"
import BigBurger from "../images/burgeri/bigburger.jpg"
import BigTasty from "../images/burgeri/bigtastyburger.jpg"
import BurgerMeal from "../images/burgeri/burgermeal.jpg"
import ChickenBurger from "../images/burgeri/chickenburger.jpg"
import ChickenBurger1 from "../images/burgeri/chickenburger1.jpg"
import DoubleBurger from "../images/burgeri/doubleburger.jpg"
import DoubleCheese from "../images/burgeri/doublecheese.jpg"
import ExtraBurger from "../images/burgeri/extraburger.jpg"
import FiredPancakes from "../images/burgeri/firedpancakes.jpg"
import FriedCheese from "../images/burgeri/friedcheese.jpg"
import Pancakes from "../images/burgeri/pancakes.jpg"
import Sandwiches from "../images/burgeri/sandwiches.jpg"
import TripleBurger from "../images/burgeri/tripleburger.jpg"
import VegetableBurger from "../images/burgeri/vegetableburger.jpg"
import { useContext } from "react";
import CartContext from "../store/cart-context";


const DUMMY_MEALS = [
    {
      id: Math.floor(Math.random() * 1000000),
      name: 'Dansil Burger',
      picture: `${Burgerica}`,
      description: 'Beef,cheese,onion,iceberg,tomato,burger sauce',
      price: 5,
    },
    {
      id: Math.floor(Math.random() * 1000000),
      name: 'Double Burger',
      picture: `${Beef}`,
      description: 'Beef,cheese,cheese,onion,spicy sauce,iceberg!',
      price: 5.5,
    },
    {
      id: Math.floor(Math.random() * 1000000),
      name: 'Big Burger',
      picture: `${BigBurger}`,
      description: 'Beef,onion rings,tomato,burger sauce,cheese,onion',
      price: 5.9,
    },
    {
      id: Math.floor(Math.random() * 1000000),
      name: 'Bacon Burger',
      picture: `${BigTasty}`,
      description: 'Beef,bacon,burger sauce,ketchup,onion,iceberg',
      price: 5.6,
    },
    {
      id: Math.floor(Math.random() * 1000000),
        name: 'Chicken Burger',
        picture: `${BurgerMeal}`,
        description: 'Chicken,gorgonzola sauce,pickles,onion,cheese',
        price: 5,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: 'Serbian Burger',
        picture: `${ExtraBurger}`,
        description: 'Beef,onion,egg,tomato,pickle,cheese!',
        price: 6,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: 'Classic Burger',
        picture: `${Burgerica}`,
        description: 'Beef,tomato,onion,iceberg,cheese',
        price: 5.2,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: 'Spicy Burger',
        picture: `${DoubleBurger}`,
        description: 'Beef,onion,tomato,iceberg,burger sauce',
        price: 5.5,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: 'Chili Burger',
        picture: `${DoubleCheese}`,
        description: 'Beefe,chili sauce,burger sauce,cheese,bacon',
        price: 4.9,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: 'Gorgonzola Burger',
        picture: `${ChickenBurger}`,
        description: 'Chicken,gorgonozla sauce,cheese,iceberg,onion!',
        price: 5.8,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: 'Pancake #1',
        picture: `${FiredPancakes}`,
        description: 'Ham,cheese,mustard,onion sauce,special sauce',
        price: 3.2,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: 'Greek Burger',
        picture: `${FriedCheese}`,
        description: 'Beef,cheese,tzatziki sauce,iceberg,onion,tomato',
        price: 5.2,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: 'Pancake #2',
        picture: `${Pancakes}`,
        description: 'Ham,cheese,tomato,tzatziki sauce,pickles',
        price: 3.4,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: 'Club sandwiche',
        picture: `${Sandwiches}`,
        description: 'Chicken,bacon,iceberg,cezar sauce,onion,tomato!',
        price: 3.6,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: ' Triple Burger',
        picture: `${TripleBurger}`,
        description: 'Beef,cheese,iceberg,tomato,bacon',
        price: 6.3,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: 'Vegetable Burger',
        picture: `${VegetableBurger}`,
        description: 'Beef,season salads',
        price: 5.7,
      },
  ];


const Menu = () => {

  const cartCtx = useContext(CartContext)



const cartItemAddHandler = item => {
  //new id
  const novi = Math.floor(Math.random() * 1000000)
  //replace id with new id 
  const newItem = {...item, id: novi }
    cartCtx.addItem(newItem)
}


    const burgerList = DUMMY_MEALS
                        .map(meal => 
                                <Burger
                                 id={meal.id}
                                 key={meal.id}
                                 name={meal.name}
                                 description={meal.description}
                                 price={meal.price}
                                 pic={meal.picture}
                                addBurger={cartItemAddHandler.bind(null, meal)}
                                 />
                            )

    return (
        <div className="menu__background">
        <Card>
            <div className="burger__list">
                {burgerList}
            </div>
        </Card>
        </div>
    )
}

export default Menu
