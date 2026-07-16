
import { useContext } from "react"
import { JugadorContext } from "../JugadorContext"
const GloboVerde = ({ id }) => {

    const {
        setPuntaje
    } = useContext(JugadorContext)

    return <>
        <div className={`globo-juego globo-verde pos-${id}`}
            onClick={(event) => {
                console.log(event.target)
                setPuntaje((prevPuntaje) => prevPuntaje + 2)
            }}
        >
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
        </div>
    </>
}

export { GloboVerde } 