import React from "react";
import { GloboAzul } from "./azul";
import { GloboNegro } from "./negro";
import { GloboRojo } from "./rojo";
import { GloboVerde } from "./verde";

const Globos = ({ posicion, color }) => {


    const colores = {
        'azul': <GloboAzul posicion={posicion} />,
        'rojo': <GloboRojo posicion={posicion} />,
        'verde': <GloboVerde posicion={posicion} />,
        'negro': <GloboNegro posicion={posicion} />,
    }

    //realizar un randomn de colores de un arreglo

    return <>
        {colores[color]}

    </>
}

export { Globos } 