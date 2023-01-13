import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Pokemon(props) {

    const [imgData, setImgData] = useState([]);
    const [idData, setIdData] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then((response) => response.json())
            .then((pokeData) => {
                setImgData(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`)
                setIdData(pokeData.id)

            })
    }, [props.name])
    return (
        <div className={props.imgClass}>
            <Link to={`/details/${props.name}`} className="Link">
                <div className="bkgYellow">
                    <img src={imgData} ></img>
                    <section className={`pokeData ${props.class}`} >
                        <p className={`pokeNumber`}>{idData < 10 ? `#00` : idData < 100 ? `#0` : `#`}{idData}</p>
                        <p className="pokeName">{props.name}</p>
                    </section>
                </div>
            </Link>
        </div>
    )
}

export default Pokemon;