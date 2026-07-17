import './mensaje.css'
import { JugadorContext } from '../JugadorContext'
import { useContext } from 'react'

const MensajeError = () => {

    const {
        mensajeError,
    } = useContext(JugadorContext)

    if (!mensajeError) {
        return ''
    }

    return (
        <>
            {/* Mensaje de error */}
            <div className="mensaje-error-alerta">
                ⚠️ Ingresa tu nombre para comenzar.
            </div>

        </>
    )


}

export { MensajeError } 