import React from "react"
import Burger from "../images/double-double.png"
import BigMac from "../images/burgeri.png"
import Lokacija from "../images/vracar-mapa.png"
import "./Main.css"
import Section from "./Section"

const Main = () => {

    
    return (
        <div className="main">
            
            <Section
                title="Dansil Burgers"
                description="Order now, best burgers in town.
                            Quality you can taste."
                image={Burger}
                orderNow
            />
            <Section
                title="About"
                description="We make best burgers since 1992.
                Our satisfied customers are what make us happy.
                Traditional recepies, organic vegetables and 100% meat."
                image={BigMac}
            />
            <Section 
                title="Locations"
                description="You can find us in three different locations in city center.
                                Krunska 68(open 24h), Milesevska 88( 09h - 23h ) and Makenzijeva 103( 09h - 23h )."
                image={Lokacija}
                orderNow
            />

        </div>
    )
}

export default Main
