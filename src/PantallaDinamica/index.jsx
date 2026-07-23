import React, { useContext } from "react";
import { JugadorContext } from "../JugadorContext";
import { Final } from "../Final";
import { Login } from "../Login";
import { Juego } from "../PantallaJuego";

const PantallaDinamica = () => {

    const pantallas = {
        inicio: <Login />,
        jugar: <Juego />,
        final: <Final />
    }

    const {
        pantallaDinamica
    } = useContext(JugadorContext)

    return (
        <>
            {pantallas[pantallaDinamica]}
        </>
    )
}

export { PantallaDinamica } 