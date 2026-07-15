import './login.css'
import React from 'react'

const Login = () => {


    const OnChange = () => {

    }

    return (


        <div className="pantalla-inicio">
            {/* Fondo y Elementos del Cielo */}
            <div className="cielo">
                <div className="nube nube-1"></div>
                <div className="nube nube-2"></div>
                <div className="nube nube-3"></div>
            </div>

            {/* Tarjeta Central de Configuración */}
            <main className="tarjeta-contenedor">
                <h1 className="titulo-principal">Explota los Globos</h1>
                <p className="subtitulo">
                    Pon a prueba tus reflejos. Consigue la mayor puntuación explotando los globos correctos antes de que se acabe el tiempo. ¡Evita los globos negros!
                </p>

                {/* Input de Nombre */}
                <div className="campo-nombre">
                    <label htmlFor="nombre-jugador" className="etiqueta-input">Nombre del Jugador</label>
                    <input
                        type="text"
                        id="nombre-jugador"
                        className="input-moderno"
                        placeholder="Escribe tu nombre aquí..."
                        value={'Joselyn'}
                        onChange={(event) => event.target}
                        disabled
                    />
                </div>

                {/* Sección de Puntuaciones */}
                <section className="seccion-valores">
                    <h2 className="titulo-seccion">Valor de los globos</h2>

                    <div className="cuadrícula-globos">
                        {/* Globo Rojo */}
                        <div className="tarjeta-globo">
                            <div className="globo-icono globo-rojo">
                                <div className="brillo-globo"></div>
                            </div>
                            <span className="puntos puntos-positivo">+1</span>
                        </div>

                        {/* Globo Verde */}
                        <div className="tarjeta-globo">
                            <div className="globo-icono globo-verde">
                                <div className="brillo-globo"></div>
                            </div>
                            <span className="puntos puntos-positivo">+2</span>
                        </div>

                        {/* Globo Azul */}
                        <div className="tarjeta-globo">
                            <div className="globo-icono globo-azul">
                                <div className="brillo-globo"></div>
                            </div>
                            <span className="puntos puntos-positivo">+5</span>
                        </div>

                        {/* Globo Negro */}
                        <div className="tarjeta-globo">
                            <div className="globo-icono globo-negro">
                                <div className="brillo-globo"></div>
                            </div>
                            <span className="puntos puntos-negativo">-3</span>
                        </div>
                    </div>
                </section>

                {/* Botón de Acción */}
                <button type="button" className="boton-comenzar">
                    Comenzar Juego
                </button>
            </main>

            {/* Franja de Césped */}
            <div className="cesped">
                <div className="capa-cesped-atras"></div>
                <div className="capa-cesped-delante"></div>
            </div>
        </div>

    )
}

export { Login }