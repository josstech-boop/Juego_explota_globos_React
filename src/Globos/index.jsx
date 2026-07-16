import React from "react";
import { GloboAzul } from "./azul";
import { GloboNegro } from "./negro";
import { GloboRojo } from "./rojo";
import { GloboVerde } from "./verde";

const Globos = ({ id, color }) => {


    const colores = {
        'azul': <GloboAzul id={id} />,
        'rojo': <GloboRojo id={id} />,
        'verde': <GloboVerde id={id} />,
        'negro': <GloboNegro id={id} />,
    }


    console.log(colores.rojo)
    //realizar un randomn de colores de un arreglo

    return <>
        {colores[color]}

    </>
}

export { Globos } 