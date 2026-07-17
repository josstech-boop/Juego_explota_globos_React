import React from "react";


const JugadorContext = React.createContext()

const estadisticas = {
    globosExplotados: 0,
    globosPositivos: 0,
    globosNegativos: 0,
}

const globosRandom = [
    { posicion: 3, color: "rojo" },
    { posicion: 15, color: "verde" },
    { posicion: 8, color: "azul" },
    { posicion: 2, color: "negro" },

    { posicion: 11, color: "rojo" },
    { posicion: 7, color: "verde" },
    { posicion: 19, color: "azul" },
    { posicion: 5, color: "negro" },

    { posicion: 14, color: "rojo" },
    { posicion: 1, color: "verde" },
    { posicion: 10, color: "azul" },
    { posicion: 18, color: "negro" },

    { posicion: 6, color: "rojo" },
    { posicion: 20, color: "verde" },
    { posicion: 9, color: "azul" },
    { posicion: 13, color: "negro" },

    { posicion: 4, color: "rojo" },
    { posicion: 16, color: "verde" },
    { posicion: 12, color: "azul" },
    { posicion: 17, color: "negro" }
];

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
    const [temporizador, setTemporizador] = React.useState(10)
    //Estadisticas de globos
    const [estadisticaGlobos, setEstadisticaGlobos] = React.useState(estadisticas)
    // Estado para buscar globos e eliminarlos 
    const [globosExistencia, setGlobosExistencia] = React.useState(globosRandom)
    //Estado para dibujar los globos 
    const [globosDibujar, setGlobosDibujar] = React.useState([])



    const reiniciar = () => {
        setPantallaDinamica('inicio')
        setPuntaje(0)
        setTemporizador(10)
        setEstadisticaGlobos(estadisticas)
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
        // const globosTemporales = [...globosDibujar]
        const minCeiled = Math.ceil(1)
        const maxFloored = Math.floor(20)
        const buscarIndice = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)

        const posicionTemporal = globosExistencia.find(globoPosicion => globoPosicion.posicion == buscarIndice)
        console.log('yo posiccion', posicionTemporal)

        // globosTemporales.push(posicionTemporal)
        // console.log('globo temporal', globosTemporales)

        setGlobosDibujar((prev) => [...prev, posicionTemporal])

        console.log('inidice', buscarIndice)

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
            }
        }>
            {children}
        </JugadorContext.Provider>
    )
}

export { JugadorContextProvider, JugadorContext };