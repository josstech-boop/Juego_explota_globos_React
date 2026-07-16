
import { useContext } from "react"
import { JugadorContext } from "../JugadorContext"
const GloboNegro = ({ id }) => {

    const {
        setPuntaje
    } = useContext(JugadorContext)

    return <>
        <div className={`globo-juego globo-negro pos-${id}`}
            onClick={(event) => {
                console.log(event.target)
                setPuntaje((prevPuntaje) => prevPuntaje - 3)
            }}
        >
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
        </div>
    </>
}

export { GloboNegro } 