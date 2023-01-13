import React, { useEffect, useState } from 'react';
import Pokemon from "../components/Pokedex/Pokemon/Pokemon"
import Logo from "../components/Logo/Logo";
import PokeDetails from '../components/PokeDetails/PokeDetails';
import Attacks from "../components/Attacks/Attacks"
import Movements from "../components/Movements/Movements"
import "./Details.css"
import { Link, useParams } from 'react-router-dom';
import Type from '../components/Type/Type';
import Arrow from "../img/arrow.png";

function DetailView() {

    const [idData, setIdData] = useState([]);
    const [typeData, setTypeData] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [power, setPower] = useState([]);
    const [toggle, setToggle] = useState("hidden");

    const param = useParams();
    const name = param.name;


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((pokeData) => {
                setIdData(pokeData);
                setAbilities(pokeData.abilities);
                setPower(pokeData.moves);
                setTypeData(pokeData.types);
                console.log(typeData);
            })
    }, [])
    return (
        < section >
            <Link to="/" className='returnArrow'><img src={Arrow} /></Link>
            <Logo />
            <Pokemon key={idData.id} name={name} class={"pokeDetailStyle"} imgClass={"pokeDetailImg"} />
            <PokeDetails key={idData.id - 2} />
            <div className='typeWrapper'>
                {typeData.map((singleType) => {
                    return <Type key={idData.id} type={singleType.type.name} link={`/type-details/${singleType.type.name}`} />
                })}
            </div>

            <div className='attackSection'>
                <button type="button" onClick={() => { toggle === "hidden" ? setToggle("shown") : setToggle("hidden") }
                } className="attackButton">Ablilities & Movements</button>
                <div className={toggle}>
                    <div>
                        <h2>Abilities</h2>
                        {abilities.map((singleAbility, index) => {
                            return <Attacks key={index} attack={abilities[abilities.indexOf(singleAbility)].ability.name} />
                        })}
                    </div>
                    <div>
                        <h2>Movements</h2>
                        {power.map((singleMovement, index) => {
                            return <Movements key={index} movement={power[power.indexOf(singleMovement)].move.name} />
                        })}
                    </div>
                </div>
            </div>
        </ section >
    )
}

export default DetailView;