
import { useContext } from "react"
import { JugadorContext } from "../JugadorContext"
const GloboRojo = ({  posicion }) => {

    const {
        setPuntaje,
         contadorPositivos,
         contadorExplotados,
    } = useContext(JugadorContext)

    return <>
        <div className={`globo-juego globo-rojo pos-${posicion}`}
            onClick={(event) => {
                console.log(event.target)
                setPuntaje((prevPuntaje) => prevPuntaje + 1)
                contadorPositivos()
                contadorExplotados()
            }}
        >
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
        </div>
    </>
}

export { GloboRojo } 