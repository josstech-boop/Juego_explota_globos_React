
import { useContext } from "react"
import { JugadorContext } from "../JugadorContext"
const GloboRojo = ({ id }) => {

    const {
        setPuntaje
    } = useContext(JugadorContext)

    return <>
        <div className={`globo-juego globo-rojo pos-${id}`}
            onClick={(event) => {
                console.log(event.target)
                setPuntaje((prevPuntaje) => prevPuntaje + 1)
            }}
        >
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
        </div>
    </>
}

export { GloboRojo } 