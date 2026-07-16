
import { useContext } from "react"
import { JugadorContext } from "../JugadorContext"
const GloboAzul = ({ id }) => {

    const {
        setPuntaje
    } = useContext(JugadorContext)

    return <>
        <div className={`globo-juego globo-azul pos-${id}`}
            onClick={(event) => {
                console.log(event.target)
                setPuntaje((prevPuntaje) => prevPuntaje + 5)
            }}
        >
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
        </div>
    </>
}

export { GloboAzul } 