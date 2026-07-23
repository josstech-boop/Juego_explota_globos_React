import { useContext } from "react"
import { JugadorContext } from "../JugadorContext"
const GloboNegro = ({  posicion, id }) => {

    const {
        setPuntaje,
        contadorExplotados,
        contadorNegro,
        EliminarGlobo,
    } = useContext(JugadorContext)

    return <>
        <div className={`globo-juego globo-negro pos-${posicion}`}
            onClick={(event) => {
                setPuntaje((prevPuntaje) => prevPuntaje - 3)
                contadorExplotados()
                contadorNegro()
                EliminarGlobo(id)
            }}
        >
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
        </div>
    </>
}

export { GloboNegro } 