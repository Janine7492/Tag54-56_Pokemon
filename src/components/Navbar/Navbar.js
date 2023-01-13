import { Link } from "react-router-dom"

function Navbar(props) {

    return (
        <section>
            <Link to={props.link}>{props.image}</Link>

            <button type="button" onClick={props.mood}>{ }</button>
        </section>
    )
}
export default Navbar