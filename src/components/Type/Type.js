import { Link } from "react-router-dom";
import "./Type.css"

function Type(props) {

    return (
        <div className="typeBubble">
            <Link to={props.link}><p className={props.type}>{props.type.toUpperCase()}</p></Link>
        </div>
    )
};

export default Type;