import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import Type from "../components/Type/Type";
import Arrow from "../img/arrow.png"



function Menu() {

    const [typesData, setTypesData] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/`)
            .then((response) => response.json())
            .then((typeData) => {
                console.log(typeData.results);
                setTypesData(typeData.results);

            })
    }, [])

    console.log(typesData);

    return (
        <section>
            <Link to="/" className='returnArrow'><img src={Arrow} /></Link>
            <Logo />

            <section className="typeFilterSection">
                {typesData.map((singleType) => {
                    return <Type key={singleType.name} type={singleType.name} link={`/type-details/${singleType.name}`} />
                })}
            </section>

        </section>
    )
}

export default Menu;