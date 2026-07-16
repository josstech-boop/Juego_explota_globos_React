import React from "react";


const JugadorContext = React.createContext()

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
    const [temporizador, setTemporizador] = React.useState(0)




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
                setError
            }
        }>
            {children}
        </JugadorContext.Provider>
    )
}

export { JugadorContextProvider, JugadorContext };