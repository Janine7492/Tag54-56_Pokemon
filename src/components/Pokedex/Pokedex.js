import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon/Pokemon';
import burger from '../../img/burger.png'
import { Link } from 'react-router-dom';


function Pokedex() {
    const [data, setData] = useState([]);
    const [inputname, setInputname] = useState("")
    const [useAbleData, setuseAbleData] = useState();


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            .then((response) => response.json())
            .then((data) => {
                // durch setData(eichhörnchen.results) wird in das objekt "eichhörnchen" in ein Array "results" umgeschrieben
                setData(data.results)
                setuseAbleData(data.results)
            })
    }, [])

    useEffect(() => {
        if (inputname === "") {
            setuseAbleData(data);
        }

        let length = (inputname).length;
        setuseAbleData(data.filter(el => el.name.slice(0, length).toLowerCase() === (inputname).toLowerCase().replaceAll(" ", "-")));
    }, [inputname])

    if (useAbleData === undefined) {

        return;
    }

    return (
        <div className='pokedexWrapper'>
            <section className="topSection">
                <Link to={"/menu"}>
                    <img src={burger} />
                </Link>
                <input id="input" type="text" placeholder="Enter Pokemon Name" onInput={e => setInputname(e.target.value)}></input>


            </section>
            <div className="pokeWrapper bkgYellow"
                id="pokeWrapper">
                {useAbleData.map((singlePokemon, index) => {
                    return <Pokemon key={index} name={singlePokemon.name} imgClass={"imgBox"} />
                })}
            </div>
        </div>
    )
}
export default Pokedex;