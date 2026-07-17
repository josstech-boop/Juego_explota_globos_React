import React from "react";
import { GloboAzul } from "./azul";
import { GloboNegro } from "./negro";
import { GloboRojo } from "./rojo";
import { GloboVerde } from "./verde";

const Globos = ({ posicion, color, id }) => {


    const colores = {
        'azul': <GloboAzul posicion={posicion} id={id} />,
        'rojo': <GloboRojo posicion={posicion} id={id} />,
        'verde': <GloboVerde posicion={posicion} id={id} />,
        'negro': <GloboNegro posicion={posicion} id={id} />,
    }

    //realizar un randomn de colores de un arreglo

    return <>
        {colores[color]}

    </>
}

export { Globos } 