
import { useContext } from "react"
import { JugadorContext } from "../JugadorContext"
const GloboNegro = ({  posicion }) => {

    const {
        setPuntaje,
        contadorExplotados,
        contadorNegro,
    } = useContext(JugadorContext)

    return <>
        <div className={`globo-juego globo-negro pos-${posicion}`}
            onClick={(event) => {
                console.log(event.target)
                setPuntaje((prevPuntaje) => prevPuntaje - 3)
                contadorExplotados()
                contadorNegro()
            }}
        >
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
        </div>
    </>
}

export { GloboNegro } 