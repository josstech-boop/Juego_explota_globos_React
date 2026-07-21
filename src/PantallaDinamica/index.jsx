import React, { useContext } from "react";
import { JugadorContext } from "../JugadorContext";
import { Final } from "../Final";
import { Login } from "../Login";
import { Juego } from "../PantallaJuego";

const PantallaDinamica = () => {

    const {
        pantallaDinamica
    } = useContext(JugadorContext)

    if (pantallaDinamica == 'inicio') {
        return (
            <Login />
        )
    } else if (pantallaDinamica == 'jugar') {
        return (
            <Juego />
        )

    } else if (pantallaDinamica == 'final') {
        return (
            <Final />
        )
    }
}

export { PantallaDinamica } 