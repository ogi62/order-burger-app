import "./Error.css"
import ErrorPic from "../images/error404.jpg"

const Error = () => {
    return (
        <div className="error__container">
            <img src={ErrorPic} alt="Error" />
        </div>
    )
}

export default Error
