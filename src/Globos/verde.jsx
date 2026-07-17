
import { useContext } from "react"
import { JugadorContext } from "../JugadorContext"
const GloboVerde = ({ posicion, id }) => {

    const {
        setPuntaje,
        contadorPositivos,
        contadorExplotados,
        EliminarGlobo,
    } = useContext(JugadorContext)

    return <>
        <div className={`globo-juego globo-verde pos-${posicion}`}
            onClick={(event) => {
                setPuntaje((prevPuntaje) => prevPuntaje + 2)
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

export { GloboVerde } 