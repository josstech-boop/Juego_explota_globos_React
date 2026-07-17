import React from "react";
import { createContext } from "react";
import { useState } from "react";

const JugadorContext = React.createContext()

const estadisticas = {
    globosExplotados: 0,
    globosPositivos: 0,
    globosNegativos: 0,
}

const globosRandom = [
    { id: 0, posicion: 18, color: "azul" },
    { id: 0, posicion: 4, color: "rojo" },
    { id: 0, posicion: 22, color: "verde" },
    { id: 0, posicion: 9, color: "negro" },

    { id: 0, posicion: 16, color: "rojo" },
    { id: 0, posicion: 1, color: "azul" },
    { id: 0, posicion: 13, color: "verde" },
    { id: 0, posicion: 20, color: "negro" },

    { id: 0, posicion: 7, color: "azul" },
    { id: 0, posicion: 24, color: "rojo" },
    { id: 0, posicion: 5, color: "verde" },
    { id: 0, posicion: 14, color: "negro" },

    { id: 0, posicion: 25, color: "rojo" },
    { id: 0, posicion: 10, color: "azul" },
    { id: 0, posicion: 3, color: "verde" },
    { id: 0, posicion: 19, color: "negro" },

    { id: 0, posicion: 8, color: "rojo" },
    { id: 0, posicion: 12, color: "azul" },
    { id: 0, posicion: 21, color: "verde" },
    { id: 0, posicion: 6, color: "negro" },

    { id: 0, posicion: 2, color: "rojo" },
    { id: 0, posicion: 15, color: "azul" },
    { id: 0, posicion: 17, color: "verde" },
    { id: 0, posicion: 23, color: "negro" },
    { id: 0, posicion: 11, color: "rojo" }
]

const JugadorContextProvider = ({ children }) => {

    //Estado del nombre del jugador
    const [nombreJugador, setnombreJugador] = React.useState('')
    //Estado de pantalla dinamica 
    const [pantallaDinamica, setPantallaDinamica] = React.useState('inicio')
    //Estado de puntaje 
    const [puntaje, setPuntaje] = React.useState(0)
    //Mensaje de Error
    const [error, setError] = React.useState(false)
    //temporizador 
    const [temporizador, setTemporizador] = React.useState(30)
    //Estadisticas de globos
    const [estadisticaGlobos, setEstadisticaGlobos] = React.useState(estadisticas)
    //Estado para dibujar los globos 
    const [globosDibujar, setGlobosDibujar] = React.useState([])


    const reiniciar = () => {
        setPantallaDinamica('inicio')
        setPuntaje(0)
        setTemporizador(30)
        setEstadisticaGlobos(estadisticas)
        setGlobosDibujar([])

    }

    const contadorPositivos = () => {
        setEstadisticaGlobos((prev) => ({
            ...prev, globosPositivos: prev.globosPositivos + 1

        }))
    }
    const contadorExplotados = () => {
        setEstadisticaGlobos((prev) => ({
            ...prev, globosExplotados: prev.globosExplotados + 1

        }))
    }
    const contadorNegro = () => {
        setEstadisticaGlobos((prev) => ({
            ...prev, globosNegativos: prev.globosNegativos + 1

        }))
    }
    const BuscarPosicion = () => {
        const minCeiled = Math.ceil(1)
        const maxFloored = Math.floor(20)
        const buscarIndice = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)

        const posicionTemporal = globosRandom.find(globoPosicion => globoPosicion.posicion == buscarIndice)

        const copia = { ...posicionTemporal }
        copia.id = Date.now() + (Math.floor(Math.random() * 50))

        let posicionIncluye = globosDibujar.every(globo => globo.posicion != copia.posicion)

        if (posicionIncluye) {
            setGlobosDibujar((prev) => [...prev, copia])
            tiempoVida(copia.id)

        } else {
            BuscarPosicion()
        }

    }
    const EliminarGlobo = (id) => {
        setGlobosDibujar((prev) => (prev.filter(globo => globo.id != id)))
    }

    const tiempoVida = (id) => {

        setTimeout(() => {
            EliminarGlobo(id)
        }, 5000)

    }


    return (
        <JugadorContext.Provider value={
            {
                nombreJugador,
                setnombreJugador,
                pantallaDinamica,
                setPantallaDinamica,
                puntaje,
                setPuntaje,
                temporizador,
                setTemporizador,
                error,
                setError,
                reiniciar,
                contadorPositivos,
                estadisticaGlobos,
                contadorExplotados,
                contadorNegro,
                BuscarPosicion,
                globosDibujar,
                EliminarGlobo,
            }
        }>
            {children}
        </JugadorContext.Provider>
    )
}

export { JugadorContextProvider, JugadorContext };