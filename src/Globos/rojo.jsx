
import { useContext } from "react"
import { JugadorContext } from "../JugadorContext"
const GloboRojo = ({ posicion, id }) => {

    const {
        setPuntaje,
        contadorPositivos,
        contadorExplotados,
        EliminarGlobo,
    } = useContext(JugadorContext)

    return <>
        <div className={`globo-juego globo-rojo pos-${posicion}`}
            onClick={(event) => {
                setPuntaje((prevPuntaje) => prevPuntaje + 1)
                contadorPositivos()
                contadorExplotados()
                EliminarGlobo(id)
            }}
        >
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
        </div>
    </>
}

export { GloboRojo } 