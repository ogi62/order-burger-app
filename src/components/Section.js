import { Link } from "react-router-dom"

const Section = ({ title, description, image, orderNow }) => {
    return (
        <div className="main__one">
                <div className="description">
                    <h4>{title}</h4>
                    <p>
                        {description}
                    </p>
                    {orderNow && <Link to="/Menu">Menu</Link>}
                </div>
                <div className="image__container">
                    <img src={image} alt={title} />
                </div>
            </div>
    )
}

export default Section
