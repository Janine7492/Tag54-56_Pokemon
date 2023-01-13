import React, { useEffect, useState } from 'react';


function PokeDetails(props) {

    return (
        <article>
            <section>
                <p> {props.type}</p>
            </section>
            <section>
                <p>
                    {props.abilties}
                </p>
            </section>
        </article>
    )
}
export default PokeDetails