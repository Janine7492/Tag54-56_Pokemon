import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pokemon from "../components/Pokedex/Pokemon/Pokemon";
import Type from "../components/Type/Type";
import burger from '../img/burger.png';



function TypeDetails() {

    const type = useParams().name;
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${type}`)
            .then(res => res.json())
            .then((data) => {
                setPokemon(data.pokemon)
                console.log(data.pokemon);
            })
    }, []);



    return (
        <div>

            <div className="pokeWrapper bkgYellow"
                id="pokeWrapper">
                <div className="topSection">
                    <Link to={"/menu"}>
                        <img src={burger} />
                    </Link>
                </div>
                <div></div>
                <div className="typeBubble">
                    <p>Chosen Type:</p>
                </div>
                <div>
                    <Type type={type} />
                </div>
                {pokemon.map((singlePokemon, index) => {
                    return <Pokemon key={index} name={singlePokemon.pokemon.name} imgClass={"imgBox"} />
                })}
            </div>
        </div>
    );
};

export default TypeDetails;