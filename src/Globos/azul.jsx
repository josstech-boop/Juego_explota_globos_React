import { useContext } from "react"
import { JugadorContext } from "../JugadorContext"
const GloboAzul = ({ posicion, id }) => {

    const {
        setPuntaje,
        contadorPositivos,
        contadorExplotados,
        EliminarGlobo,
    } = useContext(JugadorContext)

    return <>
        <div id={id} className={`globo-juego globo-azul pos-${posicion}`}
            onClick={(event) => {
                setPuntaje((prevPuntaje) => prevPuntaje + 5)
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

export { GloboAzul } 